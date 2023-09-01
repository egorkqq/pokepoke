import { useAllAbilities, useSelectedAbilities } from 'utils'

import { FilterItem, FilterItemsGroup, FiltersList } from './styled'

export const AbilitiesList = () => {
  const { data: allAbilities, error, isLoading } = useAllAbilities()
  const { abilities, selectAbility, removeAbility, clear } = useSelectedAbilities()

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>Abilities:</div>
        {!!abilities.length && <b>({abilities.length})</b>}
        <button type="button" onClick={clear}>
          Clear
        </button>
      </div>

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
    </>
  )
}
