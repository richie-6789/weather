import React, { useState } from 'react'
import { UilSearch, UilCrosshairs} from "@iconscout/react-unicons"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inputs({setQuery, units, setUnits}) {
  const [city,setCity] = useState()

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.value
    if(selectedUnit !== units) setUnits(selectedUnit)
  }
  

  const handleSearchClick = () => {
    if(city) setQuery({q: city})
  }

  const handleLocationClick = () => {
    if(navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((position) =>{
        toast.success("Location fetched")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon
        })
      })
    }
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="w-full flex flex-row items-center justify-center space-x-4">

        <div class="w-1/2 relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UilSearch 
              size={25} 
              className='text-gray-800 cursor-pointer transition ease-out hover:scale-125' 
            />
          </div>
          <input 
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
            type="text" 
            class="block w-full p-4 pl-11 text-xl font-light py-2 px-5 shadow-xl focus:outline-none capitalize rounded-3xl " 
            placeholder="Search city" />
            
        
        </div>
        <button name='search' className='flex flex-row items-center text-md py-2 px-3 rounded-3xl bg-[#41c957f1] hover:bg-[#33ad47f1] focus:ring-4 focus:ring-[#84d392f1] focus:outline-none text-white font-light' onClick={handleSearchClick}>
          <UilSearch size={23} class="mr-1 -ml-1"/>
          Search
        </button>

        
      <button 
        type="button" 
        class="text-white bg-[#854d98c8] hover:bg-[#b557d4c8] focus:ring-4 focus:outline-none rounded-3xl text-md px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#FF91FF]/40 mr-2"
        onClick={handleLocationClick}
      >
        <UilCrosshairs size={23} className=" mr-1 -ml-1"/>
        Current Location
      </button> 
             
      </div>




    </div>
  );
}

export default Inputs