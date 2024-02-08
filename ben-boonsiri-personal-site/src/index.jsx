import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './About';
import Navigation from './Navigation';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
import Photos from './Photos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<About/>} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/photos' exact element={<Photos/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
