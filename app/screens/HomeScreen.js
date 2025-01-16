import React, { useState } from "react";
import { View, FlatList, Text, Image, StyleSheet, Animated, Pressable } from "react-native";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import { exercises } from "../../data/exercises";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const [filteredExercises, setFilteredExercises] = useState(exercises);

  const handleSearch = (text) => {
    setQuery(text);
    if (text === "") {
      setFilteredExercises(exercises);
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
      <FlatList
        data={filteredExercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => navigation.navigate("Details", { exercise: item })}
          >
            <Animated.View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.bodyPart}>Target: {item.bodyPart}</Text>
            </Animated.View>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  card: { backgroundColor: "#fff", padding: 15, marginVertical: 10, borderRadius: 15 },
  image: { width: 120, height: 120, borderRadius: 10, marginBottom: 10 },
  name: { fontSize: 18, fontWeight: "600", color: "#333", marginBottom: 8 },
  bodyPart: { fontSize: 14, color: "#777" },
});

export default HomeScreen;
