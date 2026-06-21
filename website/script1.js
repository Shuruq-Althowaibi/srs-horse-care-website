
//Gallery Script

let currentSlide = 0;

function startSlider() {
    let imageCount = document.querySelectorAll(".Gallery img");
    let images = document.querySelector(".Gallery ul");

    if (imageCount.length === 0) {
        imageCount = document.querySelectorAll(".Gallery img");
        images.style.transform = 'translateX(0px)';
        return;
    }

    images.style.transform = `translateX(-${currentSlide * 550}px)`;

    let dots = document.querySelectorAll(".Gallery .dot");
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");

    if (currentSlide === imageCount.length - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}

setInterval(() => {
    startSlider();
}, 3000);



