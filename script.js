// Select all sections that should animate when they enter the viewport
const sections = document.querySelectorAll(".section");
<script src="script.js"></script>


// Listen for scroll events on the window
window.addEventListener("scroll", () => {

    // Loop through each section on the page
    sections.forEach(section => {

        // Get the distance from the top of the section to the viewport
        const position = section.getBoundingClientRect().top;

        // Define the point at which the animation should start
        const screenPosition = window.innerHeight / 1.2;

        // If the section is within the visible area, trigger the reveal animation
        if (position < screenPosition) {
            section.style.opacity = 1;               // Make the section visible
            section.style.transform = "translateY(0)"; // Reset the slide-up effect
        }
    });
});
