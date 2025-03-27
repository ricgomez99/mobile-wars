import { Text, View, StyleSheet } from "react-native";
import { FilmDescriptionProps } from "@/types";

export default function Description({
  label,
  description,
  testId,
}: FilmDescriptionProps) {
  return (
    <View testID={testId} style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#181C14",
  },
  description: {
    fontSize: 14,
    color: "#7F8487",
  },
});
