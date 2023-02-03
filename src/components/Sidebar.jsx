/* eslint-disable */
import React, {useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dummy'
import { useStateContext} from '../contexts/ContextProvider'

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor } = useStateContext()

  const handleCloseSidebar = (screenSize) => {
      if (activeMenu !== undefined && screenSize <= 900 ) {
        setActiveMenu(false)
      } 
      else {
        setActiveMenu(true)
      }
  }


  const activeLink = 'flex hover:bg-slate-300  items-center gap-5 pl-5 pt-3 pb-2.5 rounded-lg text-black dark:hover:text-black dark:text-white m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
  return (
    <div className='h-screen overflow-auto' >
      {activeMenu && (<>

          {/* LOGO & CLOSE MENU BUTTON */}
      <div className='flex min-h-fit justify-between items-center'>

        <Link to='/' onClick={() => setActiveMenu(false)}
        className='flex items-center ml-3 gap-3 text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
        >
            <SiShopware /> <span>Shoppy</span>
        </Link>

        <TooltipComponent content='Menu' position='BottomCenter' >
            <button type='button'
              onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
              className={`text-xl dark:text-gray-500 rounded-full p-3 hover:bg-light-gray mt-4 block`}
            >
              <MdOutlineCancel />
            </button>
        </TooltipComponent>

      </div>


        {/* PAGES HEADINGS & LINKS */}
      <div className='mt-10' >
          {links.map((item) => (
            <div key={item.title} >
              <p className='uppercase text-gray-400 m-3 mt-4'>
              {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`/${link.name}`}
                  onClick={handleCloseSidebar}
                  style={({ isActive }) => ({ backgroundColor : isActive ? currentColor : ''})}
                  className={(isActive) => 
                  isActive ? activeLink : normalLink
                 }
                >
                    {link.icon}
                    <span>{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
      </div>
      </>)}
    </div>
  )
}

export default Sidebar