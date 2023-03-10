import React from 'react'
import { ChartsHeader } from '../../components'
import { ChartComponent, SplineAreaSeries, SeriesCollectionDirective,
SeriesDirective, Inject, Legend, DateTime } from '@syncfusion/ej2-react-charts'
import {areaCustomSeries,  areaPrimaryXAxis, areaPrimaryYAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'


const Area = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 relative -z-10 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg
    rounded-3xl '>
      <ChartsHeader category='Chart' title='Area' />
      <ChartComponent
          id="charts"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
    </div>
  )
}

export default Area