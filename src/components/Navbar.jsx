import {  PowerSettingsNew, Settings } from '@mui/icons-material'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-slate-950 px-4 py-4 flex justify-between'>
  <div>
    <img src="../src/assets/logo.png" alt="" className='h-16' />
  </div>
  <div className='flex px-5'>
    <button className='text-white px-5 font-semibold text-md'><Settings style={{fontSize:"35px"}}/>Account Settings</button>
    <button className='text-white font-semibold text-md'><PowerSettingsNew style={{fontSize:"35px"}}/>Logout</button>
  </div>
    </div>
  )
}

export default Navbar