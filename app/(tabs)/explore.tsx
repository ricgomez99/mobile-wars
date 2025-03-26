import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import CharactersWrapper from "@/components/Wrapper/CharactersWrapper/CharactersWrapper";

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <CharactersWrapper />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    paddingTop: 40,
  },
});
