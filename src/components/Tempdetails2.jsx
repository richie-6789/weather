import React from 'react'

import { iconUrlFromCode } from '../services/weatherService'

function Tempdetails2({items}) {
  return (
    <div className='text-white'>
        
        <div className='bg-zinc-950 rounded-3xl py-8 px-4 md:w-80  '>
            <h2 className='px-3 mb-3'>5 day forecast</h2>
            <ul>
                {items.filter((e,i) => i % 8 === 7).map((item) => (
                    <li className='flex mx-2  justify-between items-center'>
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