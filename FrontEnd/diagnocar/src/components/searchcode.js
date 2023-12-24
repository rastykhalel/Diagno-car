import React from 'react';
import '../assets/css/font.css';
import MiniDrawer from './smallcomp/search';



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
  



function Searchcode() {
  return (


    <div>
    <div style={{ marginTop: '40px' }} id='#home'>
       <MiniDrawer username={usernameProfile} />
      </div>
    </div>
  );}

  export default Searchcode;
