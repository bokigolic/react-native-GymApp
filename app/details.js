import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      <Image source={exercise.image} style={styles.image} />
      <Text style={styles.name}>{exercise.name}</Text>
      <Text style={styles.bodyPart}>Target: {exercise.bodyPart}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  bodyPart: {
    fontSize: 16,
    color: "#555",
  },
});

export default DetailsScreen;
