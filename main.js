
/* Testimonial caruolsel slider swiper */
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidersPerView: 2,
        setWrapperSize: true
      }
    }
  })