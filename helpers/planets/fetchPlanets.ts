import axios, { AxiosError } from "axios";
import { printError } from "@/utils";
import { mapPlanetData } from "@/utils";

export async function fetchPlanets() {
  try {
    const url = process.env.EXPO_PUBLIC_API_URL;
    const { data } = await axios.get(`${url}/planets`);
    return mapPlanetData(data.results);
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
