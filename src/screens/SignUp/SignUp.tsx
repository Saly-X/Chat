import React, { useEffect } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import colors from "../../assets/colors";
import { Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";

const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

SplashScreen.preventAutoHideAsync();

export default function SignUp({ navigation }: Props) {
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#141414",
      }}
    >
      <View
        style={{
          height: "40%",
          width: "80%",
          borderWidth: 5,
          borderColor: colors.primary,
          padding: 15,
        }}
      >
        <Text
          style={{
            color: "#ebebeb",
            fontSize: 24,
            fontFamily: "VT323",
            marginVertical: 5,
          }}
        >
          Username
        </Text>
        <View
          style={{ borderWidth: 3, borderColor: colors.primary, padding: 5 }}
        >
          <TextInput
            style={{
              fontSize: 24,
              color: colors.primary,
              fontFamily: "VT323",
              borderColor: colors.primary,
            }}
            placeholder=""
            keyboardType="default"
            cursorColor={colors.primary}
            placeholderTextColor={colors.primary}
            //textContentType="VT323"
          ></TextInput>
        </View>
        <Text
          style={{
            color: "#ebebeb",
            fontSize: 24,
            fontFamily: "VT323",
            marginVertical: 5,
          }}
        >
          Email
        </Text>
        <View
          style={{ borderWidth: 3, borderColor: colors.primary, padding: 5 }}
        >
          <TextInput
            style={{
              fontSize: 24,
              color: colors.primary,
              fontFamily: "VT323",
              borderColor: colors.primary,
            }}
            placeholder=""
            cursorColor={colors.primary}
            placeholderTextColor={colors.primary}
            keyboardType="email-address"
            //textContentType="VT323"
          ></TextInput>
        </View>
        <Text
          style={{
            color: "#ebebeb",
            fontSize: 24,
            fontFamily: "VT323",
            marginVertical: 5,
          }}
        >
          Password
        </Text>
        <View
          style={{ borderWidth: 3, borderColor: colors.primary, padding: 5 }}
        >
          <TextInput
            style={{
              fontSize: 24,
              color: colors.primary,
              fontFamily: "VT323",
              borderColor: colors.primary,
            }}
            placeholder=""
            secureTextEntry={true}
            cursorColor={colors.primary}
            placeholderTextColor={colors.primary}
            //textContentType="VT323"
          ></TextInput>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              borderWidth: 3,
              borderColor: colors.primary,
              alignSelf: "flex-end",
              paddingHorizontal: 5,
              paddingBottom: 5,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "#ebebeb",
                fontSize: 24,
                fontFamily: "VT323",

                //backgroundColor: "red",
              }}
              onPress={() => {}}
            >
              Sign up
            </Text>
          </View>
          <Text
            style={{
              color: colors.primary,
              fontSize: 24,
              fontFamily: "VT323",
              textDecorationLine: "underline",
              alignSelf: "flex-end",
              paddingBottom: 8,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            Have account?
          </Text>
        </View>
      </View>
    </View>
  );
}
