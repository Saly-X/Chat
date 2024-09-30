import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Dimensions, View, Text, TextInput, FlatList } from "react-native";
import { RootStackParamList } from "../../../App";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import colors from "../../assets/colors";

//MOCK
const chatData = [
  {
    id: "1",
    username: "john_doe",
    last_message: "Hey, how are you?",
    message_count: 12,
  },
  {
    id: "2",
    username: "jane_smith",
    last_message: "Let's catch up tomorrow!",
    message_count: 8,
  },
  {
    id: "3",
    username: "mike_adams",
    last_message: "I will send you the files soon.",
    message_count: 20,
  },
  {
    id: "4",
    username: "alice_wonder",
    last_message: "Are you coming to the party?",
    message_count: 5,
  },
  {
    id: "5",
    username: "charles_bronson",
    last_message: "Thanks for the help!",
    message_count: 9,
  },
  {
    id: "6",
    username: "laura_palmer",
    last_message: "Can we talk later?",
    message_count: 14,
  },
  {
    id: "7",
    username: "david_williams",
    last_message: "I will be there in 10 minutes.",
    message_count: 6,
  },
  {
    id: "8",
    username: "emma_brown",
    last_message: "Let me know if you need anything.",
    message_count: 22,
  },
  {
    id: "9",
    username: "john_doe",
    last_message: "Hey, how are you?",
    message_count: 12,
  },
  {
    id: "10",
    username: "jane_smith",
    last_message: "Let's catch up tomorrow!",
    message_count: 8,
  },
  {
    id: "11",
    username: "mike_adams",
    last_message: "I will send you the files soon.",
    message_count: 20,
  },
  {
    id: "12",
    username: "alice_wonder",
    last_message: "Are you coming to the party?",
    message_count: 5,
  },
  {
    id: "13",
    username: "charles_bronson",
    last_message: "Thanks for the help!",
    message_count: 9,
  },
  {
    id: "14",
    username: "laura_palmer",
    last_message: "Can we talk later?",
    message_count: 14,
  },
  {
    id: "15",
    username: "david_williams",
    last_message: "I will be there in 10 minutes.",
    message_count: 6,
  },
  {
    id: "16",
    username: "emma_brown",
    last_message: "Let me know if you need anything.",
    message_count: 22,
  },
];

const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Chats">;

SplashScreen.preventAutoHideAsync();

export default function Chats({ navigation }: Props) {
  const [loaded, error] = useFonts({
    RubikPixels: require("../../assets/fonts/RubikPixels-Regular.ttf"),
    VT323: require("../../assets/fonts/VT323-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View
      style={{
        height: height,
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      {/*Header*/}
      <View
        style={{
          width: "100%",
          height: Dimensions.get("window").height * 0.07,
          borderBottomWidth: 5,
          borderColor: colors.secondary,
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 7,
        }}
      >
        <View
          style={{
            borderBottomWidth: 3,
            borderColor: colors.primary,
            padding: 5,
            flexDirection: "row",
            width: "60%",
            gap: 15,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize: 24,
              fontFamily: "VT323",
              //backgroundColor: "red",
            }}
          >
            Search
          </Text>
          <TextInput
            style={{
              fontSize: 20,
              color: colors.primary,
              fontFamily: "VT323",
              borderColor: colors.primary,
              flex: 1,
            }}
            placeholder=""
            cursorColor={colors.primary}
            placeholderTextColor={colors.primary}
            //textContentType="VT323"
          ></TextInput>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize: 24,
              fontFamily: "VT323",
            }}
          >
            Logout
          </Text>
        </View>
      </View>
      <Text
        style={{
          color: colors.primary,
          fontSize: 45,
          fontFamily: "RubikPixels",
        }}
        onPress={() => navigation.goBack()}
      >
        MC Gandonchik
      </Text>
      <FlatList
        data={chatData}
        style={{ width: "100%" }}
        contentContainerStyle={{
          paddingVertical: 10,
          gap: 10,
          paddingHorizontal: 15,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 3,
              borderColor: colors.secondary,
              width: "90%",
              flexDirection: "row",
            }}
          >
            <View style={{ width: "90%", padding: 7, gap: 5 }}>
              <Text style={{ color: colors.primary, fontSize: 18 }}>
                @{item.username}
              </Text>
              <Text style={{ color: colors.primary }}>
                Last message: {item.last_message}
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                flex: 1,
                //backgroundColor: "yellow",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  aspectRatio: 1,
                  backgroundColor: colors.secondary,
                  width: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: colors.primary }}>
                  {item.message_count}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
