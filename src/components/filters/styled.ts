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
