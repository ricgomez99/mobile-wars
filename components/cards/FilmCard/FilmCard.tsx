import { View, Text, StyleSheet } from "react-native";
import { FilmCardProps } from "@/types";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import FilmsDescription from "@/components/Texts/Cards/FilmsDescription";

const placeholderImage = require("@/assets/images/star-wars.svg");

export default function FilmCard({
  titulo,
  director,
  fecha_lanzamiento,
}: FilmCardProps) {
  return (
    <View testID="filmCard" style={styles.card_container}>
      <ImageViewer imgSource={placeholderImage} />
      <View style={styles.card_container_text}>
        <Text testID="title" style={styles.card_container_title}>
          {titulo}
        </Text>
        <FilmsDescription
          testId="director"
          label="Director"
          description={director}
        />
        <FilmsDescription
          testId="release_date"
          label="F.lanzamiento"
          description={fecha_lanzamiento}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
    maxHeight: "auto",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#eeee",
  },
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
