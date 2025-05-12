import Icon from "@expo/vector-icons/Ionicons";
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

const messages = [
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
    id: 2,
    message:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي...",
    time: "04:30 PM · 23/10/2024",
    isSender: true,
    hasDocs: false,
    img: require("@/assets/images/avatar-small-chat.png"),
  },
];

const sendMessage = (
  message: string,
  time: string,
  isSender: boolean,
  hasDocs: boolean,
  img: any
) => {
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

const replyMessage = (
  message: string,
  time: string,
  isSender: boolean,
  hasDocs: boolean,
  img: any
) => {
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
        <View className="flex-row items-center justify-center bg-active rounded-xl px-4 py-1 text-right mr-2">
          <Icon name="search-outline" size={24} color="#fff" />
          <TextInput
            placeholder="Search..."
            className="bg-active placeholder:text-white rounded-xl py-2 text-left mr-2"
          />
        </View>

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
        {/* Example Message */}
        <View className="flex-row justify-end mb-4">
          <View className="bg-[#E6F0F6] rounded-xl p-3 max-w-[80%]">
            <Text className="text-right text-sm text-gray-700 leading-5">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما
              سيلهي...
            </Text>
            <Text className="text-xs text-gray-500 text-right mt-2">
              04:30 PM · 23/10/2024
            </Text>
          </View>
          <Image
            source={require("@/assets/images/avatar-small-chat.png")}
            className="w-8 h-8 rounded-full ml-2"
          />
        </View>

        {/* PDF Message Example */}
        <View className="flex-row justify-start mb-4">
          <Image
            source={require("@/assets/images/avatar-small-chat.png")}
            className="w-8 h-8 rounded-full mr-2"
          />
          <View className="bg-[#f5f5f5] rounded-xl p-3 max-w-[80%]">
            <Text className="text-right text-sm text-gray-800">
              هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء...
            </Text>
            <TouchableOpacity className="mt-2 bg-red-600 px-2 py-1 rounded w-12">
              <Text className="text-white text-center text-xs">PDF</Text>
            </TouchableOpacity>
            <Text className="text-xs text-gray-500 text-right mt-1">
              04:30 PM · 23/10/2024
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Chat Input Section */}
      <View className="flex-row-reverse items-center px-4 py-2 border-t border-gray-200">
        <TouchableOpacity className="mx-2">
          <Icon name="share-social-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TextInput
          placeholder="اكتب الرد هنا"
          className="flex-1 bg-[#f5f5f5] rounded-xl px-4 py-2 text-right"
        />
        <TouchableOpacity className="ml-2">
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
