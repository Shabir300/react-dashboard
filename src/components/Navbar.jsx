/*eslint-disable*/
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'
import {FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Fill } from 'react-icons/ri'
import avatar from '../data/avatar.jpg'
import {Chat, Notification, UserProfile, Cart} from '.'

const NavButton = ({ title, customFunc, icon, color, dotColor}) => (
    <TooltipComponent content={title} position='BottomCenter' >
        <button onClick={customFunc} className='mx-4 w-2 text-xl ' type='button'  style={{color}}>
            <span  style={{background: dotColor}}
            className='absolute inline-flex rounded-full
            h-2 w-2 ml-2 mt-2 p-2' />
                {icon}

        </button>
    </TooltipComponent>
)



const Navbar = () => {

    const {activeMenu, setActiveMenu, isClicked,
         setIsClicked, currentColor, handleClick, screenSize, setScreenSize} = useStateContext()
        
         useEffect(() => {
            const handleResize = () => setScreenSize(window.innerWidth)
            window.addEventListener('resize', handleResize)
            handleResize();
            
            return () => window.removeEventListener('resize', handleResize)
        },[])
        
        

         useEffect(() =>{
            if(screenSize <= 900) {
                setActiveMenu(false)
            }
            else {
                setActiveMenu(true)
            }
         },[screenSize])

         return (
            
    <div className='flex drop-shadow-lg items-center justify-between p-2 pt-4 md:mx-6 relative'>
        <NavButton
            title="Menu"
            customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
            color={currentColor}
            icon={<AiOutlineMenu />}
        />

        <div className='flex items-center gap-2'>
           
          <div onClick={() => handleClick('cart')}>

                <NavButton
                title='Cart'
                
                color={currentColor}
                icon={<FiShoppingCart />}
                />
            </div>
            {/* <div onClick={() => handleClick('chat')}>

                <NavButton
                title='Chat'
                dotColor='#03C9D7'
                color={currentColor}
                icon={<BsChatLeft />}
                />
            </div> */}
            
            <div onClick={() => handleClick('notification')}>

                <NavButton
                title='Notifications'
                dotColor='#03C9D7'
                color={currentColor}
                icon={<RiNotification3Fill />}
                />
            </div>

            {/* USER PROFILE */}
            <TooltipComponent content='User Profile' position='BottomCenter' >
                <div onClick={() => handleClick('userProfile')} className='flex items-center gap-2 cursor-pointer ml-4 '>
                    <img
                        src={avatar}
                        alt='user'
                        className='w-11 h-11 rounded-full p-1 hover:bg-light-gray hover:drop-shadow-lg '
                    />
                    <p className='text-gray-400 text-14'>
                        <span className='text-lg'>
                            Hi, 
                        </span> {` `}
                        <span className='font-bold text-lg'>
                            David
                        </span>
                    </p>
                </div>
            </TooltipComponent>

            {isClicked.cart && (<Cart />)}
            {/* {isClicked.chart && (<Chat />)} */}
            {isClicked.notification && (<Notification />)}
            {isClicked.userProfile && (<UserProfile />)}

            
        </div>
    </div>
  )
}

export default Navbar