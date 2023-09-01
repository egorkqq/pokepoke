import axios from 'api/axios'
import { NamedAPIResourceList, POKEAPI_POKEMONS_ENDPOINT } from 'api/common'

export interface GetHabitatsParams {
  limit: number
  offset: number
}

export const getHabitats = async (params: GetHabitatsParams): Promise<NamedAPIResourceList> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon-habitat`, { params })

  return response.data
}
