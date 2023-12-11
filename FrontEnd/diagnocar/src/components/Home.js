import React from 'react';
import '../assets/css/font.css';
import PrimarySearchAppBar from './smallcomp/appbar'; 
import BasicSpeedDial from '../components/smallcomp/BasicSpeedDial'; // Correct path to the BasicSpeedDial component





function Home() {
  return (
    <div>
    
      <PrimarySearchAppBar />
    
      
      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
      <BasicSpeedDial />
      </div>
    </div>
  );
}

export default Home;
