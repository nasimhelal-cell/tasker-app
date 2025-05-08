import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const ProfileInfo = () => {
  return (
    <View className="items-center justify-between">
      <Text className="text-5xl font-bold text-black">الملف الشخصي</Text>
      <View className="bg-red-500 outline outline-2 outline-active items-center gap-2 rounded-full">
        <Image
          source={require("@/assets/images/avatar-circle.png")}
          resizeMode="contain"
        />
        <TouchableOpacity className="bg-active rounded-full p-2 absolute bottom-0 right-0">
          <MaterialCommunityIcons name="pencil" size={16} color="white" />
        </TouchableOpacity>
      </View>
      <Text>Jarvis Pepperspray</Text>
      <Text>UI/UX DESIGNER</Text>
    </View>
  );
};

export default ProfileInfo;
