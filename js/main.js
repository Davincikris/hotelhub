const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
    });
}

const checkIn = document.querySelector("#checkin");
const checkOut = document.querySelector("#checkout");

if (checkIn && checkOut) {
    const today = new Date().toISOString().split("T")[0];
    checkIn.min = today;
    checkOut.min = today;

    checkIn.addEventListener("change", () => {
        checkOut.min = checkIn.value;
        if (checkOut.value && checkOut.value <= checkIn.value) {
            checkOut.value = "";
        }
    });
}