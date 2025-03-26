import {
  View,
  StyleSheet,
  Pressable,
  Text,
  LayoutChangeEvent,
} from "react-native";
import { TabButtonsProps } from "@/types";
import { useState } from "react";
import { TabsOptions } from "@/types";

export default function TabsButton({
  buttons,
  currentTab,
  setCurrentTab,
}: TabButtonsProps) {
  const handleTabPress = (index: number) => {
    setCurrentTab(index);
  };

  return (
    <View accessibilityRole="tab" style={styles.container}>
      <View style={styles.buttons_container}>
        {buttons &&
          buttons.map((button, idx) => {
            const textColor = currentTab === idx ? "#1572A1" : "#9D9D9D";
            const borderColor = currentTab === idx ? "#1572A1" : "#9D9D9D";
            return (
              <Pressable
                onPress={() => handleTabPress(idx)}
                key={idx}
                style={styles.button}>
                <Text
                  style={[
                    styles.button_text,
                    {
                      color: textColor,
                      borderBottomWidth: 1,
                      borderBottomColor: borderColor,
                    },
                  ]}>
                  {button.title}
                </Text>
              </Pressable>
            );
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    flexShrink: 1,
    backgroundColor: "transparent",
    borderRadius: 16,
    justifyContent: "center",
  },
  container_background: {
    position: "absolute",
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttons_container: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    borderBottomColor: "#9D9D9D",
    borderBottomWidth: 2,
  },
  button_text: {
    alignSelf: "center",
    fontSize: 14,
    fontWeight: "600",
  },
});
