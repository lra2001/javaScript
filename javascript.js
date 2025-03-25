/* Run script only after HTML is fully loaded */
document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleDarkMode");

    /* Use local storage to ensure user selection remains on Dark/Light Mode */
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener("change", function () {
            if (toggleSwitch.checked) {
                document.body.classList.add("dark-mode");
                localStorage.setItem("darkMode", "enabled");
            } else {
                document.body.classList.remove("dark-mode");
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }

    /* Check if slideshow exists before running slideshow script */

    let slides = document.getElementsByClassName("mySlides");
    if (slides.length > 0) {
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            slides[slideIndex - 1].style.display = "block";
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }
    }

    // Update footer year automatically
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});