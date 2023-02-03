import React from 'react'
import { Header } from '../../components'
import { ChartComponent, SeriesCollectionDirective,
SeriesDirective, Inject, Legend, Tooltip } from '@syncfusion/ej2-react-charts'
import { financialChartData } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Financial = () => {
  return (
    <div className='m-4 relative -z-10 rounded-3xl md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Financial' />
      <ChartComponent>
        <SeriesCollectionDirective>
          {financialChartData.map((item, index) => (
            <SeriesDirective key={index}  {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Financial