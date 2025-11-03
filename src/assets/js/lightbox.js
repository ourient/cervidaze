const galleryImages = Array.from(document.querySelectorAll('.gallery img'));
const lightbox = document.createElement('div');
const lightboxImg = document.createElement('img');

lightbox.classList.add('lightbox');
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

function handleImage(img) {
    console.log("bweh")
    img.addEventListener('click', () => {
        console.log("bwehbweh")
        const imgSrc = img.getAttribute('src');
        lightboxImg.setAttribute('src', imgSrc);
        lightbox.style.display = 'block';
    });
    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
};

galleryImages.forEach(handleImage);