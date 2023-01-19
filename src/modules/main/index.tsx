import { styled } from '@linaria/react'
import React, { FC } from 'react'

const Main: FC = () => {
  return (
    <>
      <Content/>
    </>
  )
}

const Content = styled.div`
    height: calc(100vh - 335px);
    width: 100%;
`

export default Main
