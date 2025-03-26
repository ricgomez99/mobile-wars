import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import FilmsWrapper from "@/components/Wrapper/FilmsWrapper/FilmsWrapper";
import Tabs from "@/components/Tabs/Tabs";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ThemedText type="title">Hello World!</ThemedText>
      <Tabs />
      {/* <FilmsWrapper /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    marginInline: 20,
    paddingTop: 40,
  },
});
