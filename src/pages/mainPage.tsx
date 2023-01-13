import React, { FunctionComponent, Suspense } from 'react'
import Loading from '../containers/loading'

const Main = React.lazy(async () => await import('../modules/main'))

const MainPage: FunctionComponent = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Main />
    </Suspense>
  )
}

export default MainPage
