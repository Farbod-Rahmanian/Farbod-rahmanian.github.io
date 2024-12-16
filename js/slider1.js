const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider1');
const slideWidth = slides[0].clientWidth + 16;
let currentIndex = 1;

sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth - (slider.clientWidth - slideWidth) / 2}px)`;
updateActiveSlide();

function nextSlide() {
    currentIndex++;
    sliderTrack.style.transition = 'transform 0.5s ease-in-out';
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth - (slider.clientWidth - slideWidth) / 2}px)`;

    sliderTrack.addEventListener('transitionend', () => {
        if (currentIndex === slides.length - 1) {
            currentIndex = 1;
            sliderTrack.style.transition = 'none';
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth - (slider.clientWidth - slideWidth) / 2}px)`;
        }
        updateActiveSlide();
    }, { once: true });
}

function updateActiveSlide() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });
}
setInterval(nextSlide, 3000);
