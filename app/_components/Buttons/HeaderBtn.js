import React from 'react'

const HeaderBtn = ({ btnTittle }) => {
  return (
    <div>
      <button className='bg-slate-950-950 text-white px-6 py-2 rounded-md hover:bg-slate-400 transition duration-300 ease-in-out'>{btnTittle}</button>
    </div>
  )
}

export default HeaderBtn