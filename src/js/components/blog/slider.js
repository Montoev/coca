import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useBlogSlider = () => {
  new Swiper('.blog-slider__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.articles__btn--prev',
      prevEl: '.articles__btn--next',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
      769: {
        spaceBetween: 32,
      },
    },
  });
};
