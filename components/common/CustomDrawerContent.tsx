import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { I18nManager, Image, StyleSheet, Text, View } from "react-native";

I18nManager.forceRTL(true);

const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/images/avatar-small-chat.png")}
          style={styles.avatar}
        />
        <Text style={styles.userName}>جاهد المبيضي</Text>
      </View>

      {/* Default Drawer Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001F2C",
    flex: 1,
    paddingTop: 40,
  },
  header: {
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff22",
    marginBottom: 20,
  },
  logo: {
    height: 50,
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
