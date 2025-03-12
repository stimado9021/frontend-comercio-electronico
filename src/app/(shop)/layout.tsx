import React from 'react'
import TopMenu from '../ui/top-menu/TopMenu'
import { SideBar } from '../components/sidebar/SideBar'
import Footer from '../components/footer'

function ShopLayout(
    {children}
    :{
        children:React.ReactNode
    })
     {
  return (
    <div className='min-h-screen'>
        <TopMenu />
        <SideBar/>
        {children}
        <Footer />
    </div>
  )
}

export default ShopLayout