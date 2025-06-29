import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import Navbar from './Navbar'
import SideMenu from './SideMenu'
import Footer from './Footer'

const DashboardLayout = ({children, activeMenu}) => {
    const {user} = useContext(UserContext)

  return (
    <div className=''>
        <Navbar activeMenu={activeMenu} />

        {user && (
            <div className='flex'>
                <div className='hidden md:block'>
                    <SideMenu activeMenu={activeMenu} />
                </div>

                <div className="grow mx-5">{children}</div>
            </div>
        )}

        <Footer />
    </div>
  )
}

export default DashboardLayout