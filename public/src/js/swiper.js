const swiper = new Swiper(".mySwiper", {
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
  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 3200,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
