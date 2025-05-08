import { Image } from "react-native";

const Logo = () => {
  return (
    <Image source={require("@/assets/images/logo.png")} resizeMode="contain" />
  );
};

export default Logo;
