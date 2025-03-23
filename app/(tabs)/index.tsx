import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import FilmsWrapper from "@/components/Wrapper/FilmsWrapper/FilmsWrapper";

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
      <ThemedText type="title">Hello World!</ThemedText>
      <FilmsWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
