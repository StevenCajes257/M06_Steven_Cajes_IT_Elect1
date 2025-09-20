import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Counter App </Text>
      <Text style={styles.counter}>{count}</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[styles.button, styles.increment]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.decrement]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.reset]}
        onPress={() => setCount(0)}
      >
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20, color: "#333" },
  counter: { fontSize: 60, marginBottom: 30, fontWeight: "bold", color: "#4CAF50" },
  buttonRow: { flexDirection: "row", gap: 20, marginBottom: 15 },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 3,
  },
  increment: { backgroundColor: "#4CAF50" },
  decrement: { backgroundColor: "#F44336" },
  reset: { backgroundColor: "#2196F3", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});

export default CounterApp;
