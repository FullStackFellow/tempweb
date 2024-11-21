// script.js

// Function to move the image
function moveImageOnScroll() {
    const scrollPosition = window.pageYOffset; // Get the current scroll position
    const image = document.getElementById('movingImage'); // Get the moving image element
    
    // Set the 'right' position of the image based on scroll position
    image.style.right = scrollPosition * 0.5 + 'px'; // Adjust the multiplier for desired speed
}

// Add event listener to trigger the function on scroll
window.addEventListener('scroll', moveImageOnScroll);




function toggleNav() {
    const overlayWrapper = document.getElementById("navOverlayWrapper");
    if (overlayWrapper.style.display === "block") {
        overlayWrapper.style.display = "none";
    } else {
        overlayWrapper.style.display = "block";
    }
}

function toggleDropdown(id) {
    const dropdownMenu = document.getElementById(id);
    dropdownMenu.classList.toggle("show"); // Add or remove the 'show' class
}



