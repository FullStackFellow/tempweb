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

// Prevent scroll locking for nested menus
function enableNestedScrolling(container) {
    container.addEventListener("touchstart", (e) => {
        const startY = e.touches[0].clientY;

        container.addEventListener("touchmove", (moveEvent) => {
            const currentY = moveEvent.touches[0].clientY;
            const deltaY = currentY - startY;

            if (
                (container.scrollTop === 0 && deltaY > 0) || // Scrolling up at the top
                (container.scrollHeight - container.scrollTop <= container.clientHeight && deltaY < 0) // Scrolling down at the bottom
            ) {
                moveEvent.preventDefault(); // Prevent lock
            }
        });
    });
}

// Call enableNestedScrolling for each dropdown menu
document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
    enableNestedScrolling(dropdown);
});
