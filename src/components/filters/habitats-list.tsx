import { useAllHabitats, useSelectedHabitats } from 'utils'

import { FiltersListBase } from './filter-list-base'

export const HabitatsList = () => {
  const { data: allHabitats, error } = useAllHabitats()
  const { habitats, selectHabitat, removeHabitat, clear } = useSelectedHabitats()

  return (
    <FiltersListBase
      title="Habitats"
      items={allHabitats?.results}
      activeItems={habitats}
      error={error}
      //
      onAddItem={selectHabitat}
      onRemoveItem={removeHabitat}
      onReset={clear}
    />
  )
}
