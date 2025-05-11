import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProfileInfo = () => {
  return (
    <View className="items-center w-full justify-between">
      <Text style={{ fontSize: 20, fontWeight: "bold" }} className="text-black">
        الملف الشخصي
      </Text>
      <View
        style={{
          borderWidth: 3,
          borderColor: "#004861",
          borderRadius: 100,
        }}
      >
        <Image
          source={require("@/assets/images/avatar-circle.png")}
          resizeMode="contain"
        />
        <TouchableOpacity
          style={{
            padding: 5,
            backgroundColor: "#004861",
            borderRadius: 100,
            right: -6,
            bottom: 10,
          }}
          className="absolute "
        >
          <MaterialCommunityIcons name="pencil" size={16} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 18, letterSpacing: 1 }}>Jarvis Pepperspray</Text>
      <Text style={{ color: "#AAB2C8" }}>UI/UX DESIGNER</Text>
    </View>
  );
};

export default ProfileInfo;
