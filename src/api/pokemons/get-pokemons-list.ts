import axios from 'api/axios'
import { NamedAPIResourceList, POKEAPI_POKEMONS_ENDPOINT } from 'api/common'

export interface GetPokemonsParams {
  limit: number
  offset: number
}

export const getPokemons = async (params: GetPokemonsParams): Promise<NamedAPIResourceList> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon`, { params })

  return response.data
}
