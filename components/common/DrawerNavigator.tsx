import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";

const Drawer = createDrawerNavigator();

const HomeScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);

const ProfileScreen = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
