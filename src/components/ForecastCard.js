import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

import '../styles/ForecastCard.css';

function ForecastCard(props) {
  const { forecast, date } = props;

  return (
    <div className="forecast-card">
      <p className="date-name">{date}</p>
      <div className="weather">
        <WeatherIcon weatherType={forecast.weather[0].main} />
        <div className="divider" />
        <div className="high-low-container">
          <p>High: {parseInt(forecast.temp.max)}&#176;</p>
          <p>Low: {parseInt(forecast.temp.min)}&#176;</p>
        </div>
      </div>
    </div>
  );
}

ForecastCard.propTypes = {
  forecast: PropTypes.obj,
  date: PropTypes.string,
};

export default ForecastCard;
