import { Modal, View, Text, Pressable, StyleSheet } from "react-native";
import { CharModalProps } from "@/types";
import { useCharContext } from "@/hooks/context/useCharContext";
import { useQueryCharacters } from "@/hooks/characters";
import Description from "@/components/Texts/Cards/Description";
import { useState, useEffect } from "react";
import { CharacterData } from "@/types";
import DetailsButton from "@/components/Buttons/Modal/DetailsButton";

export default function CharDetailsModal({
  showModal,
  closeModal,
}: CharModalProps) {
  const { characters, isSuccess } = useQueryCharacters();
  const [data, setData] = useState<CharacterData[]>([]);
  const { getCharacter } = useCharContext();
  const characterName = getCharacter();
  const details = data && data.find((char) => char.nombre === characterName);

  useEffect(() => {
    if (isSuccess && characters) {
      setData(characters);
    }
  }, [isSuccess, characters]);

  return (
    <Modal
      animationType="slide"
      visible={showModal}
      transparent={true}
      onRequestClose={closeModal}>
      <View style={styles.centered_content}>
        <View style={styles.modal_content}>
          <Text style={styles.modal_title}>{characterName}</Text>
          <Description
            testId="birth"
            label="F.nacimiento"
            description={details?.nacimiento}
          />
          <Description
            testId="origin"
            label="Origen"
            description={details?.lugar_de_origen}
          />
          <Description
            testId="genre"
            label="Genero"
            description={details?.genero}
          />
          <Description
            testId="hair"
            label="Cabello"
            description={details?.color_pelo}
          />
          <Description
            testId="height"
            label="Altura"
            description={details?.altura}
          />
          <DetailsButton onPress={closeModal} text="Cerrar" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centered_content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal_content: {
    flexDirection: "column",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modal_title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#181C14",
  },
});
