import axios from 'api/axios'
import { NamedAPIResourceList, POKEAPI_POKEMONS_ENDPOINT } from 'api/common'

export const getAllHabitats = async (): Promise<NamedAPIResourceList> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon-habitat`, { params: { limit: 1000 } })

  return response.data
}
