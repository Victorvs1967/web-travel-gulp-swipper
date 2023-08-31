import autoComplete from "@tarekraafat/autocomplete.js";

import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

import mobileNav from './modules/mobile-nav.js';
import locationList from './modules/locationList.js';

new AirDatepicker('#calendar', {
  selectedDates: [new Date()],
  isMobile: true,
  autoClose: true,
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
