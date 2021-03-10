import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

import '../styles/ForecastHeroCard.css';

function ForecastHeroCard(props) {
  const { forecast, date } = props;

  return (
    <div className="forecast-hero-card">
      <div className="hero-date">
        <p>TODAY:</p>
        <p>{date}</p>
      </div>
      <div className="weather">
        <div className="hero-info">
          <p>Feels like: {forecast.feels_like.day}&#176; F</p>
          <p className="humidity">Humidity: {forecast.humidity}</p>
        </div>
        <div className="weather-glyph">
          <WeatherIcon weatherType={forecast.weather[0].main} />
          <p>{forecast.weather[0].main}</p>
        </div>
        <div className="hero-divider" />
        <div className="hero-high-low">
          <p>High: {forecast.temp.max}&#176; F</p>
          <p>Low: {forecast.temp.min}&#176; F</p>
        </div>
      </div>
    </div>
  );
}

ForecastHeroCard.propTypes = {
  forecast: PropTypes.object,
  date: PropTypes.string,
};

export default ForecastHeroCard;
