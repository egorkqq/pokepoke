import { css, keyframes } from '@emotion/react'

export const colors = {
  black: '#0B0B0D',
  white: '#FAFAFA',
  primary: '#4381F1',
  secondary: '#18181B',
  bg: 'rgba(24, 24, 27, 0.40)',
  error: '#EC4549',
}

export const globalStyles = css`
  html {
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: ${colors.black};
    color: ${colors.white};
  }

  body {
    width: 80rem;
    margin: 2rem auto;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
`

export const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`
