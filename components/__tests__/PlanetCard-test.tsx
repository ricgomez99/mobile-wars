import { JSX } from "react";
import PlanetCard from "../Cards/PlanetCard.tsx/PlanetCard";
import { render } from "@testing-library/react-native";

describe("<PlanetCard />", () => {
  let planet;
  let card: JSX.Element;

  beforeEach(() => {
    planet = {
      nombre: "Hoth",
      diametro: "1234",
      gravedad: "200",
      poblacion: "1200000",
      clima: "frio",
      terreno: "hielo",
    };
    card = (
      <PlanetCard
        nombre={planet.nombre}
        diametro={planet.diametro}
        gravedad={planet.gravedad}
        poblacion={planet.poblacion}
        clima={planet.clima}
        terreno={planet.terreno}
      />
    );
  });

  it("should be rendered", () => {
    render(card);
  });

  it("should have a title", () => {
    const { getByTestId } = render(card);

    getByTestId("title");
  });

  it('should contain: "nombre", "diametro", "gravedad", "poblacion", "clima", and "terreno"', () => {
    const { getByTestId } = render(card);

    getByTestId("title");
    getByTestId("diameter");
    getByTestId("gravity");
    getByTestId("population");
    getByTestId("weather");
    getByTestId("terrain");
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});
