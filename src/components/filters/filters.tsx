import { AbilitiesList } from './abilities-list'
import { HabitatsList } from './habitats-list'
import { FiltersWrapper, Separator, Title } from './styled'

export const Filters = () => (
  <FiltersWrapper>
    <Title>Filter</Title>
    <AbilitiesList />

    <Separator />

    <HabitatsList />
  </FiltersWrapper>
)
