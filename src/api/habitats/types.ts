import { NamedAPIResource } from 'api/common'
import { Name } from 'api/common/types'

export interface PokemonHabitat {
  /** The identifier for this resource */
  id: number
  /** The name for this resource */
  name: 'cave' | 'forest' | 'grassland' | 'mountain' | 'rare' | 'rough-terrain' | 'sea' | 'urban' | 'waters-edge'
  /** The name of this resource listed in different languages */
  names: Name[]
  /** A list of the Pokémon species that can be found in this habitat */
  pokemonSpecies: NamedAPIResource[]
}
