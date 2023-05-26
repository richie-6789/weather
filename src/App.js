import './App.css';
import Inputs from './components/Inputs';
import TopButtons from './components/TopButtons';
import TimeandLocation from './components/TimeandLocation';
// import TemperatureandDetails from './components/TemperatureandDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';
import Tempdetails from './components/Tempdetails';
import Tempdetails2 from './components/Tempdetails2';
import Tempdetails3 from './components/Tempdetails3';
import { useEffect, useState, React } from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [query, setQuery] = useState({q: 'delhi'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location."

      toast.info("Fetching weather for " + message)
      
      // await getFormattedWeatherData({...query, units}).then(
      //   (data) => {

      //     toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)

      //     setWeather(data);
      // });

      try {
        const data = await getFormattedWeatherData({ ...query, units });
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`);
        setWeather(data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch weather data. Please try again later.");
      }

    };
    fetchWeather();
  }, [query, units])


  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({q: "mumbai"});
  //   console.log(data);
  // }
  
  // fetchWeather();
  
  return (
    <div className='py-5 md:px-12 lg:px-0 xl:px-14 2xl:px-20 bg-neutral-800 h-fit shadow-xl shadow-gray-400'>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

      
      {/* <TemperatureandDetails /> */}

      {weather && (
        <div>
          <TimeandLocation weather={weather} />
          <div className='flex flex-col lg:flex-row mx-2 my-6 justify-between'>
            <div className='flex flex-col md:flex-row justify-evenly lg:flex-col mx-1 mb-5'>
              <Tempdetails weather={weather}/>
              <Tempdetails2 items={weather.list} />
            </div>

            <div className='lg:w-3/4'>
              <Tempdetails3 weather={weather}/>
              <Forecast title="Upcoming" items={weather.list} />

            </div>
          </div>
        </div>
      )}


      {/* <Forecast title="hourly forecast" />
      <Forecast title="daily forecast" /> */}
      <ToastContainer autoClose={1000} theme='colored' newestOnTop={true}/>
    </div>
  );
}

export default App;
