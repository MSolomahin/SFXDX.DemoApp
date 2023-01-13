import React, { FunctionComponent } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../containers/footer'
import Header from '../../containers/header'

const MainLayout: FunctionComponent = () => {
  return (
        <div>
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
  )
}

export default MainLayout
