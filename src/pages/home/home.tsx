import { Detail } from "../../components/detail";
import { Filters } from "../../components/filters";
import { List } from "../../components/list";

import { FiltersWrapper, Layout, ListWrapper, DetailWrapper } from "./styled";

export const HomePage = () => {
  return (
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
  );
};
