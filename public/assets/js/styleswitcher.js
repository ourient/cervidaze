function changeStyle(style) {
    if (style == null)
        style = localStorage.getItem("style");
    if (style == null)
        style = "/assets/css/light";
    document.querySelector("link[type='text/css']").setAttribute("href", style + ".css");
    localStorage.setItem("style", style);
}

changeStyle();