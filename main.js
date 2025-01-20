// script.js

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



