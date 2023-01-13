import React, { FunctionComponent } from 'react'
import { styled } from '@linaria/react'
import Loader from '../../elements/loader'

const Loading: FunctionComponent = () => {
  return (
        <RootLoading>
            <Loader color={'var(--color-green'} />
        </RootLoading>
  )
}

const RootLoading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 335px);
`

export default Loading
