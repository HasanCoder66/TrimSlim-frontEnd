import React from 'react'
import ServicesHeader from '../components/ServicesHeader'
import ReorderServicesTable from '../components/ReorderServicesTable'

const ReorderServices = () => {
  return (
    <div>
        <ServicesHeader heading="Reorder Services"/>    
        <ReorderServicesTable/>
      
    </div>
  )
}

export default ReorderServices