// import logo from './logo.svg';
import logo from './profile_circle.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        hi
      </div>
      <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center', margin: '50px'}}>
          <div style={{ flex: 1, marginRight: '10px', textAlign: 'right'}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div style={{ flex: 1, margin: '50px', textAlign: 'left' }}>
            <h1>Hello</h1>
            <h5>About me</h5>
            <p>
              Hey I'm Ben! I'm a Computer Science student at the University of Waterloo! I have completed Software Engineering roles at companies including Tesla, Deliverect, Arctic Wolf, and SPS Commerce!
            </p>
            {/* <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a> */}
          </div>
        </div>
      </header>
      <div>
        low
      </div>
    </div>
  );
}

export default App;
