import { Toaster } from 'react-hot-toast'
import React from 'react'

const Notification = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 5000,
          position: 'bottom-left',
          style: {
            fontFamily: 'Gilroy, sans-serif',
            background: '#fff',
            boxShadow: '0px 0px 20px rgba(132, 132, 132, 0.2)',
            borderRadius: '16px',
            color: '#000',
            padding: '20px',
            fontWeight: '500'
          }
        }}
      />
    </div>
  )
}

export default Notification
