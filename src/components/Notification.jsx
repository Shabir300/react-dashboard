import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { chatData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Notification = () => {
  const { handleCloseClick } = useStateContext()
  return (
    <div className='absolute z-10 dark:bg-secondary-dark-bg dark:text-white mt-5 rounded-2xl top-16 right-5 bg-white px-8 py-9 w-72 md:w-96'>

      <div className='flex justify-between'>
          <p className='font-semibold text-lg '>Messages</p>
          <button className='text-lg' onClick={() => handleCloseClick('notification')}>
            <MdOutlineCancel />
          </button>
      </div>
      <div className='pt-10 flex flex-col gap-5'>
        {chatData.map((chat, index) => (
          <div className='flex gap-4 border-b-1 py-3' key={index}>
              <img src={chat.image} className='w-14 rounded-full h-14' alt='image' />
              <div>
                <p className='text-semibold'>{chat.message}</p>
                <p className='text-gray-400'>{chat.desc}</p>
                <p className='text-gray-400'>{chat.time}</p>
              </div>
          </div>
        ))}
      </div>

      <button className='bg-blue-500 w-full text-white p-3 rounded-xl mt-10'>
        See All Messages
      </button>
    </div>
  )
}

export default Notification