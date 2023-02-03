/*eslint-disable*/
import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,
ContextMenu, Filter, Search, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from
'@syncfusion/ej2-react-grids'

import { employeesData,  employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='my-24 relative -z-10 md:m-10 p-6 md:p-10 bg-white rounded-3xl'>
      <div className='mb-10'>
      <p className='text-gray-400'>Page</p>
      <p className='text-3xl font-extrabold tracking-tight '>Employees</p>
    </div>
      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        
          <Inject services={[ Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees