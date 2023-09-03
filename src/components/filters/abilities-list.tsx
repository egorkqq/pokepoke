import { useAllAbilities, useSelectedAbilities } from 'utils'

import { FiltersListBase } from './filter-list-base'

export const AbilitiesList = () => {
  const { data: allAbilities, error } = useAllAbilities()
  const { abilities, selectAbility, removeAbility, clear } = useSelectedAbilities()

  return (
    <FiltersListBase
      title="Abilities"
      items={allAbilities?.results}
      error={error}
      activeItems={abilities}
      onAddItem={selectAbility}
      onRemoveItem={removeAbility}
      onReset={clear}
    />
  )
}
