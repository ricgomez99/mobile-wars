export type PlanetType = {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
};

export interface PlanetCardProps {
  nombre: string;
  diametro: string;
  gravedad: string;
  poblacion: string;
  clima: string;
  terreno: string;
}
