function setStyle(style) {
    document.querySelector("link[type='text/css']").setAttribute("href", style + ".css");
    localStorage.setItem("style", style);
}


// get the current chosen style from local storage
// if local storage doesn't have a saved style, choose "light" as a default
const currentStyle = localStorage.getItem('style') || 'assets/css/light';

// set the chosen style
setStyle(currentStyle);