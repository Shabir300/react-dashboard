import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, 
Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, 
Edit, Inject } from '@syncfusion/ej2-react-grids'

import {ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='my-24 relative -z-10 md:m-10 p-6 md:p-10 bg-white rounded-3xl'>
      <div className='mb-10'>
        <p className='text-gray-400'>Page</p>
        <p className='text-3xl font-extrabold tracking-tight '>Orders</p>
      </div>
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport,
          Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders