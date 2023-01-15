import React, { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { initVariables } from './assets/styles/UIKit.styled'
import RouterApp from './router'

function App () {
  useEffect(() => {
    if (!window.ethereum?.isMetaMask) {
      toast.error('Please install Metamask')
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
