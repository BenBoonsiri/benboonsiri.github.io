// import logo from './logo.svg';
import logo from './profile_circle.png';
import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


function App() {
  const emailAddress = 'benboonsiri@gmail.com';
  const mailtoLink = `mailto:${emailAddress}`;


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
      <header className="content">
        <div style={{ display: 'flex', alignItems: 'center', margin: '50px', maxWidth: '1100px'}}>
          <div style={{ flex: 1, marginRight: '10px', textAlign: 'right'}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div style={{ flex: 1, margin: '50px', marginRight: '10px', textAlign: 'left'}}>
            <h1>Hello</h1>
            {/* <Typography variant="h1">Hello</Typography> */}
            <h4>About me</h4>
            <p>
              Hey I'm Ben! I'm a graduating Computer Science student at the University of Waterloo. I have had Software Engineering roles at companies including Tesla, Deliverect, Arctic Wolf, and SPS Commerce! I also love hockey, soccer, and photography!
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
      <div className="divider-container">
        <Divider />
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar-element'>
          <div className='bottom-bar-element-item'>
            <a style={{ fontWeight:'bold', color: '#3d3d3d' }} href="https://drive.google.com/file/d/1GCRqCVV4EWvDdMeh3Eab9vF9CkqOHhy7/view?usp=sharing">Resume</a>
          </div>
        </div>
        <div className='bottom-bar-element'>
          <div className='bottom-bar-element-item'>
            <b>Email</b>
            <div className='bottom-bar-element-content'>
              <a style={{color: '#696969'}} href={mailtoLink}>benboonsiri@gmail.com</a>
            </div>
          </div>
        </div>
        <div className='bottom-bar-element'>
          <div className="bottom-bar-element-item">
            <b>Phone</b>
            <div className='bottom-bar-element-content'>905-966-2811</div>
          </div>
        </div>
        <div className='bottom-bar-element'>
          <div className='bottom-bar-element-item'>
            <b>Accounts</b>
            <div className='bottom-bar-element-content'>linkedIn</div>
          </div>
        </div>
        {/* resume, email - benboonsiri@gmail.com, phone - 905-966-2811, Accounts - linkedIn GitHub */}
      </div>
    </div>
  );
}

export default App;
