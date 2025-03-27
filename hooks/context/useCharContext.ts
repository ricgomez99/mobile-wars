import { useContext } from "react";
import CharContext from "@/components/Contexts/CharsContext";

export function useCharContext() {
  const character = useContext(CharContext);

  if (character === undefined) {
    throw new Error("useCharContext should be used with the right context");
  }

  return character;
}
