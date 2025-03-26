import { View, Text, StyleSheet } from "react-native";
import { FilmCardProps } from "@/types";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import Description from "@/components/Texts/Cards/Description";
import Card from "../Card/Card";

const placeholderImage = require("@/assets/images/star-wars.svg");

export default function FilmCard({
  titulo,
  director,
  fecha_lanzamiento,
}: FilmCardProps) {
  return (
    <Card testId="filmCard">
      <ImageViewer imgSource={placeholderImage} />
      <View style={styles.card_container_text}>
        <Text testID="title" style={styles.card_container_title}>
          {titulo}
        </Text>
        <Description
          testId="director"
          label="Director"
          description={director}
        />
        <Description
          testId="release_date"
          label="F.lanzamiento"
          description={fecha_lanzamiento}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card_container_text: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  card_container_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181C14",
  },
});
