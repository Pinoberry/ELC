const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");
const slide4 = document.querySelector(".slide4");

function cambiarColor(slide) {
    if (slide.style.backgroundColor === 'red') {
        slide.style.backgroundColor = ''; 
    } else {
        slide1.style.backgroundColor = ''; 
        slide2.style.backgroundColor = ''; 
        slide3.style.backgroundColor = '';
        slide4.style.backgroundColor = '';
        
        slide.style.backgroundColor = 'red'; 
    }
}

slide1.addEventListener('click', function() {
    cambiarColor(this);
});

slide2.addEventListener('click', function() {
    cambiarColor(this);
});

slide3.addEventListener('click', function() {
    cambiarColor(this);
});

slide4.addEventListener('click', function() {
    cambiarColor(this);
});

slide1.style.backgroundColor='red';

