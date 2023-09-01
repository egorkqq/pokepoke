import { Name, NamedAPIResource } from 'api/common/types'

export interface Ability {
  /** The identifier for this resource */
  id: number
  /** The name for this resource */
  name: string
  /** Whether or not this ability originated in the main series of the video games */
  isMainSeries: boolean
  /** The generation this ability originated in */
  generation: NamedAPIResource
  /** The name of this resource listed in different languages */
  names: Name[]
  /** A list of Pokémon that could potentially have this ability */
  pokemon: AbilityPokemon[]
}

/**
 * Pokémon that could potentially have the given ability
 */
export interface AbilityPokemon {
  /** Whether or not this a hidden ability for the referenced Pokémon */
  isHidden: boolean
  /**
   * Pokémon have 3 ability 'slots' which hold references to possible abilities they could have.
   * This is the slot of this ability for the referenced pokemon
   */
  slot: number
  /** The Pokémon this ability could belong to */
  pokemon: NamedAPIResource
}
