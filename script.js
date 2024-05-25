

const images = document.querySelectorAll('.slideshow img');
let currentImage = 0;

function showNextImage() {
    images[currentImage].style.transform = 'translateX(-100%)';
    currentImage = (currentImage + 1) % images.length;
    images[currentImage].style.transform = 'translateX(0)';
}


setInterval(showNextImage, 2000);
