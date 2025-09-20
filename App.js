import React from "react";
import { View } from "react-native";
import MessengerSection from "./MessengerSection";
import CommentSection from "./CommentSection";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MessengerSection />
      <CommentSection />
    </View>
  );
}
