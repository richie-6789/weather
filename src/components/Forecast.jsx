import {React, useState} from 'react';
import { iconUrlFromCode } from '../services/weatherService'
import {
    UilAngleLeft,
    UilAngleRight,
  } from "@iconscout/react-unicons";


function Forcast({title, items}) {
    const [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + 8;

    const nextSlide = () => {
        if (endIndex < items.length) {
        setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
        setStartIndex(startIndex - 1);
        }
    };

  return (
    
        <div className="bg-zinc-950 rounded-3xl p-7 mx-2">
            <div className="flex justify-start items-center">
                <p className="text-white">{title}</p>
            </div>
            
            <div className="flex flex-row items-center justify-between text-white my-6">
                <button onClick={prevSlide} disabled={startIndex === 0}>
                    <UilAngleLeft/>
                </button>
                
    
                <div className="flex flex-row overflow-hidden">
                    {items.slice(startIndex, endIndex).map((item) => (
                    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-2xl mx-2 p-4 flex-shrink-0 flex-grow-0 w-24">
                    <p className="font-light text-sm">{item.title}</p>
                    <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" />
                    <p className="font-medium">{`${item.temp.toFixed()}`}&deg;</p>
                    </div>
                    ))}
                </div>
    
                <button onClick={nextSlide} disabled={endIndex >= items.length}>
                    <UilAngleRight/>
                </button>
            </div>
            
        </div>
        )
    }

export default Forcast