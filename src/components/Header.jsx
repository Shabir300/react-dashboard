import React from 'react'



const Header = ({title, category}) => {
  return (
    <div className='mb-10 p-6'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl font-extrabold tracking-tight '>{title}</p>
    </div>
  )
}

export default Header