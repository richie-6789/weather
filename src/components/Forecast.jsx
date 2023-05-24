import React from 'react';
import { iconUrlFromCode } from '../services/weatherService'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Forcast({title, items}) {


  return (
    // <div className='bg-zinc-950 rounded-3xl py-4 px-8 my-4 mx-2'>

    //     <div className="flex justify-start items-center my-4">
    //         <p className="text-white">{(title)}</p>
    //     </div>

    //     <div className="flex flex-row items-center justify-between text-white my-2 ">
    //         {items.slice(0,8).map((item) => (
    //             <div className="flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-4 md:w-24">
    //                 <p className="font-light text-sm">{item.title}</p>
    //                 <img 
    //                     src={iconUrlFromCode(item.icon)}
    //                     className='w-12 my-1' 
    //                     alt="" 
    //                 />
    //                 <p className='font-medium'>{`${item.temp.toFixed()}`}&deg;</p>
    //             </div>
    //         ))} 
    //     </div>

    // </div>



        <div className="bg-zinc-950 rounded-3xl p-8 mx-2">
            <div className="flex justify-start items-center">
                <p className="text-white">{title}</p>
            </div>

            
                <div className="flex flex-row items-center justify-between text-white my-6 ">
                    {items.slice(0, 8).map((item) => (
                        <div className="flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-4 md:w-24">
                        <p className="font-light text-sm">{item.title}</p>
                        <img src={iconUrlFromCode(item.icon)} className="w-12 my-1" alt="" />
                        <p className="font-medium">{`${item.temp.toFixed()}`}&deg;</p>
                        </div>
                    ))}
                </div>
            
        </div>
        )
    }

export default Forcast