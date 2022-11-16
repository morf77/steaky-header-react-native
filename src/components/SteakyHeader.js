import React from "react";
import { Text, StyleSheet, Animated } from "react-native";

const max_height = 200;
const min_height = 50;

const SteakHeader = ({ animHeaderValue }) => {
  const animateHeaderBackgroundColor = animHeaderValue.interpolate({
    inputRange: [0, max_height - min_height],
    outputRange: ["blue", "rgb(51,255,255)"],
    extrapolate: "clamp",
  });

  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, max_height - min_height],
    outputRange: [max_height, min_height],
    extrapolate: "clamp",
  });
  // console.log(animateHeaderHeight);
  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
          backgroundColor: animateHeaderBackgroundColor,
        },
      ]}
    >
      <Text style={styles.textHeader}>A List Of Books</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(102, 102, 255)",
    // height: "200px",
    display: "flex",
    justifyContent: "center",
    borderRadius: 20,
  },
  textHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default SteakHeader;
