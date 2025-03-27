import CharContext from "@/components/Contexts/CharsContext";
import { useState } from "react";
import { CharProviderProps } from "@/types";

export function CharContextProvider({ children }: CharProviderProps) {
  const [character, setCharacter] = useState("");
  const saveCharacter = (name: string) => {
    setCharacter((prev) => (prev = name));
  };

  const getCharacter = () => character;

  return (
    <CharContext.Provider value={{ getCharacter, saveCharacter, character }}>
      {children}
    </CharContext.Provider>
  );
}
