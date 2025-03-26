import { CharacterType } from "@/types";

export const mapCharacterData = (data: CharacterType[]) =>
  data &&
  data.map((character) => ({
    nombre: character.name,
    nacimiento: character.birth_year,
    genero: character.gender,
    altura: character.height,
    color_pelo: character.hair_color,
    lugar_de_origen: character.homeworld,
  }));
