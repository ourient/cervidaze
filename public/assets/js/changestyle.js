function setStyle(style) {
    document.querySelector("link[type='text/css']").setAttribute("href", style + ".css");
    localStorage.setItem("style", style);
}