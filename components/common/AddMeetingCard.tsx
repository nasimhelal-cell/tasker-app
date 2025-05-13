// ─────────────────────────────────────────────────────────────
// Add New Meeting  CARD
// ─────────────────────────────────────────────────────────────
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type AddMeetingCardProps = {
  onPress?: () => void;
};

const AddMeetingCard: React.FC<AddMeetingCardProps> = ({ onPress }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={addCardStyles.container}
  >
    <View style={addCardStyles.iconWrapper}>
      <Feather name="plus" size={24} color="#0A3062" />
    </View>

    <Text style={addCardStyles.label}>Add New Meeting</Text>
  </TouchableOpacity>
);

export default AddMeetingCard;

// ─────────────────────────────────────────────────────────────
// styles
// ─────────────────────────────────────────────────────────────
const addCardStyles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#D5E0FF",
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  iconWrapper: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#E5ECFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#0A3062",
    letterSpacing: 0.2,
  },
});
