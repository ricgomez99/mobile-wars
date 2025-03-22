import { PlanetType } from "@/types";

export const mapPlanetData = (data: PlanetType[]) =>
  data &&
  data.map((planet) => ({
    nombre: planet.name,
    diametro: planet.diameter,
    gravedad: planet.gravity,
    poblacion: planet.population,
    clima: planet.climate,
    terreno: planet.terrain,
  }));
