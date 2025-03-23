import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { ImageProps } from "@/types";

export default function ImageViewer({ imgSource }: ImageProps) {
  return <Image testID="image" source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 35,
    aspectRatio: 1 / 1,
    objectFit: "contain",
    borderRadius: 8,
  },
});
