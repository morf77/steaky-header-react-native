import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const BookList = () => {
  const books = [
    { name: "book1" },
    { name: "book2" },
    { name: "book3" },
    { name: "book4" },
    { name: "book5" },
    { name: "book6" },
    { name: "book7" },
  ];
  return (
    <FlatList
      style={styles.list}
      data={books}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => {
        return (
          <View style={styles.bookHolder}>
            <Text style={styles.book}>{item.name}</Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    textAlign: "center",
    backgroundColor: "#000",
  },
  bookHolder: {
    backgroundColor: "rgb(102,255,255)",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    shadowColor: "red",
    shadowOffset: {
      width: 4,
      height: 10,
    },
    shadowOpacity: 0.66,
    shadowRadius: 10.32,
    elevation: 16,
    borderBottomWidth: "2px",
    borderLeftWidth: "5px",
    borderLeftColor: "blue",
    borderRightWidth: "5px",
    borderRightColor: "blue",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  book: {
    fontSize: "18px",
  },
});

export default BookList;
