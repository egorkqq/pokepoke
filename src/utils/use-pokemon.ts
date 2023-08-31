import useSWR from "swr";
import { getPokemon } from "../api/pokemons";
import { Pokemon } from "api/pokemons/types";

interface UsePokemonParams {
  id: number | null;
}

export const usePokemon = ({ id }: UsePokemonParams) => {
  const { data, isLoading, error } = useSWR<Pokemon | null>(["pokemon", id], {
    fetcher: () => {
      if (!id) return null;
      return getPokemon({ id });
    },
    keepPreviousData: true,
  });

  return {
    data,
    isLoading,
    error,
  };
};
