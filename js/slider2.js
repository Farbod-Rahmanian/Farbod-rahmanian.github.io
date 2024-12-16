const sliderTrack2 = document.querySelector('.loop-slider-track');
const loopSlides = document.querySelectorAll('.loop-slide');
const itemWidth = loopSlides[0].offsetWidth + 10;
let currentPosition = 0;
let animationSpeed = 1;
loopSlides.forEach((item) => {
    const clone = item.cloneNode(true);
    sliderTrack2.appendChild(clone);
});
function startLoopSlider() {
    currentPosition -= animationSpeed;
    sliderTrack2.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= loopSlides.length * itemWidth) {
        currentPosition = 0;
    }

    requestAnimationFrame(startLoopSlider);
}
startLoopSlider();

sliderTrack2.addEventListener('mouseenter', () => {
    animationSpeed = 0.2;
});

sliderTrack2.addEventListener('mouseleave', () => {
    animationSpeed = 1;
});
