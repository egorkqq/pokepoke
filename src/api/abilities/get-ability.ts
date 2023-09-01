import axios from 'api/axios'
import { POKEAPI_POKEMONS_ENDPOINT } from 'api/common'

import { Ability } from './types'

export interface GetAbilityParams {
  name: string
}

export const getAbility = async (params: GetAbilityParams): Promise<Ability> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/ability/${params.name}`)

  return response.data
}
