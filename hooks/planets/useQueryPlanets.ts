import { useQuery } from "@tanstack/react-query";
import { fetchPlanets } from "@/app/helpers/planets";

export function useQueryPlanets() {
  const { data: planets = [], isLoading } = useQuery({
    queryKey: ["planets"],
    queryFn: async () => await fetchPlanets(),
  });

  return { planets, isLoading };
}
