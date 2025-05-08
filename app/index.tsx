import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  Dimensions,
  Easing,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "../components/common/Logo";
const { width, height } = Dimensions.get("window");

export default function SplashLoginScreen() {
  // form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    isRemember: false,
  });

  // password visibility
  const [pwVisible, setPwVisible] = useState(false);

  // navigation
  const navigateTo = useNavigation<any>();

  // animated values
  const waveAnim = useRef(new Animated.Value(0)).current;
  const iconAnim = useRef(new Animated.Value(-120)).current;
  const cardAnim = useRef(new Animated.Value(80)).current;
  const cardOpacity = useRef(new Animated.Value(0)).current;

  // animated values
  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(waveAnim, {
          toValue: 1,
          duration: 1200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.spring(iconAnim, {
          toValue: 0,
          damping: 7,
          stiffness: 120,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(350),
      Animated.parallel([
        Animated.timing(cardAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(cardOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, []);

  // login functionality
  const login = async () => {
    const { email, password, isRemember } = formData;

    // 1) basic validation
    if (!email.trim() || !password.trim()) {
      Alert.alert("Missing info", "Please fill in both email and password.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Invalid email", "Enter a valid e‑mail address.");
      return;
    }

    // 2) check if user exists

    // 3) navigate to home
    navigateTo.replace("nav");
    console.log(formData);
  };

  return (
    <View className="flex-1 items-center justify-start bg-white relative">
      {/* --- House icon --- */}
      <Animated.View
        className="mt-16"
        style={{ transform: [{ translateY: iconAnim }] }}
      >
        <View className="ml-14 size-full">
          <Logo />
        </View>
      </Animated.View>

      {/* --- Login card --- */}
      <Animated.View
        className="absolute w-11/12 self-center gap-4 rounded-2xl p-6 bg-slate-50 shadow-lg z-10"
        style={{
          bottom: height * 0.12,
          opacity: cardOpacity,
          transform: [{ translateY: cardAnim }],
        }}
      >
        <Text className="text-4xl text-slate-800">Welcome back</Text>
        <Text className=" text-slate-500">
          Enter your credentials to access your account
        </Text>

        {/* --- Email --- */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#94A3B8"
          keyboardType="email-address"
          autoCapitalize="none"
          className="border-b-4 border-active pb-2 text-slate-800"
          value={formData.email}
          onChangeText={(value) => setFormData({ ...formData, email: value })}
        />

        {/* --- Password --- */}
        <View className="flex-row items-center">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#94A3B8"
            secureTextEntry={!pwVisible}
            value={formData.password}
            onChangeText={(value) =>
              setFormData({ ...formData, password: value })
            }
          />
          <TouchableOpacity
            className="absolute right-0 bottom-2"
            onPress={() => setPwVisible(!pwVisible)}
          >
            <Feather
              name={pwVisible ? "eye" : "eye-off"}
              size={20}
              color="#94A3B8"
            />
          </TouchableOpacity>
        </View>

        {/* --- Remember me --- */}
        <View className="flex-row items-center">
          <Checkbox
            value={formData.isRemember}
            onValueChange={(value) =>
              setFormData({ ...formData, isRemember: value })
            }
            color={formData.isRemember ? "#0f172a" : undefined} // slate‑900 when checked
            className="mr-2 rounded-sm"
          />
          <Text className="text-slate-700">Remember me</Text>
        </View>

        {/* --- Login button --- */}
        <TouchableOpacity
          className="rounded-full px-10 bg-active py-3 self-start"
          onPress={login}
        >
          <Text className="text-center font-semibold text-white">LOGIN</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* --- Bottom wave --- */}
      <Animated.View className="absolute bottom-0 left-0">
        <Image
          source={require("@/assets/images/bgcircle.png")}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}
