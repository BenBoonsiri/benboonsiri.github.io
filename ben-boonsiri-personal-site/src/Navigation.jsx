import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function Navigation() {
    const navigate = useNavigate();

  return (
    <div style={{marginTop: '20px', marginRight: '30px', textAlign: 'right'}}>
    <Button variant="text" onClick={() => navigate('/about')} color="primary" style={{ marginRight: '20px', textTransform: 'none', fontSize: '18px', fontFamily: 'Nunito'}}>
        About
    </Button>
    <Button variant="text" color="primary" onClick={() => navigate('/photos')} style={{ marginRight: '20px', textTransform: 'none' , fontSize: '18px', fontFamily: 'Nunito'}}>
        Photos
    </Button>
    <Button variant="text" color="primary" onClick={() => navigate('/projects')} style={{ marginRight: '20px', textTransform: 'none', fontSize: '18px', fontFamily: 'Nunito' }}>
        Projects
    </Button>
    </div>

  );
}

export default Navigation;