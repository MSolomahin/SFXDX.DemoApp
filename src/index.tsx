import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { setupStore } from './store/store'
import Notification from './utils/notification'

const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Notification />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
