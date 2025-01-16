import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gym App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4f46e5",
    padding: 15,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
