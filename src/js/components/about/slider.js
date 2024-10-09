import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

export const useAboutSlider = () => {
  new Swiper('.about__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTeamSlider = () => {
  new Swiper('.team__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};
