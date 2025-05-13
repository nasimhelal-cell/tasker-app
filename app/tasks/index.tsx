import Search from "@/components/common/Search";
import Icon from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import {
  I18nManager,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

I18nManager.forceRTL(true);

// helping functions
const SendMessage = ({
  message,
  time,
  img,
}: {
  message: string;
  time: string;
  img: any;
}) => {
  return (
    <View className="flex-row justify-end mb-4">
      <View className="bg-[#E6F0F6] rounded-xl p-3 max-w-[80%]">
        <Text className="text-right text-sm text-gray-700 leading-5">
          {message}
        </Text>
        <Text className="text-xs text-gray-500 text-right mt-2">{time}</Text>
      </View>
      <Image source={img} className="w-8 h-8 rounded-full ml-2" />
    </View>
  );
};

const ReplyMessage = ({
  message,
  time,
  img,
  hasDocs,
}: {
  message: string;
  time: string;
  img: any;
  hasDocs: boolean;
}) => {
  return (
    <View className="flex-row justify-start mb-4">
      <Image source={img} className="w-8 h-8 rounded-full mr-2" />
      <View className="bg-[#f5f5f5] rounded-xl p-3 max-w-[80%]">
        <Text className="text-right text-sm text-gray-800">{message}</Text>
        {hasDocs && (
          <TouchableOpacity className="mt-2 bg-red-600 px-2 py-1 rounded w-12">
            <Text className="text-white text-center text-xs">PDF</Text>
          </TouchableOpacity>
        )}
        <Text className="text-xs text-gray-500 text-right mt-1">{time}</Text>
      </View>
    </View>
  );
};

const Tasks = () => {
  const [text, setText] = useState<string>("");

  // mock data
  const [messages, setMessages] = useState<any[]>([
    {
      id: 1,
      message:
        "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي...",
      time: "04:30 PM · 23/10/2024",
      isSender: true,
      hasDocs: false,
      img: require("@/assets/images/avatar-small-chat.png"),
    },
    {
      id: 2,
      message:
        "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي...",
      time: "04:30 PM · 23/10/2024",
      isSender: false,
      hasDocs: true,
      img: require("@/assets/images/avatar-small-chat.png"),
    },
    {
      id: 3,
      message:
        "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي...",
      time: "04:30 PM · 23/10/2024",
      isSender: true,
      hasDocs: false,
      img: require("@/assets/images/avatar-small-chat.png"),
    },
    {
      id: 4,
      message:
        "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي...",
      time: "04:30 PM · 23/10/2024",
      isSender: false,
      hasDocs: true,
      img: require("@/assets/images/avatar-small-chat.png"),
    },
  ]);

  return (
    <View className="flex-1 bg-white">
      {/* Task Number */}
      <View className="items-center py-1">
        <Text className="font-bold text-[16px] text-black">
          65289: رقم مهمة
        </Text>
      </View>

      {/* Search and Filter Icons */}
      <View className="flex-row items-center px-4 py-2">
        {/* search input */}
        <Search placeholder="Search..." onChangeText={() => {}} value={""} />

        {/* filter icons */}
        <TouchableOpacity className="mx-1  ml-auto">
          <Icon name="time" size={24} color="#004861" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-1">
          <Icon name="time" size={24} color="#004861" />
        </TouchableOpacity>
        <TouchableOpacity className="mx-1">
          <Icon name="checkmark-circle" size={24} color="#004861" />
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView className="flex-1 px-4 py-2">
        {messages.map((message, index) => {
          if (message.isSender) {
            return <SendMessage key={index} {...message} />;
          } else {
            return <ReplyMessage key={index} {...message} />;
          }
        })}
      </ScrollView>

      {/* Chat Input Section */}
      <View className="flex-row-reverse items-center px-4 py-2 border-t border-gray-200">
        <TouchableOpacity className="mx-2">
          <Icon name="share-social-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TextInput
          placeholder="اكتب الرد هنا"
          className="flex-1 bg-[#f5f5f5] rounded-xl px-4 py-2 text-right"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          disabled={text.trim() === ""}
          onPress={() => {
            if (text.trim() !== "") {
              setMessages([
                ...messages,
                {
                  id: messages.length + 1,
                  message: text,
                  time: new Date().toLocaleString(),
                  isSender: true,
                  hasDocs: false,
                  img: require("@/assets/images/avatar-small-chat.png"),
                },
              ]);
              setText("");
            }
          }}
        >
          <Icon
            name="send"
            size={24}
            color="#004861"
            style={{ transform: [{ rotate: "180deg" }] }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tasks;
