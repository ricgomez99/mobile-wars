import { View } from "react-native";
import { TabsOptions } from "@/types";
import { useState } from "react";
import { tabsContent } from "@/constants/tabsContent";
import TabsButton from "../Buttons/TabsButton/TabsButton";
import FilmsWrapper from "../Wrapper/FilmsWrapper/FilmsWrapper";
import PlanetsWrapper from "../Wrapper/PlanetsWrapper/PlanetsWrapper";

export default function Tabs() {
  const [currentTab, setCurrentTab] = useState<TabsOptions>(TabsOptions.Films);

  return (
    <>
      <TabsButton
        buttons={tabsContent}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <View style={{ flex: 1 }}>
        {currentTab === TabsOptions.Films ? (
          <FilmsWrapper />
        ) : (
          <PlanetsWrapper />
        )}
      </View>
    </>
  );
}
