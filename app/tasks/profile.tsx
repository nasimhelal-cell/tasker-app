import ProfileForm from "@/components/accounts/profile-form";
import ProfileInfo from "@/components/accounts/Profile_info";
import { View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-white">
      <ProfileInfo />
      <ProfileForm />
    </View>
  );
};

export default Profile;
