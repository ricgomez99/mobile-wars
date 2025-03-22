import { printError } from "@/utils";
import axios, { AxiosError } from "axios";
import { mapFilmData } from "@/utils";

export async function fetchFilms() {
  try {
    const url = process.env.EXPO_PUBLIC_API_URL;
    const { data } = await axios.get(`${url}/films`);
    return mapFilmData(data.results);
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
