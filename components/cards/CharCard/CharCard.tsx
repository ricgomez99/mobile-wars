import Card from "../Card/Card";
import ImageViewer from "@/components/ImageViewer/ImageViewer";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Description from "@/components/Texts/Cards/Description";
import { CharCardProps } from "@/types";
import { useCharContext } from "@/hooks/context/useCharContext";
import { useState } from "react";
import CharDetailsModal from "@/components/Modals/CharDetailsModal.tsx/CharDetailsModal";
import DetailsButton from "@/components/Buttons/Modal/DetailsButton";

const placeholderImage = require("@/assets/images/character.svg");

export default function CharCard({ nombre }: CharCardProps) {
  const [showModal, setShowModal] = useState(false);

  const { saveCharacter } = useCharContext();
  const handlePress = () => {
    saveCharacter(nombre);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Card testId="charCard">
        <ImageViewer imgSource={placeholderImage} />
        <View style={styles.card_text}>
          <Text testID="name" style={styles.card_title}>
            {nombre}
          </Text>
          <DetailsButton onPress={handlePress} text="Detalles" />
        </View>
      </Card>
      <CharDetailsModal showModal={showModal} closeModal={closeModal} />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 0,
    flexShrink: 1,
    flexDirection: "row",
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181C14",
  },
  card_text: {
    flexDirection: "column",
  },
});
