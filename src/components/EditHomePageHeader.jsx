import React from 'react'
import { GrEdit } from 'react-icons/gr'
import { IoDocumentTextOutline } from "react-icons/io5"
const EditHomePageHeader = ({heading}) => {
  return (
    <div>
        <div className='font-bold text-xl text-slate-600 p-5 bg-white flex mb-8'> <GrEdit className='text-md m-1'/><h1>{heading}</h1></div>
        
    </div>
  )
}

export default EditHomePageHeader