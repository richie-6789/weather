import React from 'react';
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  UilLocationPoint
} from "@iconscout/react-unicons";

function TemperatureandDetails() {
  return (
    <div>
      {/* <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Sunny</p>
      </div>

      <div className="flex flow-row items-center justify-between text-white py-3">
        <img 
          src="https://openweathermap.org/img/wn/01d@2x.png" 
          alt="" 
          className='w-20'
        />
        <p className='text-5xl'>34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="mr-1" />
            Real fell: 
            <span className='font-medium ml-1'>32°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" />
            Humidity: 
            <span className='font-medium ml-1'>65%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" />
            Wind: 
            <span className='font-medium ml-1'>11 km/h</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light">
          Rise: <span className='font-medium ml-1'>06:45 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilSunset />
        <p className="font-light">
          Set: <span className='font-medium ml-1'>07:35 PM</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          High: <span className='font-medium ml-1'>45°</span>
        </p>
        <p className="font-light">|</p>

        <UilSun />
        <p className="font-light">
          Low: <span className='font-medium ml-1'>40°</span>
        </p>
      </div> */}

      <div className='flex flex-row'>
        <div className="w-1/4 p-8 bg-zinc-950 rounded-3xl">
          <div className="flex items-center text-xl text-gray-200">
            <p>Now</p>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <p className='text-6xl text-white'>34°</p>
            <img 
              src="https://openweathermap.org/img/wn/01d@2x.png" 
              alt="" 
              className='w-25'
            />
          </div>
          <div className="flex items-center text-md text-gray-400">
            <p>Sunny</p>
          </div>

          <hr className='text-gray-300 my-4'/>

          <div className='flex flex-col text-zinc-200 text-sm'>
            <div className="flex flex-row my-1">
              <UilLocationPoint 
                size={20} 
                className='text-white cursor-pointer transition ease-out hover:scale-125 mr-2'
              />
              <p>Wednesday, 25 March, 2020</p>
            </div>

            <div className="flex flex-row my-1">
              <UilLocationPoint 
                size={20} 
                className='text-white cursor-pointer transition ease-out hover:scale-125 mr-2'
              />
              <p>Berlin, DE</p>
            </div>
          </div>
          
        </div>

        <div className="ml-6 w-3/4 p-8 bg-zinc-900 rounded-3xl text-gray-200">

          <p className=''>Today's Highlights</p>

          <div className="flex">


            <div className="p-6">
              <p className='text-white text-lg'>Sunrise & Sunset</p>
              <div className="flex flex-row">
                <div className='p-4'>
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      


    </div>
  );
}

export default TemperatureandDetails