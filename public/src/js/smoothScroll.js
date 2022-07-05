const navLinks = [...document.querySelectorAll("li a")];
const btnContact = document.getElementById("btn--contact");
const sections = [...document.querySelectorAll("section")];

let sectionsPosition;

function positionCalculation() {
  sectionsPosition = sections.map((section) => section.offsetTop);
}
positionCalculation();

// Liens du menu en haut à droite
navLinks.forEach((link) => link.addEventListener("click", addScrollSmooth));

// Bouton contact dans la première section
btnContact.addEventListener("click", () => {
  window.scrollTo({
    top: sectionsPosition[3],
    behavior: "smooth",
  });
});

function addScrollSmooth(e) {
  const linkIndex = navLinks.indexOf(e.target);
  window.scrollTo({
    top: sectionsPosition[linkIndex],
    behavior: "smooth",
  });
}

window.addEventListener("resize", positionCalculation);
