import React from "react";
import { Text, StyleSheet, View } from "react-native";

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
    <View>
      {/* <View style={styles.bookHolder}>
        <Text style={styles.book}>{books[1].name}</Text>
      </View> */}
      {books.map((item) => (
        <View style={styles.bookHolder} key={item.name}>
          <Text style={styles.book}>{item.name}</Text>
        </View>
      ))}
    </View>
  );

  // <FlatList
  //   style={styles.list}
  //   data={books}
  //   keyExtractor={(item) => item.name}
  //   renderItem={({ item }) => {
  //     return (
  //       <View style={styles.bookHolder}>
  //         <Text style={styles.book}>{item.name}</Text>
  //       </View>
  //     );
};

const styles = StyleSheet.create({
  list: {
    textAlign: "center",
    backgroundColor: "#000",
  },
  bookHolder: {
    backgroundColor: "rgb(102,255,255)",
    height: 200,
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
    borderBottomWidth: 2,
    borderLeftWidth: 5,
    borderLeftColor: "blue",
    borderRightWidth: 5,
    borderRightColor: "blue",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  book: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default BookList;
