import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MessengerSection from "./MessengerSection";
import CommentSection from "./CommentSection";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Messenger Section */}
      <View style={[styles.section, { backgroundColor: "#e0f7fa" }]}>
        <Text style={[styles.label, { color: "#006064" }]}>Messenger (Chatbot)</Text>
        <MessengerSection />
      </View>

      {/* Comment Section */}
      <View style={[styles.section, { backgroundColor: "#fce4ec" }]}>
        <Text style={[styles.label, { color: "#880e4f" }]}>Comments</Text>
        <CommentSection />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    padding: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});