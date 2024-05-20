import React from 'react'
import { FaListAlt } from "react-icons/fa";


const ServicesHeader = ({heading}) => {
  return (
    
        <div >
            <div className=' font-bold text-xl text-slate-600 p-5 bg-white flex  mb-8'> <FaListAlt className='text-md m-1'/><h1>{heading || 'Services List'}</h1></div>
            
        </div>
  )
}

export default ServicesHeader