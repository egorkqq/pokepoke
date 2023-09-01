import axios from 'api/axios'
import { POKEAPI_POKEMONS_ENDPOINT } from 'api/common'

import { Pokemon } from './types'

export interface GetPokemonParams {
  id: number
}

export const getPokemon = async (params: GetPokemonParams): Promise<Pokemon> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon/${params.id}`)

  return response.data
}
