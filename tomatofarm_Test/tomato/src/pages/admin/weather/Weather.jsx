import './Weather.css'
import { SERVER_RESOURCE } from '../../../model/server-config';

import { useEffect, useState } from 'react';
import axios from 'axios';


const Weather = () => {

    const [weather, setWeather] = useState({});
    let imgSRC = '/img/weather_clear.jpg';
    const apiKey = '60dbd7283a42ef16940bde54b9dc9cda';
    const tomorrowTimestamp = getTimestamps().tomorrow;


    // 1713177813
    //1713177813


    function getTimestamps() {
        const today = new Date();

        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const afterTomorrow = new Date(tomorrow);
        tomorrow.setDate(afterTomorrow.getDate() + 1);

        const todayTimestamp = Math.round(today.getTime() / 1000);
        const tomorrowTimestamp = Math.round(tomorrow.getTime() / 1000);
        const afterTomorrowTimestamp = Math.round(afterTomorrow.getTime() / 1000);

        return {
            today: todayTimestamp,
            tomorrow: tomorrowTimestamp,
            afterTomorrow: afterTomorrowTimestamp
        };
    }


    const getWeather = async (lat, lon) => {
        let cityName = 'Seoul'; // 도시명으로 하면 섭씨로 나와서 273도 빼줘야함.
        try {
            let res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&dt=${tomorrowTimestamp}&appid=${apiKey}`
            );

            console.log(res.data)

            let weatherIcon = res.data.weather[0].icon;
            let weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            let weatherCode = res.data.weather[0].id;
            let temp = Math.round(res.data.main.temp - 273);
            let min_temp = Math.round(res.data.main.temp_max - 273);
            let max_temp = Math.round(res.data.main.temp_min - 273);
            let backIMG;
            if (200 <= weatherCode <= 399) {
                backIMG = '/img/weather_rain.jpg'
            } else if (weatherCode == 800) {
                backIMG = '/img/weather_clear.jpg'
            } else if (weatherCode > 800) {
                backIMG = '/img/weather_cloud.jpg'
            }
            setWeather({
                country: res.data.sys.country,
                city: res.data.name,
                temp: temp,
                imgSRC: backIMG,
                min_temp: min_temp,
                max_temp: max_temp,
                humidity: res.data.main.humidity,
                icon: weatherIconAdrs,
                date: new Date().toLocaleDateString()
            })
            // setWeather({
            //     todat : {
            //         country: res.data.sys.country,
            //         city: res.data.name,
            //         temp: temp,
            //         imgSRC: backIMG,
            //         min_temp: min_temp,
            //         max_temp: max_temp,
            //         humidity: res.data.main.humidity,
            //         icon: weatherIconAdrs,
            //         date: new Date().toLocaleDateString()
            //     }
            // })
        } catch { console.log('catch블럭') }
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeather(lat, lon);
        });
    }, []);

    return (
        <div id='weatherBox' style={{
            // backgroundImage: `url(${SERVER_RESOURCE}/img/weather_clear.jpg)`,
            backgroundImage: `url(${SERVER_RESOURCE}${weather.imgSRC})`,
        }}>
            <div id='weatherDetail'>
                <div>{weather && weather.date}</div>
                <div>[{weather && weather.country}]
                    <span>{weather.city}</span>
                    &nbsp;&nbsp;
                    <i className="fa-solid fa-location-arrow"></i>
                </div>
                <div id='todayTemp'>
                    {weather.temp}℃
                </div>
                <div id='tempRange'>
                    <div>최고:{weather.max_temp}℃</div>
                    <div>최저:{weather.min_temp}℃</div>
                </div>

                <div id='otherDayBox'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {/* ==================== */}
                <div id='weatherIcon'>
                    <img src={weather.icon} alt="" />
                </div>
                <div id='humidity'>
                    <i className="fa-solid fa-droplet"></i>
                    &nbsp;
                    {weather.humidity}
                    &nbsp;&nbsp;
                    <i className="fa-solid fa-percent"></i>
                </div>
                {/* ==================== */}
            </div>
        </div>
    );
}

export default Weather;