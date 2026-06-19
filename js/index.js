const carousel = document.querySelector('.carousel-container');
const slide = document.querySelector('.carousel-slide');

function carouselMove(positive = true) {
  const slideWidth = slide.clientWidth < 200 ? slide.clientWidth * 3 : slide.clientWidth;
  carousel.scrollLeft = positive ? carousel.scrollLeft + slideWidth : carousel.scrollLeft - slideWidth;
}
