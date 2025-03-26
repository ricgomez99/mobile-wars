import { FlatList } from "react-native";
import { filmMock } from "@/constants/films-mock";
import FilmCard from "@/components/Cards/FilmCard/FilmCard";
import MainWrapper from "../MainWrapper/MainWrapper";

export default function FilmsWrapper() {
  return (
    <MainWrapper>
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
        showsVerticalScrollIndicator={false}
      />
    </MainWrapper>
  );
}
