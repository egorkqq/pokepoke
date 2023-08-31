import useSWR from 'swr'

import { ITEMS_PER_PAGE } from 'config/constants'

import { getPokemons } from 'api/pokemons'

interface UsePokemonsListParams {
  pageIndex: number
}

export const usePokemonsList = ({ pageIndex }: UsePokemonsListParams) => {
  const { data, isLoading, error } = useSWR(['pokemons', pageIndex], () =>
    getPokemons({ limit: ITEMS_PER_PAGE, offset: pageIndex * ITEMS_PER_PAGE }),
  )

  return {
    data,
    isLoading,
    error,
  }
}
