import { View } from "react-native";

import ProfileInfo from "@/components/accounts/Profile_info";
import ProfileForm from "@/components/accounts/profile-form";
const Tasks = () => {
  return (
    <View className="flex-1 bg-white">
      <ProfileInfo />
      <ProfileForm />
    </View>
  );
};

export default Tasks;
