import { NamedAPIResource } from "../common";

export interface Pokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pokémon */
  base_experience: number;
  /** The height of this Pokémon in decimetres */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pokémon in hectograms */
  weight: number;
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on */
}

/**
 * Abilities the given pokémon could potentially have
 */
export interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pokémon species */
  slot: number;
  /** The ability the Pokémon may have */
  ability: NamedAPIResource;
}
