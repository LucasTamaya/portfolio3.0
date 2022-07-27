const hamburgerMenu = document.getElementById("hamburgerMenu");
const crossIcon = document.getElementById("crossIcon");
const html = document.querySelector("html");
const nav = document.querySelector("nav");
const navLinksSm = [...document.querySelectorAll("li a")];
const footerLegal = document.querySelector(".footer--legal");

hamburgerMenu.addEventListener("click", openMenu);

crossIcon.addEventListener("click", closeMenu);

navLinksSm.forEach((link) => link.addEventListener("click", closeMenu));

function openMenu() {
  nav.classList.add("enable");
  html.classList.add("scrollDisable");
  footerLegal.style.position = "initial";
}

function closeMenu() {
  nav.classList.remove("enable");
  html.classList.remove("scrollDisable");
  // le temps que le menu se referme avant de réapparaitre
  setTimeout(() => {
    footerLegal.style.position = "relative";
  }, 100);
}
