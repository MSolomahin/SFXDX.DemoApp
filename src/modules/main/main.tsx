import { styled } from '@linaria/react'
import React, { FunctionComponent } from 'react'

const Main: FunctionComponent = () => {
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
