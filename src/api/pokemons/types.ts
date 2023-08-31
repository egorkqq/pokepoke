import { NamedAPIResource } from '../common'

/**
 * Abilities the given pokémon could potentially have
 */
export interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  isHidden: boolean
  /** The slot this ability occupies in this Pokémon species */
  slot: number
  /** The ability the Pokémon may have */
  ability: NamedAPIResource
}

export interface PokemonMove {
  /** The move the Pokémon can learn */
  move: NamedAPIResource
  /** The details of the version in which the Pokémon can learn the move */
  versionGroupDetails: PokemonMoveVersion[]
}

/**
 * The details of the version in which the Pokémon can learn the move
 */
export interface PokemonMoveVersion {
  /** The method by which the move is learned */
  moveLearnMethod: NamedAPIResource
  /** The version group in which the move is learned */
  versionGroup: NamedAPIResource
  /** The minimum level to learn the move */
  levelLearnedAt: number
}

/**
 * Base stat values for the given Pokémon
 */
export interface PokemonStat {
  /** The stat the Pokémon has */
  stat: NamedAPIResource
  /** The effort points (EV) the Pokémon has in the stat */
  effort: number
  /** The base value of the stat */
  baseStat: number
}
export interface Pokemon {
  /** The identifier for this resource */
  id: number
  /** The name for this resource */
  name: string
  /** The base experience gained for defeating this Pokémon */
  baseExperience: number
  /** The height of this Pokémon in decimetres */
  height: number
  /** Set for exactly one Pokémon used as the default for each species */
  isDefault: boolean
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number
  /** The weight of this Pokémon in hectograms */
  weight: number
  /** A list of abilities this Pokémon could potentially have */
  abilities: PokemonAbility[]
  /** A list of forms this Pokémon can take on */
  forms: NamedAPIResource[]
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[]
  /** A list of base stat values for this Pokémon */
  stats: PokemonStat[]
}
