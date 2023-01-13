import React from 'react'
import { initVariables } from './assets/styles/UIKit.styled'
import RouterApp from './router'

function App () {
  return (
    <div className={initVariables}>
      <RouterApp/>
    </div>
  )
}

export { globals } from './assets/styles/global'

export default App
