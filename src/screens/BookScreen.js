import React, { useRef, useState } from "react";
import { ScrollView, View, StyleSheet, Animated } from "react-native";
import SteakyHeader from "../components/SteakyHeader";
import BookList from "../components/BookList";

const BookScreen = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  console.log(scrollOffsetY);
  return (
    <View style={styles.book}>
      <SteakyHeader animHeaderValue={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <BookList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  book: {
    backgroundColor: "black",
  },
});

export default BookScreen;
