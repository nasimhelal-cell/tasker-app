/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#004861",
        secondary: "#2BBEDB",
        muted: "#E4ECFC",
        active: "#00232F",
        inactive: "#6A9CB0",
      },
    },
  },
  plugins: [],
};
