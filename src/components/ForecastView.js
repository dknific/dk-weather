import ForecastHeroCard from './ForecastHeroCard';
import ForecastCard from './ForecastCard';
import { generateDatesArray } from '../lib/constants';

import '../styles/ForecastView.css';

function ForecastView(props) {
  const { location, forecast, reset } = props;
  const datesArray = generateDatesArray();

  const heroForecast = forecast[0];
  const forecasts = forecast.slice(1, forecast.length);

  return (
    <div className="forecast-view">
      <button onClick={() => reset()}>Search Again!</button>
      <h2>Your 7-day forecast for <br/>{location.name}:</h2>
      <div className="mobile-divider" />

      <ForecastHeroCard forecast={heroForecast} date={datesArray[0]} />
      <div className="forecast-cards-container">
        {forecasts.map((day, index) =>
          <ForecastCard forecast={day} date={datesArray[index + 1]} />
        )}
      </div>

    </div>
  );
}

export default ForecastView;
