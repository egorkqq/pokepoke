import axios from 'api/axios'
import { POKEAPI_POKEMONS_ENDPOINT } from 'api/common'

import { PokemonHabitat } from './types'

export interface GetHabitatParams {
  name: string
}

export const getHabitat = async (params: GetHabitatParams): Promise<PokemonHabitat> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon-habitat/${params.name}`)

  return response.data
}
