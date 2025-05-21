import Icon from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const ForwardSuccessModal = ({
  visible,
  onClose,
  title = "تم أنشاء المهمة بنجاح",
  message = "تم أنشاء المهمة بنجاح",
  showLogo = false,
}: {
  visible: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  showLogo?: boolean;
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View style={styles.modal}>
              {/* Message */}
              <Text style={styles.successText}>{title}</Text>
              {/* Checkmark Icon */}
              <View style={styles.circle}>
                <Icon
                  name="checkmark-circle"
                  style={styles.checkmark}
                  size={32}
                />
              </View>
              {/* Logo */}
              {showLogo && (
                <Image
                  source={require("@/assets/images/logo-imail.png")}
                  style={styles.logo}
                  resizeMode="contain"
                />
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ForwardSuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 16,
    alignItems: "center",
    width: "80%",
  },
  circle: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  checkmark: {
    color: "#003E51",
    fontSize: 80,
    fontWeight: "bold",
  },
  successText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 15,
  },
  logo: {
    width: 100,
    height: 40,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#003E51",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
  },
});
