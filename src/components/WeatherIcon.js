import PropTypes from 'prop-types';
import Clear from '../lib/SVGs/sunny.svg';
import Clouds from '../lib/SVGs/cloudy.svg';
import Rain from '../lib/SVGs/rain.svg';
import Snow from '../lib/SVGs/snowy.svg';

function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case 'Clear':
      return <img src={Clear} alt="yellow sun" />;
    case 'Clouds':
      return <img src={Clouds} alt="gray clouds" />;
    case 'Rain':
      return <img src={Rain} alt="rain clouds" />;
    case 'Snow':
      return <img src={Snow} alt="snow flakes" />;
    default:
      return null;
  }
}

WeatherIcon.propTypes = {
  weatherType: PropTypes.string,
};

export default WeatherIcon;
