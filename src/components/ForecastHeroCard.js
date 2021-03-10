import PropTypes from 'prop-types';
import WeatherIcon from './WeatherIcon';

import '../styles/ForecastHeroCard.css';

function ForecastHeroCard(props) {
  const { forecast, date } = props;
  console.log(forecast);

  return (
    <div className="forecast-hero-card">
      <div className="hero-date">
        <p>TODAY:</p>
        <p>{date}</p>
      </div>
      <div className="weather">

        <div className="desktop-container">
          <div className="hero-info">
            <h1>{parseInt(forecast.temp.day)}&#176; F</h1>
            <p>Feels like: {forecast.feels_like.day}&#176; F</p>
          </div>
          <div className="weather-glyph">
            <WeatherIcon weatherType={forecast.weather[0].main} />
            <p>{forecast.weather[0].main}</p>
          </div>
          <div className="hero-high-low">
            <p>High: {forecast.temp.max}&#176; F</p>
            <p>Low: {forecast.temp.min}&#176; F</p>
          </div>
        </div>

        <div className="mobile-container">
          <div className="weather-glyph">
            <WeatherIcon weatherType={forecast.weather[0].main} />
            <p>{forecast.weather[0].main}</p>
          </div>
          <div className="hero-divider" />
          <div className="mobile-info">
            <h1>{parseInt(forecast.temp.day)}&#176; F</h1>
            <p>High: {parseInt(forecast.temp.max)}&#176; F</p>
            <p>Low: {parseInt(forecast.temp.min)}&#176; F</p>
          </div>
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
