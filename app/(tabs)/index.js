import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header"; // Proveri putanju
import SearchBar from "../../components/SearchBar";

const HomeScreen = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (text) => {
    console.log("Search query:", text);
    setQuery(text);
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar onSearch={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
});

export default HomeScreen;
