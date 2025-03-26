import { createContext } from "react";
import { CharDetails } from "@/types";

const CharContext = createContext<CharDetails | undefined>(undefined);
export default CharContext;
