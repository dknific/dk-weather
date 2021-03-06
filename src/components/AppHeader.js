import '../styles/AppHeader.css';

function AppHeader() {
  return (
    <header className="App-header">
      <div className="leftSide">
        <h1>dk-weather.</h1>
      </div>
      <div className="divider" />
      <div className="rightSide">
        <p>a simple React app using the OpenWeather API.</p>
      </div>
    </header>
  );
}

export default AppHeader;
