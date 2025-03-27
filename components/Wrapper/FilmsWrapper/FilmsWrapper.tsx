import { FlatList } from "react-native";
import FilmCard from "@/components/Cards/FilmCard/FilmCard";
import MainWrapper from "../MainWrapper/MainWrapper";
import { useQueryFilms } from "@/hooks/films";
import Loader from "@/components/Loader/Loader";

export default function FilmsWrapper() {
  const { isLoading, films } = useQueryFilms();
  return (
    <MainWrapper>
      {isLoading && <Loader />}
      <FlatList
        data={films}
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
