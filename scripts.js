/* Simple greeting message in the browser console */
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to my Interactive CV! Let me know what you think.");
});
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
document.addEventListener("DOMContentLoaded", showSlides);

let projectSlideIndex = 0;

function showProjectSlides() {
    const slides = document.getElementsByClassName("project-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active-slide"); // Hide all slides
    }
    projectSlideIndex++;
    if (projectSlideIndex > slides.length) { projectSlideIndex = 1; }
    slides[projectSlideIndex - 1].classList.add("active-slide"); // Show the current slide
    setTimeout(showProjectSlides, 8000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", showProjectSlides);