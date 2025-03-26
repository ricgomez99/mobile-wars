import { View, StyleSheet } from "react-native";
import { MainWrapperProps } from "@/types";

export default function MainWrapper({ children }: MainWrapperProps) {
  return <View style={styles.wrapper}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0,
    flexShrink: 1,
  },
});
