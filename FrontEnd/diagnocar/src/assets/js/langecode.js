let langCode=lange();


function lange(){
    if(getLanguageFromCookie() === null){
        return 'ku';
    }else{
        return getLanguageFromCookie();
    }
}



function getLanguageFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'selectedLanguage') {
        return value;
      }
    }
    return null;
  }
  
// Declare langCode as a variable (not a constant)
function setLanguageCookie(lang) {
    document.cookie = `selectedLanguage=${lang}; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/`;
    langCode = lang;
}
var languageOptions = [
    { code: 'ku', label: 'زمانی کوردی' },
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Spanish' },
    // Add more language options as needed
  ];

function changeTo(data) {
    langCode = data;
    setLanguageCookie(data); // Update the langCode variable
}

function getLang() {
  return langCode; // Return the langCode variable
}


function getLangeoptions(){
  return languageOptions

}

export { changeTo, getLang,getLangeoptions}; // Export functions to be used in other files
