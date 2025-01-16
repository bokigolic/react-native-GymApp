import React, { useState } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { exercises } from "../data/exercises";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const handleSearch = (text) => {
    setQuery(text);

    if (text === "") {
      setFilteredExercises(exercises); // Prikaži sve ako je unos prazan
    } else {
      const filtered = exercises.filter((exercise) =>
        exercise.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredExercises(filtered);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar onSearch={handleSearch} />

      {/* Lista vežbi */}
      <FlatList
        data={filteredExercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.bodyPart}>Target: {item.bodyPart}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No exercises found.</Text>
        }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    alignItems: "center", // Centriraj sadržaj
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover", // Prilagodi sliku da popuni okvir
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  bodyPart: {
    fontSize: 14,
    color: "#777",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "#999",
    marginTop: 20,
  },
});

export default HomeScreen;
