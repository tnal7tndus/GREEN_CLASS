import './Weather.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_RESOURCE } from '../../../../model/server-config';


const Weather = () => {

    const [weather, setWeather] = useState({
        country: 'KR',
        cityName: 'Seoul',
        date: new Date().toLocaleDateString(),
        imgSrc: '',
        weatherIcon: '',
        today: {
            temp: '',
            humidity: '',
            temp_max: '',
            temp_min: ''
        },
        tomorrow: {
            temp: '',
            humidity: '',
            temp_max: '',
            temp_min: ''
        },
        dayAfter: {
            temp: '',
            humidity: '',
            temp_max: '',
            temp_min: ''
        }
    });
    let imgSRC = '/img/weather_clear.jpg';
    const apiKey = '60dbd7283a42ef16940bde54b9dc9cda';

    const getWeather = async (lat, lon) => {
        let cityName = 'Seoul'; // 도시명으로 하면 섭씨로 나와서 273도 빼줘야함.
        try {
            let res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`
            );

            let check = (res.data.list).filter(e => {
                const time = e.dt_txt.split(" ")[1];
                return time === "12:00:00";
            })
            let backIMG;
            let icon;
            if (check[0].weather[0].id >= 200 && check[0].weather[0].id <= 599) {
                backIMG = '/img/weather_rain.jpg';
                icon = 'fa-cloud-rain';
            } else if (check[0].weather[0].id == 800) {
                backIMG = '/img/weather_clear.jpg';
                icon = 'fa-sun';
            } else {
                backIMG = '/img/weather_cloud.jpg';
                icon = 'fa-cloud-sun';
            }

            setWeather((pre) => ({
                ...pre,
                imgSrc: backIMG,
                weatherIcon: icon,
                today: check[0],
                tomorrow: check[1],
                dayAfter: check[2]
            }))
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
            backgroundImage: `url(${SERVER_RESOURCE}${weather.imgSrc})`,
        }}>
            <div id='weatherDetail'>
                <div>{weather && weather.date}</div>
                <div>[{weather && weather.country}]
                    <span>{weather && weather.cityName}</span>
                    &nbsp;&nbsp;
                    <i className="fa-solid fa-location-arrow"></i>
                </div>
                <div id='todayTemp'>
                    {weather.today.main && Math.floor(weather.today.main.temp - 273)}℃
                </div>
                <div id='tempRange'>
                    <div>최고:{weather.today.main && Math.floor(weather.today.main.temp_min - 273)}℃</div>
                    <div>최저:{weather.today.main && Math.floor(weather.today.main.temp_max - 273)}℃</div>
                </div>

                <div id='otherDayBox'>
                    <div>
                        <div>
                            <div>내일</div>
                            <div className='weatherIconBox'>
                                <i className={`fa-solid ${weather && weather.weatherIcon}`}></i>
                            </div>
                        </div>
                        <div>{weather.tomorrow.main && Math.floor(weather.tomorrow.main.temp - 273)}℃</div>
                        <div className='minmaxBox'>
                            <div>최고 : {weather.tomorrow.main && Math.floor(weather.tomorrow.main.temp_max - 273)}℃</div>
                            <div>최저 : {weather.tomorrow.main && Math.floor(weather.tomorrow.main.temp_min - 273)}℃</div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>모레</div>
                            <div className='weatherIconBox'>
                                <i className={`fa-solid ${weather && weather.weatherIcon}`}></i>
                            </div>
                        </div>
                        <div>{weather.tomorrow.main && Math.floor(weather.dayAfter.main.temp - 273)}℃</div>
                        <div className='minmaxBox'>
                            <div>최고 : {weather.tomorrow.main && Math.floor(weather.dayAfter.main.temp_max - 273)}℃</div>
                            <div>최저 : {weather.tomorrow.main && Math.floor(weather.dayAfter.main.temp_min - 273)}℃</div>
                        </div>
                    </div>
                </div>
                {/* ==================== */}
                <div id='weatherIcon'>
                    <i className={`fa-solid ${weather && weather.weatherIcon}`}></i>
                </div>
                <div id='humidity'>
                    <i className="fa-solid fa-droplet"></i>
                    &nbsp;
                    {weather.today.main && weather.today.main.humidity}
                    &nbsp;&nbsp;
                    <i className="fa-solid fa-percent"></i>
                </div>
                {/* ==================== */}
            </div>
        </div>
    );
}

export default Weather;