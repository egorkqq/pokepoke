import { useEffect, useState } from 'react'

import { ITEMS_PER_PAGE } from 'config/constants'

import { getIdFromUrl, useFilteredPokemons, usePokemonsList, useSelectedAbilities, useSelectedPoke } from 'utils'

import { Pagination } from '../pagination'
import { PokeCard, Skeleton } from '../poke-card'
import { CardsWrapper, ErrorWrapper, Wrapper } from './styled'

const cardsMock = Array.from({ length: 20 }, (_, i) => i)

export const List = () => {
  const [pageIndex, setPageIndex] = useState(0)
  const { setPoke } = useSelectedPoke()

  const { data, error, isLoading } = usePokemonsList({ pageIndex })
  const { data: filteredData, isLoading: filteredDataIsLoading } = useFilteredPokemons()
  const { abilities } = useSelectedAbilities()
  useEffect(() => {
    setPageIndex(0)
  }, [abilities])

  if (filteredData) {
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
    return <ErrorWrapper>Error when load data :(((</ErrorWrapper>
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
