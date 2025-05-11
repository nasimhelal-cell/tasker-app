import React, { useState } from "react";
import {
  I18nManager,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

I18nManager.forceRTL(true); // Make sure your app supports RTL

const categories = [
  "حكومي",
  "موارد بشرية",
  "عقود",
  "مالية",
  "جودة",
  "مباني",
  "تصميم",
  "المحتوى",
];

const DocumentCategoryList = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const filteredCategories = categories.filter((item) => item.includes(search));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>المستندات</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="بحث..."
        placeholderTextColor="#fff"
        value={search}
        onChangeText={setSearch}
      />

      <ScrollView contentContainerStyle={{ paddingVertical: 12 }}>
        {filteredCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.categoryButton,
              selected === item && styles.selectedButton,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selected === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111",
  },
  searchInput: {
    backgroundColor: "#002c2c",
    color: "#fff",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginBottom: 16,
    textAlign: "right",
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: "#002c2c",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedButton: {
    borderColor: "#007AFF",
  },
  categoryText: {
    fontSize: 18,
    color: "#002c2c",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#007AFF",
  },
});

export default DocumentCategoryList;
