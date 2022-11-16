import React, { useRef, useState } from "react";
import { ScrollView, View, StyleSheet, Animated } from "react-native";
import SteakHeader from "../components/SteakyHeader";
import BookList from "../components/BookList";

const BookScreen = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  console.log(scrollOffsetY);
  return (
    <View style={styles.book}>
      <SteakHeader animHeaderValue={scrollOffsetY} />
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <BookList />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    backgroundColor: "black",
  },
});

export default BookScreen;
