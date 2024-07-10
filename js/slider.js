const galeria = document.getElementById('sliderContainer');


let sliderContainer = document.createElement('div');
sliderContainer.className = "slider-container";
galeria.append(sliderContainer);
let slider = document.createElement('div');
slider.className = "slider";
sliderContainer.append(slider);
slider.innerHTML = `
    <img src="./assets/img/01.jpg">
    <img src="./assets/img/02.jpg">
    <img src="./assets/img/03.jpg">
    <img src="./assets/img/04.jpg">
    <img src="./assets/img/05.jpg">
    <img src="./assets/img/06.jpg">
    <img src="./assets/img/07.jpg">
    <img src="./assets/img/08.jpg">
`;

let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
const sliderI = document.querySelector('.slider');


function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}


function updateSlider() {
    const offset = currentIndex * slides[0].clientWidth * -1;
    sliderI.style.transform = `translateX(${offset}px)`;
}


setInterval(nextSlide, 3000);


















