import React from 'react';
import '../assets/css/font.css';
import PrimarySearchAppBar from './smallcomp/smallcompindashbord/appbar';
import Dashbord from './smallcomp/parts/web/dashbord';
import BasicSpeedDial from './smallcomp/smallcompindashbord/BasicSpeedDial';
import { themfromcockie } from '../assets/js/theme'
import { getCookieValue } from '../assets/js/userauth';


themfromcockie();
var usernameProfile = getCookieValue('username');



function Home(param) {
  const id = param.part;
  let componentToRender;

  switch (id) {
    case '1':
      componentToRender = <Dashbord />;
      break;
    case '2':
      componentToRender = '  ';
      break;
    default:
      componentToRender = <div className='text-5xl text-center'> <h1 style={{marginTop:'150px'}}>  Not Found back to <a href='/' className='link text-info' > home </a> </h1> </div>;
      break;
  }


  return (



    <div>
      <div style={{ position: 'fixed', top: '0px', width: '100%', zIndex: '20', }}>

        <PrimarySearchAppBar parameterName={usernameProfile} />
      </div>
      <div style={{ marginTop: '62px' }} >
        {componentToRender}
      </div>


      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <BasicSpeedDial />
      </div>
    </div>
  );
}

export default Home;
