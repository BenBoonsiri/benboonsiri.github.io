// import logo from './logo.svg';
import logo from './profile_circle.png';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function App() {
  return (
    <div className="App">
      <div style={{marginTop: '20px', marginRight: '30px', textAlign: 'right'}}>
        <Button variant="text" color="primary" style={{ marginRight: '20px', textTransform: 'none', fontSize: '18px', fontFamily: 'Nunito'}}>
            About
        </Button>
        <Button variant="text" color="primary" style={{ marginRight: '20px', textTransform: 'none' , fontSize: '18px', fontFamily: 'Nunito'}}>
            Photos
        </Button>
        <Button variant="text" color="primary" style={{ marginRight: '20px', textTransform: 'none', fontSize: '18px', fontFamily: 'Nunito' }}>
            Projects
        </Button>
      </div>
      <header className="App-header">
        <div style={{ display: 'flex', alignItems: 'center', margin: '50px'}}>
          <div style={{ flex: 1, marginRight: '10px', textAlign: 'right'}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div style={{ flex: 1, margin: '50px', textAlign: 'left' }}>
            <h1>Hello</h1>
            {/* <Typography variant="h1">Hello</Typography> */}
            <h4>About me</h4>
            <p>
              Hey I'm Ben! I'm a graduating Computer Science student at the University of Waterloo! I have completed Software Engineering roles at companies including Tesla, Deliverect, Arctic Wolf, and SPS Commerce!
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
