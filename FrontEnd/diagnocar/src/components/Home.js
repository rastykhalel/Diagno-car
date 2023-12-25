import React from 'react';
import '../assets/css/font.css';
import PrimarySearchAppBar from './smallcomp/appbar';
import Dashbord from './smallcomp/dashbord';
import BasicSpeedDial from '../components/smallcomp/BasicSpeedDial';

// Get the value of the "username" cookie
function getCookieValue(cookieName) {
  const name = cookieName + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return '';
}


function getQueryParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);

}
var usernameProfile = getCookieValue('username') || getQueryParam('username') ;



function Home() {
  return (
    
  

    <div>
      <div style={{ position: 'fixed', top: '0px', width: '100%', zIndex: '20', }}>

        <PrimarySearchAppBar parameterName={usernameProfile} />
      </div>
      <div style={{ marginTop: '40px' }} id='#home'>
        <Dashbord />
      </div>


      <div style={{ position: 'fixed', bottom: '16px', right: '16px' }}>
        <BasicSpeedDial />
      </div>
    </div>
  );
}

export default Home;
