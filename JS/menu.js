const burger = document.getElementById("burgerToggle");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});