import React from 'react'
import {
    UilWind,
    UilSunset,
    UilSun,
    UilTemperatureHalf,
    UilBrightness,
    UilEye,
    UilTear,
    UilWater,
    UilRaindropsAlt
  } from "@iconscout/react-unicons";
import { formatToLocalTime4 } from '../services/weatherService';



function Tempdetails3({weather: {sunrise, sunset,timezone, humidity, pressure, visibility, speed, feels_like, aqi, pm2_5, so2, no2, o3}}) {
    
    const AQI = ({ aqi }) => {
        let aqiText = '',
        aqiColor = '';
    
        if (aqi === 1) {
        aqiText = 'Good';
        aqiColor = 'bg-green-500';
        } else if (aqi === 2) {
        aqiText = 'Fair';
        aqiColor = 'bg-yellow-500';
        } else if (aqi === 3) {
        aqiText = 'Moderate';
        aqiColor = 'bg-orange-500';
        } else if (aqi === 4) {
        aqiText = 'Poor';
        aqiColor = 'bg-red-500';
        } else {
        aqiText = 'Very Poor';
        aqiColor = 'bg-[#8B0000]';
        }
    
        return (
            <span className={`px-2 rounded-3xl text-white text-xs ${aqiColor}`}>
                {aqiText}
            </span>
        );
    };


  return (
    <div className='mx-2 text-white bg-gray-950 px-4 py-8 rounded-3xl'>
    
        <h2 className='px-4'>Todays Highlights</h2>
        <div className='grid grid-cols-2'>

            <div className='bg-gray-900 rounded-3xl px-5 py-3 m-4'>
                <div className='flex flex-row justify-between items-center mt-2'>
                    <h3 className='text-sm text-gray-300'>Air Quality Index</h3>
                    
                    <AQI aqi={aqi} />
                    
                </div>
                <div className='flex flex-row justify-evenly items-center my-4'>
                    <span><UilWind size={45}/></span>

                    <ul className='flex flex-row ml-4'>
                        <li className='mx-2 text-center'>
                            <p className='text-gray-400 text-xs text-center mx-2 mb-2'>PM<sub>2.5</sub></p>
                            <p className='text-3xl'>{pm2_5.toFixed()}</p>
                        </li>
                        <li className='mx-2 text-center'>
                            <p className='text-gray-400 text-xs text-center mx-2 mb-2'>SO<sub>2</sub></p>
                            <p className='text-3xl'>{so2}</p>                                
                        </li>
                        <li className='mx-2 text-center'>
                            <p className='text-gray-400 text-xs text-center mx-2 mb-2'>NO<sub>2</sub></p>
                            <p className='text-3xl'>{no2}</p>
                        </li>
                        <li className='mx-2 text-center'>
                            <p className='text-gray-400 text-xs text-center mx-2 mb-2'>O<sub>23</sub></p>
                            <p className='text-3xl'>{o3}</p>
                        </li>
                    </ul>
                </div>   
            </div>

            <div className='bg-gray-900 rounded-3xl px-5 py-3 m-4'>
                <h3 className='text-sm text-gray-300 mt-3'>Sunrise & Sunset</h3>

                <div className='flex flex-row justify-between items-center my-4'>
                    <div className='flex flex-row justify-between items-center'>
                        <span><UilSun size={45}/></span>

                        <div className='mx-2'>
                            <p className='text-gray-400 text-xs mb-2'>Sunrise</p>
                            <span className='text-3xl'>{formatToLocalTime4(sunrise, timezone, "hh:mm A")}</span>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <span><UilSunset size={45}/></span>

                        <div className='mx-2'>
                            <p className='text-gray-400 text-xs mb-2'>Sunset</p>
                            <span className='text-3xl'>{formatToLocalTime4(sunset, timezone, "hh:mm A")}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='grid grid-cols-4 mx-3'>
            <div className='bg-gray-900 rounded-3xl px-4 py-5 m-4'>
                <h3 className='text-sm text-gray-300'>Humidity</h3>
                <div className='flex flex-row mt-6 justify-between items-center'>
                    <span><UilTear size={45}/></span>
                    <p className='text-3xl'>{humidity}<small>%</small></p>
                </div>
            </div>

            <div className='bg-gray-900 rounded-3xl px-4 py-5 m-4'>
                <h3 className='text-sm text-gray-300'>Pressure</h3>
                <div className='flex flex-row mt-6 justify-between items-center'>
                    <span><UilWater size={40}/></span>
                    
                    <p className='text-3xl'>{pressure}<small>mb</small></p>
                </div>
            </div>

            <div className='bg-gray-900 rounded-3xl px-4 py-5 m-4'>
                <h3 className='text-sm text-gray-300'>Visibilty</h3>
                <div className='flex flex-row mt-6 justify-between items-center'>
                    <span><UilEye size={45}/></span>
                    <p className='text-3xl'>{visibility/100}<small>km</small></p>
                </div>
            </div>

            <div className='bg-gray-900 rounded-3xl px-4 py-5 m-4'>
                <h3 className='text-sm text-gray-300'>Wind</h3>
                <div className='flex flex-row mt-6 justify-between items-center'>
                    <span><UilWind size={40}/></span>
                    <p className='text-3xl'>{speed}<small>m/s</small> </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Tempdetails3