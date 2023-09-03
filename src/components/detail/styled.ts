import styled from '@emotion/styled'

import { colors, pulse } from 'utils/theme'

export const DetailWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '2rem 1rem',
  borderRadius: '2rem',
  gap: '1rem',
  width: '100%',
  background: colors.bg,
  border: `1px solid ${colors.secondary}`,
  alignSelf: 'baseline',
  position: 'sticky',
  top: '1rem',
})

export const StatsContainer = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '0.5rem',
  justifyContent: 'center',
  marginBottom: '1rem',
})

export const StatWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
  borderRadius: '1rem',
  background: colors.secondary,
  padding: '0.5rem 0',
})

export const StatName = styled.span({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.75rem',
  fontWeight: 600,
  flexGrow: 1,
  textAlign: 'center',
  padding: '0 0.5rem',
})

export const StatValue = styled.span({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.25rem',
  fontWeight: 600,
  textTransform: 'capitalize',
  padding: '0.5rem',
})

export const Picture = styled.img({
  width: '100%',
  height: '16rem',
  objectFit: 'cover',
  marginBottom: '1rem',
})

export const Name = styled.div({
  fontSize: '1.5rem',
  fontWeight: 700,
  lineHeight: '2rem',
  textTransform: 'capitalize',
  textAlign: 'center',
  marginBottom: '0.5rem',
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

export const Skeleton = styled.div({
  animation: `${pulse} 1.5s infinite`,
  borderRadius: '2rem',
  width: '100%',
  height: '16rem',
  background: colors.secondary,
  border: `1px solid ${colors.bg}`,
  marginBottom: '1rem',
})
