import PropTypes from 'prop-types';
import '../styles/CityVerification.css';

function CityVerification(props) {
  const { statusCode, location, getForecast, reset } = props;

  return (
    <div className="city-verification-container">
      {statusCode === 200 && (
        <div className="status-200">
          <h2>Is this the correct city?</h2>
          <p>{location.name}, {location.country}</p>
          <p>{location.coords.lat}, {location.coords.lon}</p>
          <button className="accept-button" onClick={() => getForecast()}>Yes, Get Forecast!</button>
          <button
            className="cancel-button"
            onClick={() => reset()}
          >
            No, Search Again.
          </button>
        </div>
      )}
      {statusCode === 404 && (
        <div className="status-404">
          <p>Whoops! We couldn't find that one.</p>
          <p>Please check your entry and try again.</p>
        </div>
      )}
    </div>
  );
}

CityVerification.propTypes = {
  statusCode: PropTypes.number,
  location: PropTypes.obj,
  getForecast: PropTypes.func,
  reset: PropTypes.func,
};

export default CityVerification;
