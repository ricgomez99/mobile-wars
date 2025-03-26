import { View, StyleSheet, Text } from "react-native";
import { TabsOptions } from "@/types";
import { useState } from "react";
import { tabsContent } from "@/constants/tabsContent";
import TabsButton from "../Buttons/TabsButton/TabsButton";
import FilmsWrapper from "../Wrapper/FilmsWrapper/FilmsWrapper";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<TabsOptions>(TabsOptions.Films);

  return (
    <>
      <TabsButton
        buttons={tabsContent}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <View>
        {currentTab === TabsOptions.Films ? (
          <FilmsWrapper />
        ) : (
          <Text style={{ color: "#f9f9f9" }}>Content 2</Text>
        )}
      </View>
    </>
  );
}
