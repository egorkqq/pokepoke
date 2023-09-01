import { useAllHabitats, useSelectedHabitats } from 'utils'

import { FilterItem, FilterItemsGroup, FiltersList } from './styled'

export const HabitatsList = () => {
  const { data: allHabitats, error, isLoading } = useAllHabitats()
  const { habitats, selectHabitat, removeHabitat, clear } = useSelectedHabitats()

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>Habitats:</div>
        {!!habitats.length && <b>({habitats.length})</b>}
        <button type="button" onClick={clear}>
          Clear
        </button>
      </div>

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
    </>
  )
}
