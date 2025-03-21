import axios, { AxiosError } from "axios";

export async function fetchPlanets() {
  try {
    const url = process.env.EXPO_PUBLIC_API_URL;
    const { data } = await axios.get(`${url}/planets`);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log({
        name: error.name,
        code: error.code,
        data: error.cause,
        message: error.message,
      });
    }
  }
}
