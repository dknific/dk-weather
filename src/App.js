import { useState } from 'react';
import AppHeader from './components/AppHeader';
import CityVerification from './components/CityVerification';
import ForecastView from './components/ForecastView';
import ErrorMessage from './components/ErrorMessage';
import {
  isObjectEmpty,
  getWeatherCoords,
  getWeatherForecast,
} from './lib/helperFunctions';

import './styles/App.css';

function App() {
  const [userIn, setUserIn] = useState('');
  const [country, setCountry] = useState('US');
  const [location, setLocation] = useState({});
  const [status, setStatus] = useState();
  const [forecast, setForecast] = useState([]);

  const handleTextChange = (e) => {
    setUserIn(e.target.value);
  };

  const handleSelectCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus();
    const weatherResponse = await getWeatherCoords(userIn, country);
    if (weatherResponse.cod === 200) {
      const newLocation = {
        name: weatherResponse.name,
        country: weatherResponse.sys.country,
        coords: weatherResponse.coord,
      };
      setLocation(newLocation);
      setStatus(200);
    } else {
      setStatus(404);
    }
  }

  const resetForm = () => {
    setLocation({});
    setStatus();
    setForecast([]);
  }

  const makeForecast = async () => {
    const forecastResponse = await getWeatherForecast(location.coords);
    const dailyForecasts = forecastResponse.daily;
    dailyForecasts.pop();
    setForecast(dailyForecasts);
  }

  return (
    <div className="App">
      <div className="test" />
      <AppHeader />
      <div className="App-body">

      {isObjectEmpty(location) && (
        <div>
          <h2>What zip code would you like a weather forecast for?</h2>
          <p><i>Enter a zip code or name, then click 'Find City'.</i></p>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div>
              <input
                type="text"
                placeholder="Enter zip code or name..."
                onChange={handleTextChange}
              />
              <select value={country} onChange={handleSelectCountry}>
                <option value="US">U.S.A.</option>
                <option value="GB">United Kingdom</option>
              </select>
            </div>
            <input type="submit" value="Find City" />
          </form>
          {status === 404 && (<ErrorMessage />)}
        </div>
      )}

      {!isObjectEmpty(location) && forecast.length === 0 && (
        <CityVerification
          statusCode={status}
          location={location}
          getForecast={makeForecast}
          reset={resetForm}
        />
      )}

      {forecast.length > 0 && (
        <ForecastView
          location={location}
          forecast={forecast}
          reset={resetForm}
        />
      )}
      </div>
    </div>
  );
}

export default App;
