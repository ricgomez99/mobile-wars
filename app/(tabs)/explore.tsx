import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import CharactersWrapper from "@/components/Wrapper/CharactersWrapper/CharactersWrapper";
import { CharContextProvider } from "@/hooks/context/CharsContextProvider";

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <CharContextProvider>
        <CharactersWrapper />
      </CharContextProvider>
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
