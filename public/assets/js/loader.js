const loader = document.querySelector('.loader');

const fadeEffect = setInterval(() => {
    // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
    if (!loader.style.opacity) {
        loader.style.opacity = 1;
    }
    if (loader.style.opacity > 0) {
        loader.style.opacity -= 0.1;
    } else {
        clearInterval(fadeEffect);
    }
}, 200);

document.addEventListener('DOMContentLoaded', fadeEffect);

