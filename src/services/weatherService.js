import { DateTime } from "luxon";
const moment = require("moment");

const API_KEY = "bae6e75d03f33c1ab89cc2dbfa28ee7d";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


// 1
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url)
        .then((res) => res.json())
};  

const formatCurrentWeather = (data) => {
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, pressure, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        visibility,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name, 
        dt,
        country, 
        sunrise,
        sunset,
        details,
        icon,
        speed,
        visibility,
        pressure
    }
};

const formatForecastWeather = (data) => {
    
    let {city:{timezone}, list} = data;

    // list = list.slice(1,6).map(d => {
    //     return {
    //         title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
    //         temp: d.main.temp,
    //         icon: d.weather[0].icon
    //     }
    // })

    // daily
    list = list.map(d => {
        return {
            title: formatToLocalTime4(d.dt, timezone, 'hh:mm A'),
            title1: formatToLocalTime4(d.dt, timezone, 'MMM DD'),
            day: formatToLocalTime4(d.dt, timezone, 'ddd'),
            temp: d.main.temp,           //d.temp.day
            icon: d.weather[0].icon
        }
    });

    // hourly = hourly.slice(1,6).map(d => {
    //     return {
    //         title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
    //         temp: d.temp.day,
    //         icon: d.weather[0].icon
    //     }
    // }); 

    return {timezone, list};
}

const formatAirPollution = (data) => {
    const{list} = data
    const {
        main: {aqi},
        components: {
            pm2_5,
            so2,
            no2,
            o3}
    } = list[0];
    
    return {
        aqi,
        pm2_5,
        so2,
        no2,
        o3
    }
}

// 2
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
        "weather",
        searchParams
        ).then(formatCurrentWeather)

        const  {lat, lon } = formattedCurrentWeather

        const formattedForecastWeather = await getWeatherData("forecast", {
            lat, 
            lon, 
            // exclude: 'current,minutely,alerts',
            units: searchParams.units,
        }).then(formatForecastWeather);

        const formattedAirPollution = await getWeatherData("air_pollution", {
            lat,
            lon
        }).then(formatAirPollution);

    return {...formattedCurrentWeather, ...formattedForecastWeather, ...formattedAirPollution}
}

const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png` ;


// const formatToLocalTime = (
//     secs, 
//     zone, 
//     format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
//     ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


const formatToLocalTime4 = (
    secs, 
    timezone,
    format
    ) => {
  const utcDateTime = moment.unix(secs).utc();
  const localDateTime = moment.utc(utcDateTime).utcOffset(timezone / 60);
  return localDateTime.format(format);
};


const formatToLocalTime1 = (
    zone,
    timezoneInMinutes = zone/60
    ) => {
        const currTime = moment().utcOffset(timezoneInMinutes).format('dddd, MMMM Do YYYY, [Local Time:] hh:mm a');
        return currTime
    }


export default getFormattedWeatherData

export { formatToLocalTime1, formatToLocalTime4, iconUrlFromCode};