import { useEffect, useState } from 'react'

import { ITEMS_PER_PAGE } from 'config/constants'

import {
  getIdFromUrl,
  useFilteredPokemons,
  usePokemonsList,
  useSelectedAbilities,
  useSelectedHabitats,
  useSelectedPoke,
} from 'utils'

import { Pagination } from '../pagination'
import { PokeCard, Skeleton } from '../poke-card'
import { CardsWrapper, ErrorWrapper, Wrapper } from './styled'

const cardsMock = Array.from({ length: 20 }, (_, i) => i)

// TODO: move common logic to separte component
export const List = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const { setPoke } = useSelectedPoke()

  const { data, error, isLoading } = usePokemonsList({ pageIndex })
  const { data: filteredData, error: filteredDataError, isLoading: filteredDataIsLoading } = useFilteredPokemons()
  const { abilities } = useSelectedAbilities()
  const { habitats } = useSelectedHabitats()
  useEffect(() => {
    setPageIndex(0)
  }, [abilities, habitats])

  if (filteredData) {
    if (filteredDataError) {
      return <ErrorWrapper>Error when load data :(</ErrorWrapper>
    }

    if (!filteredDataIsLoading && !filteredData.length) {
      return <ErrorWrapper>Nothing was found (for the specified filters)</ErrorWrapper>
    }

    return (
      <Wrapper>
        <CardsWrapper>
          {filteredDataIsLoading
            ? cardsMock.map((i) => <Skeleton key={i} />)
            : filteredData
                .slice(pageIndex * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (pageIndex + 1))
                .map((pokemon) => (
                  <PokeCard name={pokemon.name} key={pokemon.name} id={getIdFromUrl(pokemon.url)} onClick={setPoke} />
                ))}
        </CardsWrapper>

        <Pagination
          currentPage={pageIndex}
          totalPages={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
          onPageChange={setPageIndex}
        />
      </Wrapper>
    )
  }

  if (error || (!isLoading && !data)) {
    return <ErrorWrapper>Error when load data :(</ErrorWrapper>
  }

  return (
    <Wrapper>
      <CardsWrapper>
        {isLoading
          ? cardsMock.map((i) => <Skeleton key={i} />)
          : data?.results.map((pokemon) => (
              <PokeCard name={pokemon.name} key={pokemon.name} id={getIdFromUrl(pokemon.url)} onClick={setPoke} />
            ))}
      </CardsWrapper>

      {!!data && (
        <Pagination
          currentPage={pageIndex}
          totalPages={Math.ceil(data.count / ITEMS_PER_PAGE)}
          onPageChange={setPageIndex}
        />
      )}
    </Wrapper>
  )
}
