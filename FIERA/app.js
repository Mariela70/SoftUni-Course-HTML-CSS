// Hero section
let slideIndex = 0;
showImage(slideIndex);

function showImage(n) {
    showSlide((slideIndex = n));
}

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

const showIngredientsBtn = document.getElementById("showIngredientsBtn");
const overlay = document.getElementById("overlay");
const closeIngredientsBtn = document.getElementById("closeIngredientsBtn");

showIngredientsBtn.addEventListener("click", () => {
    overlay.style.display = "block";
});

closeIngredientsBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

const buttons = document.querySelectorAll('.accordion button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});