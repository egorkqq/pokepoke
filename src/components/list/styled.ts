import styled from '@emotion/styled'

import { colors } from 'utils/theme'

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '100%',
  padding: '2rem',
  borderRadius: '2rem',
  background: colors.bg,
  border: `1px solid ${colors.secondary}`,
})

export const CardsWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
  gap: '1rem',
})

export const ErrorWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  padding: '2rem',
  borderRadius: '2rem',
  background: colors.bg,
  border: `1px solid ${colors.secondary}`,
  fontSize: '1.5rem',
})
