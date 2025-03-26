import { View, StyleSheet, FlatList } from "react-native";
import { filmMock } from "@/constants/films-mock";
import FilmCard from "@/components/Cards/FilmCard/FilmCard";

export default function FilmsWrapper() {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={filmMock}
        renderItem={({ item }) => (
          <FilmCard
            key={item.id}
            titulo={item.titulo}
            director={item.director}
            fecha_lanzamiento={item.fecha_lanzamiento}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 0,
    flexShrink: 1,
  },
});
