import React from 'react'
import HeaderBtn from './Buttons/HeaderBtn';

const ServicesCard = ({icon, tittle}) => {
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 rounded-md cursor-pointe shadow-xl lg:hover-translate-y-6 transition duration-300 ease-in-out'>
      <div className='bg-white p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-slate-500'>{icon}</div>
      <h1 className='font-bold text-lg'>{tittle}</h1>
      <p>
        Medicare dental services are an essential part of overall healthcare for older adults and individuals with disabilities, but they have historically been limited in scope under Medicare.
      </p>
    
      <HeaderBtn btnTittle="Learn More" className='cursor-pointer hover:text-green-800 transition duration-300 ease-in-out'/>
      
    </div>
  );
}

export default ServicesCard