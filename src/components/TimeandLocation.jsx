import React from 'react'
import { formatToLocalTime1} from '../services/weatherService'

function TimeandLocation({weather: {dt, timezone, name, country}}) {
  return (

    <div className=''>
      <div className=" flex items-center justify-center">
        
          <p className="text-white text-md md:text-2xl font-normal">{`${name}, ${country}`}</p>
          &nbsp;&nbsp;
          <p className='text-white text-md md:text-xl font-extralight'>
            
            {formatToLocalTime1(timezone)}
            
          </p>
      </div>

      
    </div>
  )
  
}

export default TimeandLocation