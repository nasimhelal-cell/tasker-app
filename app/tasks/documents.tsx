import { View } from "react-native";

import DocumentCategoryList from "@/components/documents/DocumentCategoryList";
const Documents = () => {
  return (
    <View className="flex-1 bg-white">
      <DocumentCategoryList />
    </View>
  );
};

export default Documents;
