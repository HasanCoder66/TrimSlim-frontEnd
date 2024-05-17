import React from 'react'

const Box = ({title, icon, value}) => {
  return (
    <div className=" p-3 bg-white rounded-sm">
    <h6 className="text-xs font-bold">{title}</h6>
    <div className="flex justify-between items-center">
        <span className={ `bg-[#fb9678] p-1 rounded-md my-5 font-bold text-white`}>{icon}</span>
        <span className="text-3xl font-semibold">{value}</span>
    </div>
</div>
  )
}

export default Box