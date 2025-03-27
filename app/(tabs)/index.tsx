import { StyleSheet } from "react-native";
import { View } from "react-native";
import Tabs from "@/components/Tabs/Tabs";

export default function HomeScreen() {
  return (
    <View testID="home" style={styles.container}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 8,
    paddingTop: 40,
  },
});
