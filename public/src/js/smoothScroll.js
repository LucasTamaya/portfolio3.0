const navLinks = [...document.querySelectorAll("li a")];
const sections = [...document.querySelectorAll("section")];

let sectionsPosition;

function positionCalculation() {
  sectionsPosition = sections.map((section) => section.offsetTop);
}
positionCalculation();

navLinks.forEach((link) => link.addEventListener("click", addScrollSmooth));

function addScrollSmooth(e) {
  const linkIndex = navLinks.indexOf(e.target);
  window.scrollTo({
    top: sectionsPosition[linkIndex + 1],
    behavior: "smooth",
  });
}

window.addEventListener("resize", positionCalculation);
