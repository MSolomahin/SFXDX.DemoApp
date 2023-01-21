import React, { useEffect } from 'react'
import { initVariables } from './assets/styles/UIKit.styled'
import RouterApp from './router'
import { showNotification } from './utils/showNotification'

function App () {
  useEffect(() => {
    if (!window.ethereum?.isMetaMask) {
      showNotification('error', 'Please install Metamask')
    }
  })

  return (
    <div className={initVariables}>
      <RouterApp/>
    </div>
  )
}

export { globals } from './assets/styles/global'

export default App
