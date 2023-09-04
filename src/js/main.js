import autoComplete from "@tarekraafat/autocomplete.js";
import { easepick, TimePlugin } from '@easepick/bundle';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// import mobileNav from './modules/mobile-nav.js';
import locationList from './modules/locationList.js';

const swiper = new Swiper('.popular__slider', {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
});

const picker = new easepick.create({
  element: "#datepicker",
  css: [
    "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css",
  ],
  zIndex: 10,
  format: " DD/MM/YYYY, HH:mm",
  plugins: [
    TimePlugin
  ]
});

const autoCompleteJS = new autoComplete(
  {
    selector: '#autoComplete',
    placeHolder: "e.g Bali, Indonesia",
    data: {
      src: locationList,
      cache: true,
    },
    resultItem: {
      highlight: true
    },
    events: {
      input: {
        selection: event => autoCompleteJS.input.value = event.detail.selection.value,
      }
    }
  }
);

// mobileNav();