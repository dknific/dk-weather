import './styles/ErrorMessage.css';

function ErrorMessage() {
  return (
    <div className="error-message-container">
      <h3>Whoops!</h3>
      <p className="error-code">404 - No Results.</p>
      <div className="divider" />
      <p>It looks like there was a problem with your search term.</p>
      <p>Please check your input and try again.</p>
    </div>
  );
}

export default ErrorMessage;
