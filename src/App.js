import './App.css';
import Search from './Components/search/search';
import Currentweather from './Components/current-weather/current-weather';
import { waeather_api_URL,weather_api_key } from './api';
import { useState } from 'react';


function App() {

  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleonSearchChange = (searchData) => {
    const [lat,lon] = searchData.value.split(" ");

    const currentweatherfetch = fetch(`${waeather_api_URL}/weather?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`);
    const forecastfetch = fetch(`${waeather_api_URL}/forecast?lat=${lat}&lon=${lon}&appid=${weather_api_key}&units=metric`);

    Promise.all([currentweatherfetch,forecastfetch])
    .then(async(response) => {
      const weatherresponse = await response[0].json();
      const forecastresponse = await response[1].json();

      setcurrentWeather({ city: searchData.label, ...weatherresponse});
      setForecast({ city: searchData.label, ...forecastresponse});
    })
    .catch((err) => console.log(err));
  }

  console.log(currentWeather)
  console.log(forecast)
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}></Search>
      {currentWeather && <Currentweather data={currentWeather}></Currentweather>}
    </div>
    
  );
}

export default App;
