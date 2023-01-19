import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../elements/footer'
import Header from '../../elements/header'

const MainLayout: FC = () => {
  return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
  )
}

export default MainLayout
