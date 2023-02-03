import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { useStateContext } from '../contexts/ContextProvider'
import { userProfileData } from '../data/dummy'
import avatar from '../data/avatar.jpg'


const UserProfile = () => {
  const {handleCloseClick} = useStateContext()
  return (
    <div className='absolute z-10 right-3 top-16 w-72 text-sm md:text-lg md:w-96 h-fit px-5 py-8 rounded-xl dark:bg-secondary-dark-bg bg-white dark:text-white '>
        
        <div className='flex justify-between '>
            <p className='font-semibold text-lg'>User Profile</p>
            <button className='text-lg' onClick={() => handleCloseClick('userProfile')}>
              <MdOutlineCancel />
            </button>
        </div>
        <div className='px-8 py-6'>

        <div className='flex gap-5 pb-4 border-b-1 '>
            <img className='rounded-full w-20 h-20' src={avatar} alt="" />
            <div className='flex flex-col'>
              <p className='text-3xl 0 font-semibold'>David</p>
              <p className='text-gray-400'>Administrator</p>
              <p className='text-gray-400'>info@shop.com</p>
            </div>
        </div>

        <div className='flex pt-10 flex-col gap-5 md:gap-8'>
          {userProfileData.map((item, index) => (
            <div key={index} className='flex border-b-1 pb-4 gap-5'>
              <span className='p-2 md:p-3 pt-4 text-lg rounded-lg' style={{backgroundColor: item.iconBg, color: item.iconColor}}>{item.icon}</span>
              <div className='flex flex-col '>
                  <p className='text-lg font-semibold'>{item.title}</p>
                  <p className='text-gray-500'>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

            <button className='w-full bg-blue-500 p-3 mt-8 rounded-xl'>
              Log Out
            </button>
          </div>
    </div>
  )
}

export default UserProfile