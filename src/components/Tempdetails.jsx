import React from 'react'
import {
    UilLocationPoint,
    UilSchedule
  } from "@iconscout/react-unicons";
import { iconUrlFromCode } from '../services/weatherService';
import { formatToLocalTime4 } from '../services/weatherService'


function Tempdetails({weather: {details, icon, temp, dt, timezone, name, country}, selectedUnit, units, a}) {
  return (

    <div className="mb-6 min-w-min bg-zinc-950 text-white rounded-3xl p-8 md:h-80 md:w-80">
        <h2 className='px-3'>Now</h2>

        <div className='flex flex-row items-center justify-between'>
            <p className='text-6xl px-3'>{temp.toFixed()}&deg;</p>
            
            <img 
                src={iconUrlFromCode(icon)} 
                alt="" 
                className='w-25 pl-2'/>
        </div>
        
        <p className='capitalize px-3'>{details}</p>

        <hr className='text-white my-4'/>

        <ul className='flex flex-col text-sm px-3'>
            <li className='flex flex-row py-2'>
                <span><UilSchedule size={20}/></span>
                <p className='text-gray-400 px-2'>{formatToLocalTime4(dt, timezone, "dddd, Do MMM" )}</p>
            </li>
            <li className='flex flex-row pt-3'>
                <span><UilLocationPoint size={20}/></span>
                <p className='text-gray-400 px-2'>{`${name}, ${country}`}</p>
            </li>
        </ul>
    </div>

  )
}

export default Tempdetails