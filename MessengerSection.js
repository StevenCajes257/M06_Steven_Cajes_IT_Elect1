import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

const botReplies = [
  "Hello! 👋",
  "How can I help you?",
  "That sounds interesting!",
  "Can you tell me more?",
  "I’m just a simple bot 🤖",
  "Haha, good one 😅",
  "Let’s keep chatting!",
];

const MessengerSection = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = { id: Date.now().toString(), text: newMessage, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Add bot reply after a delay
    setTimeout(() => {
      const randomReply = botReplies[Math.floor(Math.random() * botReplies.length)];
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: randomReply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type a message..."
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
      />
      <Button title="Send" onPress={handleSendMessage} color="#006064" />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageItem,
              item.sender === "user" ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#006064",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  list: {
    flex: 1,
  },
  messageItem: {
    marginVertical: 5,
    padding: 8,
    borderRadius: 6,
    maxWidth: "80%",
  },
  userMessage: {
    backgroundColor: "#b2ebf2",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#eeeeee",
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#004d40",
  },
});

export default MessengerSection;