import { DrawerActions } from "@react-navigation/native";
import { Link, useNavigation } from "expo-router";
import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";

const Topbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 17,
        marginTop: 18,
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          display: isMenuOpen ? "none" : "flex",
        }}
      >
        <Image source={require("@/assets/images/avatar-small.png")} />
      </View>

      <Link href="/">
        <Image
          source={require("@/assets/images/logo-dark.png")}
          style={{ width: 120, height: 60, resizeMode: "contain" }}
        />
      </Link>

      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Image
          source={require("@/assets/images/menu.png")}
          style={{ resizeMode: "contain" }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Topbar;
