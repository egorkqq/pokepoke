import styled from '@emotion/styled'

import { colors } from 'utils/theme'

export const FiltersWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  borderRadius: '2rem',
  gap: '1rem',
  width: '100%',
  background: colors.bg,
  border: `1px solid ${colors.secondary}`,
})

export const FilterItemsGroup = styled.div({
  display: 'flex',
  width: '100%',
  maxHeight: '16rem',
  overflowY: 'scroll',
  '::scrollbar': {
    width: '0.5rem',
    background: colors.primary,
  },
})

export const FiltersList = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  padding: 0,
  margin: 0,
  gap: '0.5rem',
  width: '100%',
})

export const FilterItem = styled.li({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem',
  borderRadius: '0.5rem',
  background: colors.bg,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  textTransform: 'capitalize',
  border: `2px solid ${colors.secondary}`,
  '&:hover': {
    border: `2px solid ${colors.primary}`,
  },
})
