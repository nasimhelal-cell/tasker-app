import Icon from "@expo/vector-icons/Ionicons";
import { TextInput, View } from "react-native";

interface SearchProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const Search = ({ placeholder, onChangeText, value }: SearchProps) => {
  return (
    <View className="flex-row items-center justify-center bg-active rounded-xl px-4 py-1 text-right mr-2">
      <Icon name="search-outline" size={24} color="#fff" />
      <TextInput
        placeholder={placeholder || "Search..."}
        className="bg-active placeholder:text-white rounded-xl py-2 text-left mr-2"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Search;
