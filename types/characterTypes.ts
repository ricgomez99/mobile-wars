import React from "react";

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
}

export interface CharProviderProps {
  children: React.ReactNode;
}

export interface CharModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export type CharacterData = {
  nombre: string;
  nacimiento: string;
  genero: string;
  altura: string;
  color_pelo: string;
  lugar_de_origen: string;
};

export type CharDetails = Omit<CharacterData, "nombre" | "lugar_de_origen">;

export type CharContextType = {
  character: string;
  saveCharacter: (name: string) => void;
  getCharacter: () => string;
};
