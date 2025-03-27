import MainWrapper from "@/components/Wrapper/MainWrapper/MainWrapper";
import { FlatList } from "react-native";
import { planetMocks } from "@/constants/planet-mocks";
import PlanetCard from "@/components/Cards/PlanetCard.tsx/PlanetCard";

export default function WrapperMockPlanet() {
  return (
    <MainWrapper>
      <FlatList
        data={planetMocks}
        renderItem={({ item }) => (
          <PlanetCard
            clima={item.clima}
            diametro={item.diametro}
            gravedad={item.gravedad}
            nombre={item.nombre}
            poblacion={item.poblacion}
            terreno={item.terreno}
          />
        )}
      />
    </MainWrapper>
  );
}
