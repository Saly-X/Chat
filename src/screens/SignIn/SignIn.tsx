import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import colors from "../../assets/colors";
import { Dimensions } from "react-native";
import { RootStackParamList } from "../../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { setRootViewBackgroundColor } from "@pnthach95/react-native-root-view-background";

const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

SplashScreen.preventAutoHideAsync();

export default function SignIn({ navigation }: Props) {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        setKeyboardHeight(event.endCoordinates.height);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  /////////////////////////////////////////
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
    <View style={{ height: Dimensions.get("window").height }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <View
          style={{
            height: Dimensions.get("window").height * 0.4,
            width: "80%",
            borderWidth: 5,
            borderColor: colors.primary,
            padding: 15,
          }}
        >
          <Text
            style={{
              marginTop: 30,
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
              }}
            >
              <Text
                style={{
                  color: colors.primary,
                  fontSize: 24,
                  fontFamily: "VT323",
                  //backgroundColor: "red",
                }}
                onPress={() => {
                  navigation.navigate("Chats");
                }}
              >
                Sign in
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
                navigation.navigate("SignUp");
              }}
            >
              Or sign up
            </Text>
          </View>
        </View>
      </View>
      {/* {keyboardHeight > 0 && (
        <View
          style={{
            height: keyboardHeight,
            backgroundColor: "green",
            flex: 1,
          }}
        />
      )} */}
    </View>
  );
}
