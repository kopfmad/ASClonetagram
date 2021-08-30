import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

export default function AvatarStory(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <Image
        source={{
          uri: `https://source.unsplash.com/${props.numero}x${props.numero}/?people`,
        }}
        style={styles.avatarimage}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatarimage: { width: 60, height: 60, marginLeft: 15, borderRadius: 50 },
});
