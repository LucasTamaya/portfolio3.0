const hamburgerMenu = document.getElementById("hamburgerMenu");
const crossIcon = document.getElementById("crossIcon");
const nav = document.querySelector("nav");

hamburgerMenu.addEventListener("click", openMenu);

crossIcon.addEventListener("click", closeMenu);

function openMenu() {
  nav.classList.add("enable");
}

function closeMenu() {
  nav.classList.remove("enable");
}
