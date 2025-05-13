// hexToRgba.ts
/**
 * Converts a value like "#4379ff/.1" → "rgba(67,121,255,0.1)".
 *
 * Supported inputs
 * ─────────────────────────────────────────────
 *  • "#RRGGBB"          → assumes α = 1
 *  • "#RGB"             → assumes α = 1
 *  • "#RRGGBB/α"        → α can be ".1", "0.25", "1", etc.
 *  • "#RGB/α"
 *  • "#RRGGBBAA"        → 8‑digit hex where AA is 00‑FF (0‑1 after /255)
 *
 * Throws if the colour part is malformed.
 */
export function hexToRgba(input: string): string {
  // split optional opacity
  const [hexPartRaw, alphaPart] = input.split("/");

  if (!/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(hexPartRaw))
    throw new Error(`Invalid hex colour: ${hexPartRaw}`);

  // normalise 3‑digit → 6‑digit
  let hexPart = hexPartRaw.toLowerCase();
  if (hexPart.length === 4) {
    hexPart = "#" + [...hexPart.slice(1)].map((c) => c + c).join("");
  }

  const hasEmbeddedAlpha = hexPart.length === 9; // #RRGGBBAA
  const r = parseInt(hexPart.slice(1, 3), 16);
  const g = parseInt(hexPart.slice(3, 5), 16);
  const b = parseInt(hexPart.slice(5, 7), 16);

  let alpha: number;
  if (hasEmbeddedAlpha) {
    // convert AA → 0‑1
    alpha = parseInt(hexPart.slice(7, 9), 16) / 255;
  } else if (alphaPart !== undefined) {
    alpha = parseFloat(alphaPart);
    if (Number.isNaN(alpha) || alpha < 0 || alpha > 1)
      throw new Error(`Invalid alpha channel: ${alphaPart}`);
  } else {
    alpha = 1;
  }

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
