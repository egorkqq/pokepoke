import axios from "api/axios";
import { POKEAPI_FQDN } from "../fqdn";
import { NamedAPIResourceList } from "../common";
import { Pokemon } from "./types";

const POKEAPI_POKEMONS_ENDPOINT = `${POKEAPI_FQDN}/api/v2`;

export interface GetPokemonParams {
  id: number;
}

export const getPokemon = async (params: GetPokemonParams): Promise<Pokemon> => {
  const response = await axios.get(`${POKEAPI_POKEMONS_ENDPOINT}/pokemon/${params.id}`);

  return response.data;
};
