import { FlatList } from "react-native";
import PlanetCard from "@/components/Cards/PlanetCard.tsx/PlanetCard";
import MainWrapper from "../MainWrapper/MainWrapper";
import { useQueryPlanets } from "@/hooks/planets";
import Loader from "@/components/Loader/Loader";

export default function PlanetsWrapper() {
  const { planets, isLoading } = useQueryPlanets();
  return (
    <MainWrapper>
      {isLoading && <Loader />}
      <FlatList
        data={planets}
        renderItem={({ item }) => (
          <PlanetCard
            nombre={item.nombre}
            diametro={item.diametro}
            gravedad={item.gravedad}
            poblacion={item.poblacion}
            clima={item.clima}
            terreno={item.terreno}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </MainWrapper>
  );
}
