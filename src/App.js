import { useState } from 'react';
import AppHeader from './components/AppHeader';
import InputForm from './components/InputForm';
import CityVerification from './components/CityVerification';
import ForecastView from './components/ForecastView';
import LoadingOverlay from './components/LoadingOverlay';
import {
  isObjectEmpty,
  getWeatherCoords,
  getWeatherForecast,
} from './lib/helperFunctions';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [userIn, setUserIn] = useState('');
  const [location, setLocation] = useState({});
  const [status, setStatus] = useState();
  const [forecast, setForecast] = useState([]);

  const handleTextChange = (e) => {
    setUserIn(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userIn.length > 0) {
      setStatus();
      setIsLoading(true);
      const weatherResponse = await getWeatherCoords(userIn);
      if (weatherResponse.cod === 200) {
        const newLocation = {
          name: weatherResponse.name,
          country: weatherResponse.sys.country,
          coords: weatherResponse.coord,
        };
        setLocation(newLocation);
        setStatus(200);
        setIsLoading(false);
      } else {
        setStatus(404);
        setIsLoading(false);
      }
    }
  }

  const resetForm = () => {
    setLocation({});
    setStatus();
    setForecast([]);
  }

  const makeForecast = async () => {
    setIsLoading(true);
    const forecastResponse = await getWeatherForecast(location.coords);
    const dailyForecasts = forecastResponse.daily;
    dailyForecasts.pop();
    setForecast(dailyForecasts);
    setIsLoading(false);
  }

  return (
    <div className="App">
      <AppHeader />
      <div className="App-body">

      {isLoading && (<LoadingOverlay />)}

      {isObjectEmpty(location) && (
        <InputForm
          loading={isLoading}
          formSubmit={handleFormSubmit}
          statusCode={status}
          textChange={handleTextChange}
        />
      )}

      {location && !isObjectEmpty(location) && forecast.length === 0 && (
        <CityVerification
          loading={isLoading}
          statusCode={status}
          location={location}
          getForecast={makeForecast}
          resetApp={resetForm}
        />
      )}

      {forecast.length > 0 && (
        <ForecastView
          location={location}
          forecast={forecast}
          resetApp={resetForm}
        />
      )}
      </div>
    </div>
  );
}

export default App;
