import React, { FC, Suspense } from 'react'
import Loading from '../elements/loading'

const Main = React.lazy(async () => await import('../modules/main'))

const MainPage: FC = () => {
  return (
    <Suspense fallback={<Loading/>}>
      <Main />
    </Suspense>
  )
}

export default MainPage
