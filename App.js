import React from "react";
import { View } from "react-native";
import ColorChangerApp from "./ColorChangerApp";
import CounterApp from "./CounterApp";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ColorChangerApp />
      <CounterApp />
    </View>
  );
}
