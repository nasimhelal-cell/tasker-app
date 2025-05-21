import SCREENS from "@/components/common/screens";
import { Drawer } from "expo-router/drawer";
import { View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
export default function TasksLayout() {
  return (
    <View>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            drawerPosition: "right",
            drawerActiveBackgroundColor: "#00232F",
          }}
        >
          <Drawer.Screen
            name="index"
            options={{ headerShown: false, drawerLabel: "Home" }}
          />
          <Drawer.Screen
            name={SCREENS.TASKS}
            options={{ headerShown: false, drawerLabel: "Tasks" }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </View>
  );
}
