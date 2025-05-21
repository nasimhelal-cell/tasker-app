import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View } from "react-native";
import SCREENS from "./screens";

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
    <Drawer.Navigator
      initialRouteName={SCREENS.HOME}
      drawerContent={(props) => (
        <View>
          <Text>Drawer</Text>
        </View>
      )}
    >
      <Drawer.Screen name={SCREENS.HOME} component={HomeScreen} />
      <Drawer.Screen name={SCREENS.PROFILE} component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
