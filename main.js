// script.js

function toggleNav() {
    const overlayWrapper = document.getElementById("navOverlayWrapper");
    const body = document.body; // Get the body element

    if (overlayWrapper.style.display === "block") {
        overlayWrapper.style.display = "none";
        body.style.overflow = ""; // Restore default scrolling
    } else {
        overlayWrapper.style.display = "block";
        body.style.overflow = "hidden"; // Disable background scrolling
    }
}

function toggleDropdown(id) {
    const dropdownMenu = document.getElementById(id);
    dropdownMenu.classList.toggle("show"); // Add or remove the 'show' class
}

function enableNestedScrolling(container) {
    container.addEventListener("touchstart", (e) => {
        const startY = e.touches[0].clientY;

        container.addEventListener("touchmove", (moveEvent) => {
            const currentY = moveEvent.touches[0].clientY;
            const deltaY = currentY - startY;

            // Check if the scroll is at the top or bottom
            if (
                (container.scrollTop === 0 && deltaY > 0) || // At the top, scrolling up
                (container.scrollHeight - container.scrollTop <= container.clientHeight && deltaY < 0) // At the bottom, scrolling down
            ) {
                moveEvent.preventDefault(); // Prevent locking
            }
        });
    });
}

// Apply this to the dropdown menus
document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
    enableNestedScrolling(dropdown);
});
