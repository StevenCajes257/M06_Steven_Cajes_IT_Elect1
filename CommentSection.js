import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([...comments, { id: Date.now().toString(), text: newComment }]);
    setNewComment("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={setNewComment}
        style={styles.input}
      />
      <Button title="Post" onPress={handleAddComment} color="#880e4f" />
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Text style={styles.commentText}>{item.text}</Text>
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
    borderColor: "#880e4f",
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  list: {
    flex: 1,
  },
  commentItem: {
    marginVertical: 5,
  },
  commentText: {
    color: "#560027",
  },
});

export default CommentSection;