import "./current-weather.css";

const Currentweather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city"> Belgrade </p>
          <p className="weather-description"> Sunny </p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
      </div>
      <div className="bottom">
        <p className="temperature">25°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">21°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind Speed</span>
            <span className="parameter-value">12 km/hr</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">40%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">1003 mBar</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
