/* Run script only after HTML is fully loaded */
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleDarkMode");

    if (toggleSwitch) {
        // Apply dark mode if toggle is already checked (for page refresh cases)
        if (toggleSwitch.checked) {
            document.body.classList.add("dark-mode");
        }

        // Toggle dark mode on checkbox change
        toggleSwitch.addEventListener("change", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Update footer year automatically
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});