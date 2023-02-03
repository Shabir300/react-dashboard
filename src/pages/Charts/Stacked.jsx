import { fromJSON } from 'postcss'
import React from 'react'
import { ChartComponent, SeriesCollectionDirective,
SeriesDirective, Legend, Tooltip, Inject, DataLabel, StackingColumnSeries, Category } from '@syncfusion/ej2-react-charts'
import { ChartsHeader } from '../../components'
import { stackedChartData } from '../../data/dummy'
import { Item } from '@syncfusion/ej2/splitbuttons'
import { stackedCustomSeries, stackedPrimaryXAxis, 
stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Stacked = () => {
  const {currentMode} = useStateContext();
  return (
    <div className='m-4 relative -z-10 rounded-3xl md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg' >
      <ChartsHeader category='Chart'  title='Stacked' />
      <ChartComponent
        id='charts'
        width='550px'
        height='650px'
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        tooltip={{enable: true}}
        chartArea={{ border: { width: 0 }}}
        legendSettings={{background: 'white'}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[Legend, Category, Tooltip, DataLabel, StackingColumnSeries]} />
        <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Stacked