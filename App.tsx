import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import supabase from "./src/supabase/supabaseClient";
import { useEffect } from "react";
import { gql, ApolloProvider, useQuery } from "@apollo/client";
import client from "./graphql/ApolloClient";
import WebView from "react-native-webview";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colors from "./src/assets/colors";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./src/screens/SignIn/SignIn";
import SignUp from "./src/screens/SignUp/SignUp";
import Chats from "./src/screens/Chats/ChatList";
import { setBackgroundColorAsync } from "expo-system-ui";

export type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  Chats: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const GET_PROFILES = gql`
  query {
    profilesCollection {
      edges {
        node {
          id
          username
          created_at
        }
      }
    }
  }
`;
interface AppContentProps {
  children?: React.ReactNode;
}
setBackgroundColorAsync("green");
const AppContent: React.FC<AppContentProps> = ({ children }) => {
  const { loading, error, data } = useQuery(GET_PROFILES);

  useEffect(() => {
    if (error) {
      console.error("Error fetching profiles:", error);
    } else if (loading) {
      console.log("Loading...");
    } else {
      console.log("Profiles:", data?.profilesCollection?.edges);
    }
  }, [loading, error, data]);

  return <View style={styles.container}>{children}</View>;
};

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider style={{ backgroundColor: "red" }}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: colors.background,
          }}
          edges={[`top`, `bottom`]}
        >
          <View style={{ backgroundColor: "yellow", flex: 1 }}>
            <AppContent>
              {/* <WebView
              style={
                {
                  //height: 100, width: 200
                }
              }
              source={{
                uri: "https://www.youtube.com",
              }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            /> */}
              <NavigationContainer>
                <Stack.Navigator
                  screenOptions={{
                    animation: "none",
                    contentStyle: { backgroundColor: "#a3a3a3" },
                  }}
                >
                  <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Chats"
                    component={Chats}
                    options={{ headerShown: false }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            </AppContent>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
