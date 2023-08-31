import styled from '@emotion/styled'

import { colors } from 'utils/theme'

export const Header = styled.header({
  borderRadius: '2rem',
  padding: '1rem',
  fontSize: '2.5rem',
  background: colors.bg,
  lineHeight: '3rem',
  fontWeight: 700,
  width: '18rem',
  border: `1px solid ${colors.secondary}`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
