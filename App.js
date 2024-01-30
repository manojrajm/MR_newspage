import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./app/screen/Home";
import HomeNavigation from "./app/Navigations/HomeNavigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigation/>
      </NavigationContainer>
      {/* <Home /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
});
