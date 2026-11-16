const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Switch to light mode";
    } else {
        themeButton.textContent = "Switch to dark mode";
    }
});

const contactForm = document.querySelector(".contact-form");
const nameInput = document.getElementById("name");
const greeting = document.getElementById("greeting");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    greeting.textContent = "Hello, " + nameInput.value + "! Thanks for visiting my page.";
});
