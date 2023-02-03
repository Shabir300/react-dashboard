import React from 'react'
import { ChartComponent, ColumnSeries, DataLabel,
Inject, DateTime, SeriesCollectionDirective, SeriesDirective, Legend, Category } from '@syncfusion/ej2-react-charts'
import { ChartsHeader } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy'
import { Tooltip } from '@syncfusion/ej2-react-popups'

const Bar = () => {
  const {currentMode} = useStateContext()
  return (
    <div className='m-4 relative -z-10 rounded-3xl md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg'>
      <ChartsHeader category='Chart' title='Stock Market' />
      <ChartComponent
          id="charts"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[ColumnSeries, DataLabel, Tooltip, Category, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
    
    </div>
  )
}

export default Bar