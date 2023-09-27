document.getElementById("button").addEventListener("click", function () {
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let pet = document.forms['contact-form']['pet'].value;

if (!name) {
    document.getElementById("name-error").innerText = "Name cannot be blank!";
} else {
    document.getElementById("name-error").innerText = "";
}

if (!email) {
    document.getElementById("email-error").innerText = "Email cannot be blank!";
} else {
    document.getElementById("email-error").innerText = "";
}

if (!pet) {
    document.getElementById("pet-error").innerText = "Pets cannot be blank!"
} else {
    document.getElementById("pet-error").innerText = "";
}
});

const carouselSlides = document.querySelectorAll(".image");
let currentIndex = 0;
let interval = 2000;

function nextSlide() {
    carouselSlides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    carouselSlides[currentIndex].classList.add('active');
}

(function() {
    setInterval(nextSlide, interval);
})()