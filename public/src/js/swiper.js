let swiper;

window.onload = () => sliderUpdate();

window.addEventListener("resize", () => sliderUpdate());

const sliderUpdate = () => {
  // paramètre du slider pour le format mobile
  if (window.innerWidth <= 640) {
    swiper = new Swiper(".mySwiper", {
      // paramètre le nombre de slide par vue
      slidesPerView: 1,
      slidesPerGroup: 1,
      // paramètre l'espace entre chaque slide
      spaceBetween: 30,
      // revient à la slide du début quand on est arrivé à la dernière slide
      loop: true,
      loopFillGroupWithBlank: true,
      // permet de gérer la navigation du slider si au clique des éléments aved l'id swiper-button-next ou swiper-button-prev
      navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      },
    });
  }

  // paramètre du slider pour le format tablette
  if (window.innerWidth > 640 && window.innerWidth <= 1024) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      },
    });
  }

  // paramètre du slider pour le format ordinateur
  if (window.innerWidth > 1024) {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      },
    });
  }
};
