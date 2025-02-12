/* First Attempt - onclick is on the html page */
// function darkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//   }


/* Second Attempt - onclick is removed form the html page and added as an event (part of the script) */
/* Only run script after html is fully loaded */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button1");

    button.addEventListener("click", darkMode);
});

function darkMode() {
    document.body.classList.toggle("dark-mode");
}