import PropTypes from 'prop-types';
import '../styles/CityVerification.css';

function CityVerification(props) {
  const { loading, statusCode, location, getForecast, resetApp } = props;

  return (
    <div className={`city-verification-container ${loading ? 'loading' : ''}`}>
      {statusCode === 200 && (
        <div className="status-200">
          <h2>Is this the correct city?</h2>
          <p>{location.name}, {location.country}</p>
          <p className="coords-200">({location.coords.lat}, {location.coords.lon})</p>
          <button className="accept-button" onClick={() => getForecast()}>Yes, Get Forecast!</button>
          <button
            className="cancel-button"
            onClick={() => resetApp()}
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
  loading: PropTypes.bool.isRequired,
  statusCode: PropTypes.number,
  location: PropTypes.object,
  getForecast: PropTypes.func,
  resetApp: PropTypes.func,
};

export default CityVerification;
