import { printError } from "@/utils";
import axios, { AxiosError } from "axios";
import { mapCharacterData } from "@/utils";

export async function fetchCharacters() {
  try {
    const url = process.env.EXPO_PUBLIC_API_URL;
    const { data } = await axios.get(`${url}/people`);
    return mapCharacterData(data.results);
  } catch (error) {
    if (error instanceof AxiosError) {
      printError({
        name: error.name,
        code: error.code,
        data: error.cause,
        message: error.message,
      });
    }
  }
}
