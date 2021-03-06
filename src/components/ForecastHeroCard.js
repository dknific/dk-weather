import WeatherIcon from './WeatherIcon';
import '../styles/ForecastHeroCard.css';

function ForecastHeroCard(props) {
  const { forecast, date } = props;

  return (
    <div className="forecast-hero-card">
      {console.log(forecast)}
      <div className="hero-date">
        <p>TODAY:</p>
        <p>{date}</p>
      </div>
      <div className="weather">
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

export default ForecastHeroCard;
