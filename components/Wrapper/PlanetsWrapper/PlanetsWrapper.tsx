import { FlatList } from "react-native";
import PlanetCard from "@/components/Cards/PlanetCard.tsx/PlanetCard";
import { planetMocks } from "@/constants/planet-mocks";
import MainWrapper from "../MainWrapper/MainWrapper";

export default function PlanetsWrapper() {
  return (
    <MainWrapper>
      <FlatList
        data={planetMocks}
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
