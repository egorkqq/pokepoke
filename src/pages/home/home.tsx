import { Detail } from 'components/detail'
import { Filters } from 'components/filters'
import { List } from 'components/list'

import { DetailWrapper, FiltersWrapper, Layout, ListWrapper } from './styled'

export const HomePage = () => (
  <Layout>
    <FiltersWrapper>
      <Filters />
    </FiltersWrapper>
    <ListWrapper>
      <List />
    </ListWrapper>
    <DetailWrapper>
      <Detail />
    </DetailWrapper>
  </Layout>
)
