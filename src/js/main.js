import autoComplete from "@tarekraafat/autocomplete.js";
import { easepick, TimePlugin } from '@easepick/bundle';

// import AirDatepicker from 'air-datepicker';
// import 'air-datepicker/air-datepicker.css';

// import mobileNav from './modules/mobile-nav.js';
import locationList from './modules/locationList.js';

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

// new AirDatepicker('#calendar', {
//   selectedDates: [new Date()],
//   isMobile: true,
//   autoClose: true,
// });

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
