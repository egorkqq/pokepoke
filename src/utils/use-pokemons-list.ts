import useSWR from "swr";
import { getPokemons } from "../api/pokemons";
import { ITEMS_PER_PAGE } from "../config/constants";

interface UsePokemonsListParams {
  pageIndex: number;
}

export const usePokemonsList = ({ pageIndex }: UsePokemonsListParams) => {
  const { data, isLoading, error } = useSWR(["pokemons", pageIndex], () => {
    return getPokemons({ limit: ITEMS_PER_PAGE, offset: pageIndex * ITEMS_PER_PAGE });
  });

  return {
    data,
    isLoading,
    error,
  };
};
