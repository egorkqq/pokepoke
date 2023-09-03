import { memo } from 'react'

import { NamedAPIResource } from 'api/common'

import {
  CategoryHeader,
  ClearFiltersButton,
  ErrorWrapper,
  FilterItem,
  FilterItemSkeleton,
  FilterItemsGroup,
  FiltersList,
} from './styled'

const categoriesMock = Array.from({ length: 20 }, (_, i) => i)

interface FiltersListBaseProps {
  title: string
  items?: NamedAPIResource[]
  activeItems: string[]
  error: boolean
  onAddItem: (name: string) => void
  onRemoveItem: (name: string) => void
  onReset: () => void
}

export const FiltersListBase: React.FC<FiltersListBaseProps> = memo(
  ({ title, items, activeItems, error, onAddItem, onRemoveItem, onReset }) => (
    <div>
      <CategoryHeader>
        <div>{title}:</div>
        <ClearFiltersButton type="button" onClick={onReset}>
          Clear
          {!!activeItems.length && <b>({activeItems.length})</b>}
        </ClearFiltersButton>
      </CategoryHeader>

      {error ? (
        <ErrorWrapper>:(</ErrorWrapper>
      ) : (
        <FilterItemsGroup>
          <FiltersList>
            {items
              ? items.map((item) => (
                  <FilterItem
                    key={item.name}
                    onClick={() => (activeItems.includes(item.name) ? onRemoveItem(item.name) : onAddItem(item.name))}
                  >
                    {item.name}
                    <div>{activeItems.includes(item.name) && 'x'}</div>
                  </FilterItem>
                ))
              : categoriesMock.map((_, idx) => <FilterItemSkeleton key={idx} />)}
          </FiltersList>
        </FilterItemsGroup>
      )}
    </div>
  ),
)
