import React from 'react';
import '../assets/css/font.css';
import PrimarySearchAppBar from './smallcomp/appbar'; 
import Dashbord from './smallcomp/dashbord';
import BasicSpeedDial from '../components/smallcomp/BasicSpeedDial'; // Correct path to the BasicSpeedDial component
import { margin } from '@mui/system';





function Home() {
  return (
    <div>
    <div style={{ position: 'fixed', top: '0px' , width: '100%'}}>

      <PrimarySearchAppBar />
    </div>
<div style={{marginTop: '80px'}}>

      <Dashbord />
</div>
    
      
      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
      <BasicSpeedDial />
      </div>
    </div>
  );
}

export default Home;
