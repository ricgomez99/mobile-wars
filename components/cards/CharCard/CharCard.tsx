import Card from "../Card/Card";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import { View, StyleSheet, Text } from "react-native";
import Description from "@/components/Texts/Cards/Description";
import { CharCardProps } from "@/types";

const placeholderImage = require("@/assets/images/character.svg");

export default function CharCard({ nombre, lugar_de_origen }: CharCardProps) {
  return (
    <Card testId="charCard">
      <ImageViewer imgSource={placeholderImage} />
      <View style={styles.card_text}>
        <Text testID="name" style={styles.card_title}>
          {nombre}
        </Text>
        <Description
          testId="origin"
          label="Origen"
          description={lugar_de_origen}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181C14",
  },
  card_text: {
    flexDirection: "column",
  },
});
