import { Filters } from "../../components/filters";
import { List } from "../../components/list";

import { FiltersWrapper, Layout, ListWrapper } from "./styled";

export const HomePage = () => {
  return (
    <Layout>
      <FiltersWrapper>
        <Filters />
      </FiltersWrapper>
      <ListWrapper>
        <List />
      </ListWrapper>
    </Layout>
  );
};
