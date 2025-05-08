import { ImageBackground, Text, View } from "react-native";

const Nav = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/navbg.png")}
      className="flex-1"
    >
      <Text>Hello</Text>
    </ImageBackground>
  );
};

export default Nav;
