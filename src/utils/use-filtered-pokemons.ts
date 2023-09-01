import uniqBy from 'lodash.uniqby'
import useSWR from 'swr'

import { getAbility } from 'api/abilities'
import { NamedAPIResource } from 'api/common'

import { useSelectedAbilities } from './use-selected-abilities'

export const useFilteredPokemons = () => {
  const { abilities } = useSelectedAbilities()

  const { data, isLoading } = useSWR(
    ['filterd-pokemons', ...abilities],
    async () => {
      if (!abilities.length) return undefined

      const fetchers = abilities.map((ability) => getAbility({ name: ability }))

      const responses = await Promise.all(fetchers)

      const filterResults = responses.reduce<NamedAPIResource[]>((acc, response) => {
        const { pokemon } = response

        const pokemons = pokemon.map(({ pokemon: innerPokemon }) => innerPokemon)

        return [...acc, ...pokemons]
      }, [])

      const onlyUniquePokemons = uniqBy(filterResults, 'name')

      return onlyUniquePokemons
    },
    { keepPreviousData: !!abilities.length },
  )

  return { data, isLoading }
}
