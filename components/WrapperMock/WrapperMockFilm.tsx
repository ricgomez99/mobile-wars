import MainWrapper from "@/components/Wrapper/MainWrapper/MainWrapper";
import { FlatList } from "react-native";
import FilmCard from "@/components/Cards/FilmCard/FilmCard";
import { filmMock } from "@/constants/films-mock";

export default function WrapperMockFilm() {
  return (
    <MainWrapper>
      <FlatList
        data={filmMock}
        renderItem={({ item }) => (
          <FilmCard
            director={item.director}
            titulo={item.titulo}
            fecha_lanzamiento={item.fecha_lanzamiento}
          />
        )}
      />
    </MainWrapper>
  );
}
