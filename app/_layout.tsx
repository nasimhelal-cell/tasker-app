import { Drawer } from "expo-router/drawer";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";

export default function TasksLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{ headerShown: false, drawerLabel: "Home" }}
        />
        <Drawer.Screen
          name="tasks"
          options={{ headerShown: false, drawerLabel: "Tasks" }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
