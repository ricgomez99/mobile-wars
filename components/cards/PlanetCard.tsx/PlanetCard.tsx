import { View, Text, StyleSheet } from "react-native";
import Card from "../Card/Card";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import { PlanetCardProps } from "@/types";
import Description from "@/components/Texts/Cards/Description";

export default function PlanetCard({
  nombre,
  diametro,
  gravedad,
  poblacion,
  clima,
  terreno,
}: PlanetCardProps) {
  const placeholderImage = require("@/assets/images/planet.svg");

  return (
    <Card testId="planetCard">
      <ImageViewer imgSource={placeholderImage} />
      <View style={styles.card_text}>
        <Text testID="title" style={styles.card_title}>
          {nombre}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            flexWrap: "wrap",
            flexGrow: 0,
            flexShrink: 1,
          }}>
          <Description
            testId="diameter"
            label="Diametro"
            description={diametro}
          />
          <Description
            testId="gravity"
            label="Gravedad"
            description={gravedad}
          />
        </View>

        <Description testId="weather" label="Clima" description={clima} />
        <Description testId="terrain" label="Terreno" description={terreno} />
        <Description
          testId="population"
          label="Población"
          description={poblacion}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card_text: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "column",

    gap: 8,
  },

  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181C14",
  },
});
