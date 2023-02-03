/*eslint-disable*/
import React from 'react'
import { BsCurrencyDollar } from 'react-icons'
import { GoPrimitiveDot } from 'react-icons/go'
import { Stacked, Pie, Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartDat } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import  './ecommerce.css'

const Ecommerce = () => {
  const {currentColor} = useStateContext();
  return (
    <div className='mx-0 mt-12'>
      <div className='flex flex-col flex-wrap lg:flex-nowrap justify-center'>
        {/* First background banner */}
        <div
        className='mt-20 w-full h-44 bg-gray-200 rounded-xl dark:text-gray-200 dark:bg-secondary-dark-bg p-8 pt-9
        bg-banner bg-blend-overlay bg-opacity-10 block bg-no-repeat bg-cover bg-center'>

          {/* EARNINGS */}
          <div className='flex justify-between items-center' >
            <div>
              <p className=' font-bold text-white uppercase'>Earnings</p>
              <p className='text-2xl text-slate-200  '>$45,950.56</p>
            </div>
          </div>

          {/* DOWNLOAD BUTTON */}
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
              size='md'
             />
          </div>
        </div>

        {/* ICONS */}
        <div className='flex m-3 flex-wrap justify-center gap-4 mt-10 items-center'>

            {earningData.map((item) => (
              <div
                key={item.title}
                className='bg-white dark:text-gray-200 
                dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
              >
                <button
                  type='button'
                  style={{color: item.iconColor, 
                  backgroundColor: item.iconBg}}
                  className='text-2xl opacity-0.9 rounded-full
                  p-4 hover:drop-shadow-xl'
                >
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='font-semibold text-lg'>
                    {item.amount}
                  </span>
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>
                <p className='text-gray-400 text-sm mt-1'>{item.title}</p>
              </div>
            ))}
        </div>
      </div>


      {/* REVENUE SECTION */}

      <div className='flex mt-5  lg:mt-14 flex-wrap justify-center gap-10'>
          
          <div className='bg-white dark:p-6 dark:text-gray-200
          dark:bg-secondary-dark-bg m-3 rounded-2xl md:w-780'>

                    <p className='font-semibold text-2xl'>Revenue Updates</p>

              <div className='flex  gap-16 flex-wrap justify-between mt-4'>
                    
                    <div className='flex w-fit mx-auto flex-col mt-14 gap-10'>

                        {/* BUDGET */}
                        <div className='flex flex-col'>
                          <div className='flex'>
                            <p className='text-3xl font-semibold'>$95,697</p>
                            <span className=' ml-2 text-sm text-white bg-green-500 p-2 rounded-2xl'>45%</span>
                          </div>
                          <div>
                            <p className='text-gray-600 text-sm'>Budget</p>
                          </div>
                          
                        </div>

                        {/* EXPENSE */}
                        <div className='flex flex-col'>
                          <div className='flex'>
                            <p className='text-3xl font-semibold'>$48,878</p>
                          </div>
                          <div>
                            <p className='text-gray-600 text-sm'>Expense</p>
                          </div>

                        </div>

                        {/* CHART */}
                        <div className=''>
                          <SparkLine
                              currentColor='purple'
                              id='line-sparkline'
                              type='Line'
                              height='80px'
                              width='250px'
                              data={SparklineAreaData}
                              color='purple'
                          />
                        </div>

                        {/* DOWNLOAD BUTTON */}
                       <div className='w-fit mx-auto'>
                        <Button
                          size='md'
                          color='white'
                          bgColor={currentColor}
                          borderRadius='10px'
                          text='Download Report'
                        />
                       </div>

                    </div>
                    <div className='w-fit mt-8 mx-auto'>
                      <Stacked
                        width='320px'
                        height='360px'
                      />
                    </div>
              </div>  
          </div>

      </div>
    </div>
  )
}

export default Ecommerce