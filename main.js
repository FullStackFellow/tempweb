// Javascript file for functions of the main page

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

function showContainer() {
    var container = document.getElementById("infoContainer");
    container.style.display = "flex"; // Show the container
    setTimeout(() => {
        container.style.opacity = "1"; // Gradually fade in
        window.scrollBy({ top: 200, behavior: 'smooth' }); // Scroll down slightly
    }, 10);
    document.getElementById("logoContainer").style.display = "none"; // Hide the image
}