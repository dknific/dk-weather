import PropTypes from 'prop-types';
import ForecastHeroCard from './ForecastHeroCard';
import ForecastCard from './ForecastCard';
import { generateDatesArray } from '../lib/helperFunctions';

import '../styles/ForecastView.css';

function ForecastView(props) {
  const { location, forecast, resetApp } = props;
  const datesArray = generateDatesArray();

  const heroForecast = forecast[0];
  const forecasts = forecast.slice(1, forecast.length);

  return (
    <div className="forecast-view">
      <button onClick={() => resetApp()}>Search Again!</button>
      <div className="mobile-divider" />

      <h2>Your 7-day forecast for <br/>{location.name}:</h2>

      <ForecastHeroCard forecast={heroForecast} date={datesArray[0]} />
      <div className="forecast-cards-container">
        {forecasts.map((day, index) =>
          <ForecastCard forecast={day} date={datesArray[index + 1]} key={index} />
        )}
      </div>
    </div>
  );
}

ForecastView.propTypes = {
  location: PropTypes.object,
  forecast: PropTypes.array,
  resetApp: PropTypes.func,
};

export default ForecastView;
