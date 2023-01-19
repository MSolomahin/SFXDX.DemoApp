import React, { FC, memo } from 'react'
import { styled } from '@linaria/react'
import Loader from '../loader'

const Loading: FC = () => {
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

export default memo(Loading)
