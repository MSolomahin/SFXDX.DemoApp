import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainLayout'
import MainPage from './pages/mainPage'
import React from 'react'

const RouterApp = () => {
  return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Routes>
  )
}

export default RouterApp
