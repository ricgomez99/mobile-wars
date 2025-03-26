export type CharacterType = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
  url: string;
  created: string;
  edited: string;
};

export interface CharCardProps {
  nombre: string;
  lugar_de_origen: string;
}

export type CharacterData = {
  nombre: string;
  nacimiento: string;
  genero: string;
  altura: string;
  color_pelo: string;
  lugar_de_origen: string;
};

export type CharDetails = Pick<
  CharacterData,
  "nacimiento" | "genero" | "altura" | "color_pelo"
>;
