import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "@/helpers/characters";

export function useQueryCharacters() {
  const {
    data: characters = [],
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["characters"],
    queryFn: async () => await fetchCharacters(),
  });

  return { characters, isLoading, isSuccess };
}
