import AddMeetingCard from "@/components/common/AddMeetingCard";
import MeetingCard from "@/components/common/MeetingCard";
import MeetingModal from "@/components/common/MeetingModal";
import Search from "@/components/common/Search";
import { useState } from "react";
import { Image, Text, View } from "react-native";

const Favorites = () => {
  const [open, setOpen] = useState(false);

  return (
    <View className="flex-1 bg-white">
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        الإجتماعات
      </Text>

      <View className="flex-row items-center justify-between px-4 py-2">
        <Search placeholder="Search..." onChangeText={() => {}} value={""} />
        <Image
          source={require("@/assets/images/imail-logo.png")}
          resizeMode="contain"
        />
      </View>

      <View className="gap-[14px]">
        <MeetingCard
          date="December 12"
          title="اجتماع مع الفريق"
          timeRange="09:00 - 10:30"
          avatars={[]}
        />
        <MeetingCard
          date="December 12"
          title="اجتماع مع الفريق"
          timeRange="09:00 - 10:30"
          avatars={[]}
        />
        <AddMeetingCard onPress={() => setOpen(true)} />
      </View>

      <MeetingModal
        visible={open}
        onSubmit={() => {}}
        onClose={() => setOpen(false)}
      />
    </View>
  );
};

export default Favorites;
