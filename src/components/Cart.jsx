import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { cartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Cart = () => {
  const {setIsClicked, handleCloseClick} = useStateContext()
  return (
    <div className=' w-full fixed z-20 right-0 top-0 '>
        <div className='float-right h-full dark:bg-secondary-dark-bg dark:text-white w-300 md:w-400 bg-white'>
          {/* MAIN CONTENT */}
          <div className='p-8'>

              <div className='flex justify-between'>
                  <p className='font-bold text-xl'>Shopping Cart</p>
                  <button onClick={() => handleCloseClick('cart')} className='text-2xl'>
                    <MdOutlineCancel />
                  </button>
              </div>

              <div className='mt-10  flex flex-col gap-8'>
                {cartData.map((product, index) => (
                  <div className='flex p-2 pt-7 gap-5 border-b-1'>
                      <div className='w-28 h-24'><img className='w-full rounded-3xl' src={product.image} alt={`product${index}`} /></div>
                      <div>
                        <p className='font-semibold '>{product.name}</p>
                        <p className='text-gray-500'>{product.category}</p>
                        <div className='flex pt-4 gap-5 items-center'>
                          <p className='text-xl font-semibold'>{product.price}</p>
                          <div className='flex border-2 rounded-2xl px-2 gap-2 content-center items-center'>
                            <button className='text-red-400 text-2xl'> -</button>
                            <p  className='text-slate-600 text-2xl'>0</p>
                            <button className='text-green-400 text-2xl'>+</button>
                          </div>
                        </div>
                      </div>
                  </div>
                )  )}

                <div className='flex flex-col gap-5'>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Sub Total</p>
                    <p className='font-semibold'>$850</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className='text-gray-500'>Total</p>
                    <p className='font-semibold'>$850</p>
                  </div>
                  <button className='w-full p-3 mt-5 rounded-3xl bg-blue-500 text-white'>
                    Place Order
                  </button>
                </div>
              </div>

          </div>
        </div>
    </div>
  )
}

export default Cart