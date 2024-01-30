import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import ReadNews from "../screen/ReadNews";

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="" screenOptions={{headerShown:false}}>
      <Stack.Screen name="home"
       component={Home} />
       <Stack.Screen name="readnews"
       component={ReadNews}/>
    </Stack.Navigator>
  );
}

export default HomeNavigation;
