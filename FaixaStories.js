import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AvatarStory from "./AvatarStory";

export default function FaixaStories() {
  return (
    <View style={styles.storiescontainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
        <AvatarStory numero={Math.floor(100 - Math.random() * 50)} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  storiescontainer: {
    width: "100%",
    height: 80,
    backgroundColor: "white",
    paddingVertical: 10,
    flexDirection: "row",
  },
});
