import { View, StyleSheet } from "react-native";
import { CardProps } from "@/types";

export default function Card({ testId, children }: CardProps) {
  return (
    <View testID={testId} style={styles.card_container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
    maxHeight: "auto",
    alignItems: "center",
    padding: 16,
    gap: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#eeee",
    marginVertical: 8,
  },
});
