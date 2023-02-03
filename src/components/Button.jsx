import React from 'react'

const Button = ({size, text, color, bgColor, borderRadius}) => {
  return (
    <div>
      <button
        type='button'
        style={{ backgroundColor: bgColor, color, borderRadius}}
        className={`text-${size} p-3 hover:drop-shadow-xl`}
      >
        {text}
      </button>
    </div>
  )
}

export default Button