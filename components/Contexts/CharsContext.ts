import { createContext } from "react";
import { CharContextType } from "@/types";

const CharContext = createContext<CharContextType | undefined>(undefined);
export default CharContext;
