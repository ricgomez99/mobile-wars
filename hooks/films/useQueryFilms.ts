import { useQuery } from "@tanstack/react-query";
import { fetchFilms } from "@/helpers/films";

export function useQueryFilms() {
  const { data: films = [], isLoading } = useQuery({
    queryKey: ["films"],
    queryFn: async () => await fetchFilms(),
  });

  return { films, isLoading };
}
