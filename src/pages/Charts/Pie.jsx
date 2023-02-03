import React from 'react'
import { Header } from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { pieChartData, piePrimaryXAxis, piePrimaryYAxis } from '../../data/dummy'

const Pie = () => {
  return (
    <div className='m-4 rounded-3xl md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg'>
      <Header category='Chart' title='Pie' />

    </div>
  )
}

export default Pie