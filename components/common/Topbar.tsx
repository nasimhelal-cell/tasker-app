import { Image, TouchableOpacity } from "react-native";

import { View } from "react-native";

const Topbar = () => {
  return (
    <View className="flex-row items-center bg-red-500  px-4">
      <Image
        source={require("@/assets/images/avatar-small.png")}
        resizeMode="contain"
      />
      <Image
        source={require("@/assets/images/logo-dark.png")}
        resizeMode="contain"
      />
      <TouchableOpacity>
        <Image
          source={require("@/assets/images/menu.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;
