import { View, StyleSheet } from "react-native";
import FilmCard from "@/components/cards/FilmCard/FilmCard";
import { filmMock } from "@/constants/films-mock";

export default function FilmsWrapper() {
  return (
    <View style={styles.wrapper}>
      {filmMock &&
        filmMock.map((film) => (
          <FilmCard
            key={film.id}
            titulo={film.titulo}
            director={film.director}
            fecha_lanzamiento={film.fecha_lanzamiento}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 14,
    width: 100,
  },
});
