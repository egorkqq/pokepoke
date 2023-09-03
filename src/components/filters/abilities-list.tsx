import { useAllAbilities, useSelectedAbilities } from 'utils'

import { CategoryHeader, ClearFiltersButton, FilterItem, FilterItemsGroup, FiltersList } from './styled'

export const AbilitiesList = () => {
  const { data: allAbilities, error, isLoading } = useAllAbilities()
  const { abilities, selectAbility, removeAbility, clear } = useSelectedAbilities()

  return (
    <div>
      <CategoryHeader>
        <div>Abilities:</div>
        <ClearFiltersButton type="button" onClick={clear}>
          Clear
          {!!abilities.length && <b>({abilities.length})</b>}
        </ClearFiltersButton>
      </CategoryHeader>

      <FilterItemsGroup>
        {allAbilities?.results ? (
          <FiltersList>
            {allAbilities?.results.map((ability) => (
              <FilterItem
                key={ability.name}
                onClick={() =>
                  abilities.includes(ability.name) ? removeAbility(ability.name) : selectAbility(ability.name)
                }
              >
                {ability.name}
                <div>{abilities.includes(ability.name) && 'x'}</div>
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
