import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

I18nManager.forceRTL(true); // Only if RTL is not already enabled

const ProfileFormSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Name */}
        <Text style={styles.label}>الاسم</Text>
        <View style={{ ...styles.inputGroup, flexDirection: "row" }}>
          <TextInput
            placeholder="Jarvis Pepperspray"
            style={styles.input}
            value={form.name}
            onChangeText={(val) => setForm({ ...form, name: val })}
          />
          <Ionicons name="person" size={20} color="#004861" />
        </View>

        {/* Email */}
        <Text style={styles.label}>البريد الإلكتروني</Text>
        <View style={{ ...styles.inputGroup, flexDirection: "row" }}>
          <TextInput
            placeholder="JarvisPepperspray@gmail.com"
            style={styles.input}
            value={form.email}
            onChangeText={(val) => setForm({ ...form, email: val })}
            keyboardType="email-address"
          />
          <MaterialIcons name="email" size={20} color="#004861" />
        </View>

        {/* Current Password */}
        <Text style={styles.label}>كلمة السر الحالية</Text>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="اكتب كلمة السر الحالية"
            style={styles.input}
            value={form.currentPassword}
            onChangeText={(val) => setForm({ ...form, currentPassword: val })}
            secureTextEntry
          />
          <Ionicons name="eye-off-outline" size={20} color="#004861" />
        </View>

        {/* New Password */}
        <Text style={styles.label}>كلمة السر الجديدة</Text>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="اكتب كلمة السر الجديدة"
            style={styles.input}
            value={form.newPassword}
            onChangeText={(val) => setForm({ ...form, newPassword: val })}
            secureTextEntry
          />
          <Ionicons name="eye-off-outline" size={20} color="#004861" />
        </View>

        {/* Confirm Password */}
        <Text style={styles.label}>تأكيد كلمة السر الجديدة</Text>
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="اكتب كلمة السر الجديدة"
            style={styles.input}
            value={form.confirmPassword}
            onChangeText={(val) => setForm({ ...form, confirmPassword: val })}
            secureTextEntry
          />
          <Ionicons name="eye-off-outline" size={20} color="#004861" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "right",
    color: "#333",
  },
  inputGroup: {
    flexDirection: "row-reverse",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 6,
    textAlign: "right",
    fontSize: 14,
  },
});

export default ProfileFormSection;
