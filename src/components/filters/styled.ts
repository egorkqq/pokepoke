import styled from '@emotion/styled'

import { colors, pulse } from 'utils/theme'

export const FiltersWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 1rem',
  borderRadius: '2rem',
  gap: '1rem',
  width: '100%',
  background: colors.bg,
  border: `1px solid ${colors.secondary}`,
  alignSelf: 'baseline',
  position: 'sticky',
  top: '1rem',
})

export const Title = styled.div({
  fontWeight: 600,
  fontSize: '1.25rem',
  marginBottom: '0.5rem',
})

export const Separator = styled.div({
  width: '100%',
  height: '2px',
  background: colors.secondary,
  margin: '0.5rem 0',
})

export const FilterItemsGroup = styled.div({
  display: 'flex',
  width: '100%',
  height: '16rem',
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

export const ClearFiltersButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.125rem',
  color: colors.white,
  borderRadius: '0.5rem',
  background: colors.bg,
  padding: '0.25rem 0.5rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  textTransform: 'capitalize',
  border: `2px solid transparent`,
  '&:hover': {
    border: `2px solid ${colors.secondary}`,
  },
})

export const CategoryHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '0.25rem',
})

export const FilterItemSkeleton = styled.li({
  animation: `${pulse} 1.5s infinite`,
  padding: '1.125rem',
  borderRadius: '0.5rem',
  background: colors.bg,
  border: `2px solid ${colors.secondary}`,
  width: '100%',
})

export const ErrorWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  fontSize: '4.5rem',
  transform: 'rotate(90deg)',
})
