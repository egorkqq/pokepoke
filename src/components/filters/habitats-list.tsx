import { useAllHabitats, useSelectedHabitats } from 'utils'

import { CategoryHeader, ClearFiltersButton, FilterItem, FilterItemsGroup, FiltersList } from './styled'

export const HabitatsList = () => {
  const { data: allHabitats, error, isLoading } = useAllHabitats()
  const { habitats, selectHabitat, removeHabitat, clear } = useSelectedHabitats()

  return (
    <div>
      <CategoryHeader>
        <div>Habitats:</div>
        <ClearFiltersButton type="button" onClick={clear}>
          Clear
          {!!habitats.length && <b>({habitats.length})</b>}
        </ClearFiltersButton>
      </CategoryHeader>

      <FilterItemsGroup>
        {allHabitats?.results ? (
          <FiltersList>
            {allHabitats?.results.map((habitat) => (
              <FilterItem
                key={habitat.name}
                onClick={() =>
                  habitats.includes(habitat.name) ? removeHabitat(habitat.name) : selectHabitat(habitat.name)
                }
              >
                {habitat.name}
                <div>{habitats.includes(habitat.name) && 'x'}</div>
              </FilterItem>
            ))}
          </FiltersList>
        ) : (
          'Load abs...'
        )}
      </FilterItemsGroup>
    </div>
  )
}
