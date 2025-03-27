import { Pressable, Text, StyleSheet } from "react-native";
import { DetailsButtonProps } from "@/types/buttonTypes";

export default function DetailsButton({ onPress, text }: DetailsButtonProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.button_text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexGrow: 0,
    flexShrink: 1,
    paddingVertical: 8,
    alignItems: "flex-start",
    marginTop: 12,
  },

  button_text: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
