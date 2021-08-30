import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";

import FaixaStories from "./FaixaStories";
import AvatarPost from "./AvatarPost";
import Post from "./Post";

function GeraNum() {
  return Math.floor(900 - Math.random() * 50);
}

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.postscontainer}>
        <FaixaStories />
        <RefreshControl>
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
          <Post numero={GeraNum()} />
        </RefreshControl>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  postscontainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
  },
});
