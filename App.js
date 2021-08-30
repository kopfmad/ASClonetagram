import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

////////////////// PAGE IMPORTS //////////////////////
import Home from "./Home";

////////////////// STACK CREATORS //////////////////////
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

////////////////// STACK SCREENS //////////////////////
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          title: "ASClonetagram",
          headerTitleStyle: {
            fontFamily: "Cookie",
            fontSize: 30,
          },
          headerRight: () => (
            <View style={styles.headerbuttonscontainer}>
              <TouchableOpacity style={styles.headerbutton}>
                <FontAwesome name="plus-square-o" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerbutton}>
                <FontAwesome name="heart-o" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerbutton}>
                <AntDesign name="message1" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

////////////////// APP //////////////////////
export default function App() {
  /// CUSTOM FONT ////
  let [fontsLoaded] = useFonts({
    Cookie: require("./assets/Cookie.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  /// APP ////
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "Home",
            tabBarLabel: "Home",

            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Search",
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Video",
            title: "Video",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="live-tv" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          headerShown={false}
          name="Shop"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Shop",
            title: "Shop",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="shopping-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Profile",
            title: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

////////////////// STYLES //////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerbuttonscontainer: { flexDirection: "row", paddingRight: 15 },
  headerbutton: { padding: 10 },
});
