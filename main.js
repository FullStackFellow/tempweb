// Toggle navigation overlay
function toggleNav() {
    const overlayWrapper = document.getElementById("navOverlayWrapper");
    if (overlayWrapper.style.display === "block") {
        overlayWrapper.style.display = "none"; // Hide menu
    } else {
        overlayWrapper.style.display = "block"; // Show menu
    }
}

// Toggle dropdown menu
function toggleDropdown(id) {
    const dropdownMenu = document.getElementById(id);
    dropdownMenu.classList.toggle("show"); // Add or remove the 'show' class
}
