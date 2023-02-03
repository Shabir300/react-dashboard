/*eslint-disable*/
import React from 'react'
import { ChartComponent, LineSeries, SplineSeries, SeriesDirective, SeriesCollectionDirective, Inject, Legend,
Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedChartData, stackedPrimaryXAxis, stackedPrimaryYAxis} from 
'../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Stacked = ({height, width}) => {
  const {currentMode} = useStateContext();
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 }}}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      LegendSettings={{ background: 'white'}}
    >
      <Inject services={[Legend, Category, StackingColumnSeries,
      Tooltip]} />

      <SeriesCollectionDirective>
          {stackedCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>

    </ChartComponent>
    
  )
}

export default Stacked