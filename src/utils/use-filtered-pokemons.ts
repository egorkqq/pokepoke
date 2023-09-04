import uniqBy from 'lodash.uniqby'
import useSWR from 'swr'

import { getAbility } from 'api/abilities'
import { NamedAPIResource } from 'api/common'
import { getHabitat } from 'api/habitats'

import { useSelectedAbilities } from './use-selected-abilities'
import { useSelectedHabitats } from './use-selected-habitats'

// TODO: disable re-fetching, fix re-computing intersection each time
export const useFilteredPokemons = () => {
  const { abilities } = useSelectedAbilities()
  const { habitats } = useSelectedHabitats()

  const { data, isLoading, error } = useSWR(
    ['filterd-pokemons', ...abilities, ...habitats],
    async () => {
      if (!abilities.length && !habitats.length) return undefined

      const abilityFetchers = Promise.all(abilities.map((ability) => getAbility({ name: ability })))
      const habitatFetchers = Promise.all(habitats.map((habitat) => getHabitat({ name: habitat })))

      const [abilityResponses, habitatResponses] = await Promise.all([abilityFetchers, habitatFetchers])

      const abilityMatchedPokemons = abilityResponses.reduce<NamedAPIResource[]>((acc, response) => {
        const { pokemon } = response

        const pokemons = pokemon.map(({ pokemon: innerPokemon }) => innerPokemon)

        return [...acc, ...pokemons]
      }, [])

      const habitatMatchedPokemons = habitatResponses.map(({ pokemonSpecies }) => pokemonSpecies).flat()

      const onlyUniqueHabitatMatchedPokemons = uniqBy(habitatMatchedPokemons, 'name')
      const onlyUniqueAbilityMatchedPokemons = uniqBy(abilityMatchedPokemons, 'name')

      let intersection
      if (abilities.length && habitats.length)
        intersection = onlyUniqueAbilityMatchedPokemons.filter((x) =>
          onlyUniqueHabitatMatchedPokemons.some((pokemon) => pokemon.name === x.name),
        )
      if (!abilities.length && habitats.length) intersection = onlyUniqueHabitatMatchedPokemons
      if (abilities.length && !habitats.length) intersection = onlyUniqueAbilityMatchedPokemons

      return intersection
    },
    { keepPreviousData: !!abilities.length || !!habitats.length },
  )

  return { data, isLoading, error }
}
