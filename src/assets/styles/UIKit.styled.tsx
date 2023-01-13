import { css } from '@linaria/core'
import { styled } from '@linaria/react'

export const P1 = styled.p<{ color?: string, weight?: string }>`
  color: ${({ color }) => color ?? 'var(--color-text-primary)'};
  font-size: var(--font-text-xl);
  font-weight: ${({ weight }) => weight ?? '700'};
  line-height: 120%;
  font-family: var(--font-base);
`

export const P2 = styled.p<{ color?: string, weight?: string }>`
  color: ${({ color }) => color ?? 'var(--color-text-primary)'};
  font-size: var(--font-text-m);
  font-weight: ${({ weight }) => (weight ?? '500')};
  line-height: 120%;
  font-family: var(--font-base);
`

export const P3 = styled.p<{ color?: string, weight?: string }>`
  color: ${({ color }) => color ?? 'var(--color-text-primary)'};
  font-size: var(--font-text-s);
  font-weight: ${({ weight }) => weight ?? '500'};
  line-height: 120%;
  font-family: var(--font-base);
`

export const initVariables = css`
  --font-base: "Gilroy", sans-serif;
  --color-grey: #CDD2DD;
  --color-green: #08D899;

  --color-text-secondary: #676767;
  --color-text-tertiary: #959596;
  --color-text-primary: #092326;
  

  --color-white: #fff;
  --color-text-secondary: #909090;
  --color-text-secondary-1: #929292;
  --color-text-grey: #a4a4a4;

  --font-text-xs: 12px;
  --font-text-s: 14px;
  --font-text-m: 16px;
  --font-text-xl: 18px;
  --font-text-l: 26px;
  --font-text-lx: 32px;

  --transition-hover: 0.3s;
`
