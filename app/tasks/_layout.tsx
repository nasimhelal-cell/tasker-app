import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

import Topbar from "@/components/common/Topbar";

const tabs = [
  {
    name: "index",
    title: "الرئيسية",
    icon: "home",
  },
  {
    name: "favorites",
    title: "المفضلة",
    icon: "heart",
  },
  {
    name: "documents",
    title: "المستندات",
    icon: "file",
  },
  {
    name: "profile",
    title: "الحساب",
    icon: "account",
  },
];

export default function RootLayout() {
  return (
    <View className="flex-1 bg-white">
      <Topbar />
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#00232F",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingHorizontal: 20,
            height: 80,
          },
          tabBarItemStyle: {
            paddingHorizontal: 10,
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {tabs.map(({ name, title, icon }: any) => (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <TabBarIcon focused={focused} name={icon} title={title} />
              ),
            }}
          />
        ))}
      </Tabs>
    </View>
  );
}

const TabBarIcon = ({
  focused,
  title,
  name,
  size,
}: {
  focused: boolean;
  title: string;
  name: keyof typeof MaterialCommunityIcons.glyphMap;
  size?: number;
}) => {
  return (
    <View
      className={`flex-row items-center gap-1 mt-12 justify-center rounded-full w-[100px] h-[45px] ${
        focused && "bg-white"
      }`}
    >
      {focused && (
        <Text className={`${focused && "text-secondary"}`}>{title}</Text>
      )}
      <MaterialCommunityIcons
        name={name}
        color={focused ? "#2BBEDB" : "#fff"}
        size={size || 24}
      />
    </View>
  );
};
