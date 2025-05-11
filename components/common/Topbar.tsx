import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

const Topbar = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const goToHome = () => {
    navigation.navigate("home"); // ensure 'Home' route exists
  };

  const openMenu = () => {
    console.log("Menu opened"); // replace with drawer or modal toggle
  };

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity onPress={() => {}}>
        <Image source={require("@/assets/images/avatar-small.png")} />
      </TouchableOpacity>

      <TouchableOpacity onPress={goToHome}>
        <Image
          source={require("@/assets/images/logo-dark.png")}
          style={{ width: 120, height: 60, resizeMode: "contain" }}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={openMenu}>
        <Image
          source={require("@/assets/images/menu.png")}
          style={{ resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;
