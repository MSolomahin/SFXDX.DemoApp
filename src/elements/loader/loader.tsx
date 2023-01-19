import { styled } from '@linaria/react'
import React, { FC, memo } from 'react'
import { LoaderProps } from './loader.types'

const Loader: FC<LoaderProps> = (props) => {
  const { size = 40, color = '#fff' } = props
  return (
    <Root size={size} color={color}>
      <div />
      <div />
      <div />
      <div />
    </Root>
  )
}

const Root = styled.div<{ size: number, color: string }>`
  display: inline-block;
  position: relative;
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 4px solid ${(props) => props.color};
    border-radius: 50%;
    animation: loader-animate 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${(props) => props.color} transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
  & div:nth-child(4) {
    border: 4px solid rgba(255, 255, 255, 0.1);
    z-index: -1;
  }

  @keyframes loader-animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default memo(Loader)
