/* js/map.js */

document.addEventListener('DOMContentLoaded', () => {
  initIndiaMap();
});

const culinaryDestinations = {
  delhi: {
    region: "NORTHERN PLAINS",
    title: "Classic Delhi Tales",
    desc: "Assorted English vegetable tawa chaat tossed live, soufflé-textured Moonglets, and authentic street-style Aloo Tikki served with hot spiced Chole."
  },
  agra: {
    region: "TAJ CORRIDOR",
    title: "Flavors of Agra",
    desc: "Delicate suji pani-puris served with flavored botanical waters, Kesari Dahi Bhallas garnished with gold saffron strings, and paper-thin griddled chillas."
  },
  rajasthan: {
    region: "DESERT ROYALTY",
    title: "From the Land of Rajas",
    desc: "Deep-fried Ajmeri Kadhi Kachodi served with yogurt gravy, fermented Kanji Wada prepared in clay pots, and Paneer Laung Lata parcels cooked in silky gravy."
  },
  mumbai: {
    region: "WESTERN COASTLINE",
    title: "Mumbai Chowpatty",
    desc: "Butter-laden Pav Bhaji cooked live on large circular tawas, Vada Pav served with spicy red garlic dust, and crisp Sev Puris assembled instantly."
  },
  haridwar: {
    region: "SACRED FOOTHILLS",
    title: "The Holy City of Haridwar",
    desc: "Delicate whipped urad dal Dahi Gujiyas topped with sweet tamarind, and crispy griddled Aloo Tikki accompanied with slow-simmered Dum Aloo."
  },
  indore: {
    region: "HEART OF INDORE",
    title: "Smart City Indore",
    desc: "Indore's famous Bhutte Ki Khees slow-cooked in milk, savory Sabutdane Ki Chaat topped with salli, and crispy fried Garadu roots dusted with rare spices."
  },
  banaras: {
    region: "HOLY GANGES",
    title: "Banarasi Chatkara",
    desc: "Crispy Palak Patte Ki Chaat plated geometrically, mashed Tamatar Ki Chaat served in kulhads with hot ghee, and fresh milk-soaked Churaa Matar."
  },
  gujarat: {
    region: "SAURASHTRA PLAINS",
    title: "Flavors of Gujarat",
    desc: "Buttery Kutchi Dabeli topped with pomegranates, thin leaf-steamed Pankis, and fluffy Dhoklas garnished with mustard seed temper."
  },
  moradabad: {
    region: "BRASS HUB",
    title: "Moradabad Special",
    desc: "Slow-simmered Dal Moradabadi served hot, allowing guests to custom-tailor toppings (chopped ginger, chilies, cumin dust) at a hammered-copper counter."
  },
  kanpur: {
    region: "UPPER GANGETIC",
    title: "Nawabi Kanpur",
    desc: "Savory hand-pressed Safed Channe Ki Tikki patties and vertical towers of layered Garbad Chaat served with tall spoons in glassware."
  }
};

function initIndiaMap() {
  const pins = document.querySelectorAll('.india-map-pin');
  const card = document.getElementById('map-overlay-card');
  const cardCountry = document.getElementById('map-card-country');
  const cardTitle = document.getElementById('map-card-title');
  const cardDesc = document.getElementById('map-card-desc');

  if (!pins.length || !card) return;

  pins.forEach(pin => {
    pin.addEventListener('click', () => {
      // Toggle active states
      pins.forEach(p => p.classList.remove('active'));
      pin.classList.add('active');

      const destinationKey = pin.getAttribute('data-destination');
      const data = culinaryDestinations[destinationKey];

      if (data) {
        // Show and update details card
        card.classList.remove('visible');
        
        setTimeout(() => {
          cardCountry.textContent = data.region;
          cardTitle.textContent = data.title;
          cardDesc.textContent = data.desc;
          card.classList.add('visible');
        }, 150);
      }
    });
  });

  // Close card when clicking outside pins
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.india-map-pin') && !e.target.closest('#map-overlay-card')) {
      card.classList.remove('visible');
      pins.forEach(p => p.classList.remove('active'));
    }
  });

  // Activate Delhi by default as a teaser after loading
  setTimeout(() => {
    const defaultPin = document.querySelector('.india-map-pin[data-destination="delhi"]');
    if (defaultPin) defaultPin.dispatchEvent(new Event('click'));
  }, 1800);
}
