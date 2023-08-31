import axios from "api/axios";
import { POKEAPI_FQDN } from "../fqdn";
import { NamedAPIResourceList } from "../common";

const POKEAPI_POKEMONS_ENDPOINT = `${POKEAPI_FQDN}/api/v2`;

export interface GetPokemonsParams {
  limit: number;
  offset: number;
}

export const getPokemons = async (params: GetPokemonsParams): Promise<NamedAPIResourceList> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon`, { params });

  return response.data;
};
