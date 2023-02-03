import React from 'react'

const ChartHeader = ({category, title}) => {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>{category}</p>
      <p className='text-3xl dark:text-white font-extrabold tracking-tight '>{title}</p>
    </div>
  )
}

export default ChartHeader