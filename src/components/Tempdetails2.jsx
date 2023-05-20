import React from 'react'
import {
    UilLocationPoint,
  } from "@iconscout/react-unicons";

import { iconUrlFromCode } from '../services/weatherService'

function Tempdetails2({items}) {
  return (
    <div className='text-white'>
        
        <div className='bg-zinc-950 rounded-3xl px-4 py-6'>
            <h2 className='mx-4 mb-4'>5 day forecast</h2>
            <ul>
                {items.filter((e,i) => i % 8 === 7).map((item) => (
                    <li className='flex m-2 justify-between items-center'>
                        <div className='flex items-center'>
                            
                            <img 
                                src={iconUrlFromCode(item.icon)}
                                className='w-12 my-1' 
                                alt="" 
                            />
                            <p className='font-medium'>{`${item.temp.toFixed()}`}&deg;</p>
                            
                        </div>

                        <p className='text-gray-400 text-right text-sm'>{item.title1}</p>
                        <p className='text-gray-400 text-right text-sm'>{item.day}</p>
                    </li>
                ))} 
               
            </ul>
        </div>
    </div>
  )
}

export default Tempdetails2