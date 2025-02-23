/* Only run script to activate dark mode after html is fully loaded */
document.addEventListener("DOMContentLoaded", function () {
    // Dark mode button
    const button = document.querySelector(".button1");
    if (button) {
        button.addEventListener("click", darkMode);
    }

    // Update footer year automatically
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

/* Function to activate and deactivate dark mode */
function darkMode() {
    document.body.classList.toggle("dark-mode");
}