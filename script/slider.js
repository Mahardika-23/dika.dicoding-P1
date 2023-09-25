// slider pertama
let currentSlider1 = 1;
const right1 = document.querySelector("#right-1");
const left1 = document.querySelector("#left-1");

function sliderShow1(slide) {
    let slides = document.getElementsByClassName("slider-content1")
    if (slide > slides.length) {
        currentSlider1 = 1;  
    }
    if (slide < 1) {
        currentSlider1 = slides.length
    }
    for (let i= 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlider1-1].style.display = "block";
} 

right1.addEventListener('click', function (event) {
    currentSlider1 += 1;
    sliderShow1(currentSlider1);
});

left1.addEventListener('click', function (event) {
    currentSlider1 -= 1;
    sliderShow1(currentSlider1);
});

sliderShow1(currentSlider1);

// slider kedua
let currentSlider2 = 1;
const right2 = document.querySelector("#right-2");
const left2 = document.querySelector("#left-2");

function sliderShow2(slide) {
    let slides = document.getElementsByClassName("slider-content2")
    if (slide > slides.length) {
        currentSlider2 = 1;  
    }
    if (slide < 1) {
        currentSlider2 = slides.length
    }
    for (let i= 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlider2-1].style.display = "block";
} 

right2.addEventListener('click', function (event) {
    currentSlider2 += 1;
    sliderShow2(currentSlider2);
});

left2.addEventListener('click', function (event) {
    currentSlider2 -= 1;
    sliderShow2(currentSlider2);
});

sliderShow2(currentSlider2);

// slider ketiga

let currentSlider3 = 1;
const right3 = document.querySelector("#right-3");
const left3 = document.querySelector("#left-3");

function sliderShow3(slide) {
    let slides = document.getElementsByClassName("slider-content3")
    if (slide > slides.length) {
        currentSlider3 = 1;  
    }
    if (slide < 1) {
        currentSlider3 = slides.length
    }
    for (let i= 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlider3-1].style.display = "block";
} 

right3.addEventListener('click', function (event) {
    currentSlider3 += 1;
    sliderShow3(currentSlider3);
});

left3.addEventListener('click', function (event) {
    currentSlider3 -= 1;
    sliderShow3(currentSlider3);
});

sliderShow3(currentSlider3);