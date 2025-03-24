import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import FilmsWrapper from "@/components/Wrapper/FilmsWrapper/FilmsWrapper";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Hello World!</ThemedText>
      <FilmsWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 8,
    marginInline: 20,
    paddingTop: 40,
  },
});
