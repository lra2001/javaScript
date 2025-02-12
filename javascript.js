/* Only run script to activate dark mode after html is fully loaded */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button1");

    button.addEventListener("click", darkMode);
});

function darkMode() {
    document.body.classList.toggle("dark-mode");
}