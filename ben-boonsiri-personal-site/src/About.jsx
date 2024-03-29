import logo from './profile_circle.png';
import './About.css';
import Divider from '@mui/material/Divider';


function About() {
  const emailAddress = 'benboonsiri@gmail.com';
  const mailtoLink = `mailto:${emailAddress}`;


  return (
    <div className="About">
      <header className="content">
        <div style={{ display: 'flex', alignItems: 'center', margin: '50px', maxWidth: '1100px'}}>
          <div style={{ flex: 1, marginRight: '10px', textAlign: 'right'}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div style={{ flex: 1, margin: '50px', marginRight: '10px', textAlign: 'left'}}>
            <h1>Hello</h1>
            <h4>About me</h4>
            <p>
              Hey I'm Ben! I'm a graduating computer science student at the University of Waterloo. I have had Software Engineering roles at companies including Tesla, Deliverect, Arctic Wolf, and SPS Commerce! I also love hockey, soccer, and photography!
            </p>
          </div>
        </div>
      </header>
      <div className="divider-container">
        <Divider />
      </div>
      <div className='bottom-bar'>
        <div className='bottom-bar-element'>
          <div className='bottom-bar-element-item'>
          <a style={{ fontWeight:'bold', color: '#3d3d3d' }} href="https://drive.google.com/file/d/1VOISFPQaGBzptlqnCSJkjqDJKVyr7gic/view?usp=sharing">Resume</a>
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
            <div className='bottom-bar-element-content'>
              <a href="https://www.linkedin.com/in/benboonsiri/">
                <svg className="svg-button" fill="#0a66c2" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"/></svg>
              </a>
              <a href="https://github.com/BenBoonsiri">
                <svg className='svg-button' height="24" viewBox="0 0 32 32" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 .396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183.803.151 1.093-.344 1.093-.772 0-.38-.009-1.385-.015-2.719-4.453.964-5.391-2.151-5.391-2.151-.729-1.844-1.781-2.339-1.781-2.339-1.448-.989.115-.968.115-.968 1.604.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328.14-1.031.557-1.74 1.011-2.135-3.552-.401-7.287-1.776-7.287-7.907 0-1.751.62-3.177 1.645-4.297-.177-.401-.719-2.031.141-4.235 0 0 1.339-.427 4.4 1.641 1.281-.355 2.641-.532 4-.541 1.36.009 2.719.187 4 .541 3.043-2.068 4.381-1.641 4.381-1.641.859 2.204.317 3.833.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891.556.479 1.077 1.464 1.077 2.959 0 2.14-.02 3.864-.02 4.385 0 .416.28.916 1.104.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
