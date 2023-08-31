import { useEffect, useState } from "react";
import { Pagination } from "../pagination";
import { PokeCard, Skeleton } from "../poke-card";
import { CardsWrapper, ErrorWrapper, Wrapper } from "./styled";
import { ITEMS_PER_PAGE } from "../../config/constants";
import { usePokemonsList, getIdFromUrl } from "../../utils";
import { useSelectedPoke } from "../../utils";

const cardsMock = Array.from({ length: 20 }, (_, i) => i);

export const List = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { poke, setPoke } = useSelectedPoke();

  const { data, error, isLoading } = usePokemonsList({ pageIndex });

  if (error || (!isLoading && !data)) {
    return <ErrorWrapper>Error when load data :(((</ErrorWrapper>;
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
  );
};
