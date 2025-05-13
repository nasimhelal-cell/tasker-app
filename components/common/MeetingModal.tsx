// ===============================================
// MeetingModal.tsx  (default export)
// ===============================================
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export interface MeetingFormData {
  name: string;
  startTime: string;
  endTime: string;
  date: string; // e.g. "2025‑05‑21"
  // add attachments, attendees, etc. when you wire them up
}

interface MeetingModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (data: MeetingFormData) => void;
}

const MeetingModal: React.FC<MeetingModalProps> = ({
  visible,
  onClose,
  onSubmit,
}) => {
  /* ─────────────  local state  ───────────── */
  const [name, setName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedDate, setSelectedDate] = useState("2025‑05‑21");

  // static strip (replace with dynamic later if you like)
  const dateStrip = [
    { key: "2025‑05‑21", n: "21", d: "Mon" },
    { key: "2025‑05‑22", n: "22", d: "Tue" },
    { key: "2025‑05‑23", n: "23", d: "Wed" },
    { key: "2025‑05‑24", n: "24", d: "Thu" },
    { key: "2025‑05‑25", n: "25", d: "Fri" },
  ];

  /* ─────────────  render  ───────────── */
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
    >
      {/* tap‑outside overlay */}
      <Pressable style={styles.overlay} onPress={onClose}>
        <Pressable style={styles.container} onPress={() => {}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* name */}
            <Text style={styles.label}>اسم الاجتماع</Text>
            <TextInput
              placeholder="أدخل اسم الاجتماع"
              placeholderTextColor="#9ca3af"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />

            {/* time */}
            <Text style={styles.label}>الوقت</Text>
            <View style={[styles.rowBetween, { marginBottom: 12 }]}>
              <TextInput
                placeholder="٠٩:٠٠ ص"
                placeholderTextColor="#9ca3af"
                style={[styles.input, styles.timeInput]}
                value={startTime}
                onChangeText={setStartTime}
              />
              <Text style={{ marginHorizontal: 8 }}>إلى</Text>
              <TextInput
                placeholder="١١:٠٠ ص"
                placeholderTextColor="#9ca3af"
                style={[styles.input, styles.timeInput]}
                value={endTime}
                onChangeText={setEndTime}
              />
            </View>

            {/* date */}
            <View style={styles.dateStrip}>
              {dateStrip.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  style={[
                    styles.dateCell,
                    selectedDate === item.key && styles.dateCellActive,
                  ]}
                  onPress={() => setSelectedDate(item.key)}
                >
                  <Text
                    style={[
                      styles.dateNum,
                      selectedDate === item.key && { color: "#fff" },
                    ]}
                  >
                    {item.n}
                  </Text>
                  <Text
                    style={[
                      styles.dateDay,
                      selectedDate === item.key && { color: "#fff" },
                    ]}
                  >
                    {item.d}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* attachments (stub) */}
            <Text style={styles.label}>المرفقات</Text>
            <TouchableOpacity style={styles.attachmentBox}>
              <MaterialIcons name="upload-file" size={24} color="#6b7280" />
              <Text style={{ color: "#6b7280", marginStart: 6 }}>
                قم بتحميل صور أو ملفات
              </Text>
            </TouchableOpacity>
          </ScrollView>

          {/* submit */}
          <TouchableOpacity
            style={styles.sendBtn}
            onPress={() => {
              onSubmit({ name, startTime, endTime, date: selectedDate });
              onClose();
            }}
          >
            <Text style={styles.sendText}>إرسال</Text>
          </TouchableOpacity>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default MeetingModal;

/* ─────────────  styles  ───────────── */
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 360,
    maxWidth: "95%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "right",
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 16,
    textAlign: "right",
  },
  timeInput: { flex: 1 },
  rowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateStrip: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  dateCell: {
    width: 52,
    height: 68,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d1d5db",
    justifyContent: "center",
    alignItems: "center",
  },
  dateCellActive: {
    backgroundColor: "#002B4D",
    borderColor: "#002B4D",
  },
  dateNum: { fontSize: 16, fontWeight: "700", color: "#111827" },
  dateDay: { fontSize: 12, color: "#6b7280" },
  attachmentBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 12,
    marginBottom: 24,
  },
  sendBtn: {
    backgroundColor: "#002B4D",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  sendText: { color: "#fff", fontSize: 16, fontWeight: "700" },
});
