import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const colors = [
  { name: "White", hex: "#FFFFFF" },
  { name: "YellowGreen", hex: "#9ACD32" },
  { name: "Dark Pink", hex: "#C71585" },
];

const ColorChangerApp = () => {
  const [bgColor, setBgColor] = useState("white");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}> Color Changer </Text>

      <View style={styles.colorRow}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color.hex}
            style={[styles.colorBox, { backgroundColor: color.hex }]}
            onPress={() => setBgColor(color.hex)}
          >
            <Text
              style={[
                styles.colorLabel,
                color.name === "White" && { color: "#000" },
              ]}
            >
              {color.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 20, color: "#333" },
  colorRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  colorBox: {
    width: 100,
    height: 100,
    borderRadius: 12,
    margin: 10,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  colorLabel: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ColorChangerApp;
