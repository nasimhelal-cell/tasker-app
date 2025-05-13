import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface MeetingCardProps {
  date: string; // e.g. "December 12"
  title: string; // Meeting title (Arabic or LTR)
  timeRange: string; // "09:00 - 10:30"
  avatars: string[]; // List of avatar URIs (first 3 displayed)
  onCall?: () => void;
  onVideo?: () => void;
  onMessage?: () => void;
}

const MeetingCard: React.FC<MeetingCardProps> = ({
  date,
  title,
  timeRange,
  avatars,
  onCall,
  onVideo,
  onMessage,
}) => {
  const bgBlue = "#e8f0ff";
  const primaryBlue = "#4379ff";

  const [isActive, setIsActive] = useState({
    call: false,
    video: false,
    message: false,
  });

  return (
    <View style={[cardStyles.container, { backgroundColor: bgBlue }]}>
      {/* Top row */}
      <View style={cardStyles.topRow}>
        <Text style={cardStyles.date}>{date}</Text>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={cardStyles.title}>{title}</Text>
          <Text style={cardStyles.time}>{timeRange}</Text>
        </View>
      </View>

      {/* Bottom row */}
      <View style={cardStyles.bottomRow}>
        {/* Avatars */}
        <View style={cardStyles.avatarGroup}>
          {[1, 2, 3].map((uri, i) => (
            <Image
              key={i}
              source={require("@/assets/images/avatar1.png")}
              style={[cardStyles.avatar, { marginLeft: i === 0 ? 0 : -12 }]}
            />
          ))}
        </View>

        {/* Action buttons */}
        <View style={cardStyles.actionGroup}>
          <TouchableOpacity
            style={[cardStyles.actionBtn, { backgroundColor: "#fff" }]}
            onPress={onCall}
          >
            <Ionicons name="call" size={16} color={primaryBlue} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[cardStyles.actionBtn, { backgroundColor: "white" }]}
            onPress={onVideo}
          >
            <Ionicons name="videocam" size={16} color={primaryBlue} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[cardStyles.actionBtn, { backgroundColor: primaryBlue }]}
            onPress={onMessage}
          >
            <Ionicons name="chatbubble" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MeetingCard;
// ============================================================
// cardStyles – styles for MeetingCard component
// ============================================================
const cardStyles = StyleSheet.create({
  /* outer card */
  container: {
    width: "95%",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 16,
    alignSelf: "center",
  },

  /* ── top row ─────────────────────────────── */
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  date: {
    fontSize: 13,
    color: "#6b7280", // slate‑500
    fontWeight: "600",
  },
  title: {
    fontSize: 15,
    color: "#111827", // slate‑900
    fontWeight: "700",
    textAlign: "right",
  },
  time: {
    fontSize: 13,
    color: "#6b7280",
    textAlign: "right",
    marginTop: 2,
  },

  /* ── bottom row ─────────────────────────── */
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  /* avatar cluster (left side) */
  avatarGroup: {
    flexDirection: "row",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#000",
    outlineWidth: 1,
    outlineOffset: 1,
    outlineColor: "#4379ff",
  },

  /* action buttons (right side) */
  actionGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
