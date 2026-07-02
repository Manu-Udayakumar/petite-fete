/* js/map.js */

document.addEventListener('DOMContentLoaded', () => {
  initWorldMap();
});

const culinaryDestinations = {
  india: {
    country: "INDIA",
    title: "The Royal Spice Galleys",
    desc: "Experience deconstructed Banarasi chaat served in custom-styled kulhads, saffron-infused lamb biryanis, and golden saffron rabdi. Recreated with historical spices and modern culinary flair."
  },
  mexico: {
    country: "MEXICO",
    title: "Oaxacan Masa & Agave Gallery",
    desc: "Wood-fired artisanal tlayudas topped with structural avocado, dry-aged wagyu flank steak, and rare dark mole. Accompanied by premium wild agave mezcal pairings."
  },
  france: {
    country: "FRANCE",
    title: "Parisian Crêperie & Caviar Gallery",
    desc: "A luxury interpretation of Parisian street crêpes. Buckwheat galettes styled with Royal Oscietra caviar, hand-whipped crème fraîche, and organic chive blossoms."
  },
  japan: {
    country: "JAPAN",
    title: "The Ginza Yakitori & Robata",
    desc: "Skewers of bluefin tuna belly (otoro) glaze-brushed with vintage shoyu and truffle-infused honey, grilled live over binchotan white charcoal in front of the guests."
  },
  morocco: {
    country: "MOROCCO",
    title: "Marrakesh Medina Tagines",
    desc: "Slow-simmered confit duck leg tagines with caramelized figs, toasted almonds, and organic orange blossom couscous. Presented on artisan brass platters."
  },
  italy: {
    country: "ITALY",
    title: "Napoli Artisan Truffle Hearth",
    desc: "Neapolitan wood-fired pizzetta featuring organic buffalo mozzarella, wild forest mushrooms, fresh shavings of white Alba truffles, and gold leaf droplets."
  },
  thailand: {
    country: "THAILAND",
    title: "Bangkok Canal Seafood Robata",
    desc: "Lobster tail satay marinated in fresh lemongrass and galangal, flame-seared on bamboo skewers and served with micro-coriander and house roasted peanut emulsion."
  },
  spain: {
    country: "SPAIN",
    title: "San Sebastián Tapas & Crudos",
    desc: "Liquid nitrogen gazpacho spheres, 36-month Jamón Ibérico de Bellota sliced live from the leg, and red prawns from Palamós marinated in citrus oils."
  }
};

function initWorldMap() {
  const pins = document.querySelectorAll('.map-pin');
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
          cardCountry.textContent = data.country;
          cardTitle.textContent = data.title;
          cardDesc.textContent = data.desc;
          card.classList.add('visible');
        }, 150);
      }
    });
  });

  // Close card when clicking outside pins
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.map-pin') && !e.target.closest('#map-overlay-card')) {
      card.classList.remove('visible');
      pins.forEach(p => p.classList.remove('active'));
    }
  });

  // Activate India by default as a teaser after loading
  setTimeout(() => {
    const defaultPin = document.querySelector('.map-pin[data-destination="india"]');
    if (defaultPin) defaultPin.dispatchEvent(new Event('click'));
  }, 1800);
}
