import { View, Text, StyleSheet } from "react-native";
import { FilmCardProps } from "@/types";
import ImageViewer from "@/components/ImageViewer/ImageViewer";

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
        <Text testID="director" style={styles.card_container_details}>
          {director}
        </Text>
        <Text testID="release_date" style={styles.card_container_details}>
          {fecha_lanzamiento}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 16,
    borderColor: "#eeee",
    textAlign: "left",
    width: 100,
  },
  card_container_text: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
  },
  card_container_title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#181C14",
  },
  card_container_details: {
    fontSize: 16,
    color: "#7F8487",
  },
});
