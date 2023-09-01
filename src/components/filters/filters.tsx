import { AbilitiesList } from './abilities-list'
import { HabitatsList } from './habitats-list'
import { FiltersWrapper } from './styled'

export const Filters = () => (
  <FiltersWrapper>
    <div>Filters</div>
    <AbilitiesList />

    <div>Habitats:</div>
    <HabitatsList />
  </FiltersWrapper>
)
