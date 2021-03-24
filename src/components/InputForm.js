import PropTypes from 'prop-types';
import ErrorMessage from './ErrorMessage';

import '../styles/InputForm.css'

function InputForm(props) {
  const { loading, formSubmit, statusCode, textChange } = props;

  return (
    <div className={`que-container ${loading ? 'loading' : ''}`}>
      <h2>Enter a zip code or city name to get weather results.</h2>
      <p><i>Note: Zip Codes may give more accurate results.</i></p>
      <form onSubmit={(e) => formSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Enter zip code or name..."
            onChange={textChange}
          />
        </div>
        <input type="submit" value="Find City" />
      </form>
      {statusCode === 404 && (<ErrorMessage />)}
    </div>
  );
}

InputForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  formSubmit: PropTypes.func.isRequired,
  textChange: PropTypes.func.isRequired,
  statusCode: PropTypes.number,
};

export default InputForm;
