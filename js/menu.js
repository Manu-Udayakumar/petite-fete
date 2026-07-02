/* js/menu.js */

const menuDatabase = [
  // ==========================================
  // --- INDIAN STREET FOOD COLLECTIVE ---
  // ==========================================
  {
    id: 1,
    title: "Agra Ki Pani-Puri",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Deep fried crispy suji puri filled with potato served with two varieties of flavored water (Khatta- Meetha and Pudina)",
    price: "Signature Station",
    pairing: "Pudina Mojito infusion",
    details: "Presented in traditional clay pottery with flowing fountains of botanical water."
  },
  {
    id: 2,
    title: "Kesari Dahi Bhalla / Papdi Ki Chaat",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Lentil dumplings/ Short crust roundels served with chilled sweet curd topped with Tamarind & mint chutney, ginger juliennes & pomegranate seeds and garnished with Indian spices & saffron",
    price: "Signature Station",
    pairing: "Chilled Saffron Thandai",
    details: "Garnished live with golden saffron threads and pomegranate jewels."
  },
  {
    id: 3,
    title: "Thin Crust Chilla",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Gram flour pancake served with coriander & tamarind chutney",
    price: "Signature Station",
    pairing: "Spiced Masala Lassi",
    details: "Cooked thin and crispy on a polished iron griddle."
  },
  {
    id: 4,
    title: "Dry Fruit Dahi Makhana Chaat",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Fox nut and yogurt based chaat",
    price: "Signature Station",
    pairing: "Sweet Almond Milk",
    details: "A crunchy and light yogurt-based preparation utilizing premium quality roasted fox nuts."
  },
  {
    id: 5,
    title: "Moong Dal Chilla",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Soaked grinded Moong Dal pancake stuffed with Paneer & peas; served with coriander & tamarind chutney",
    price: "Signature Station",
    pairing: "Roasted Cumin Shrub",
    details: "Griddled live with home-churned white butter."
  },
  {
    id: 6,
    title: "Khasta Aloo Tikki",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Crispy Aloo Patty served with coriander & tamarind chutney",
    price: "Signature Station",
    pairing: "Earthy Ginger Brew",
    details: "Shallow fried to a golden crunch on heavy cast iron tawas."
  },
  {
    id: 7,
    title: "Dahi Pakodi",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Soft lentil dumplings soaked in curd, topped with chutney and jeera powder",
    price: "Signature Station",
    pairing: "Chilled Buttermilk",
    details: "An antique street specialty of Agra, served cold."
  },
  {
    id: 8,
    title: "Basket Chaat",
    category: "indian",
    origin: "From the Land of Rajas",
    desc: "Flour base small basket filled with boiled chana, potato, sweet & spicy chutney, topped with cued and chaat masala",
    price: "Signature Station",
    pairing: "Kesar Kulfi Shake",
    details: "A premium assortment of textures served in a crisp, edible basket."
  },
  {
    id: 9,
    title: "Ajmeri Kadhi Kachodi",
    category: "indian",
    origin: "From the Land of Rajas",
    desc: "Crispy Deep Fried Kachori, stuffed with masala and secret ingredients served with yellow gram flour & yogurt based curry cooked in authentic Indian Style",
    price: "Signature Station",
    pairing: "Earthy Smoked Chaas",
    details: "Served bubbling hot with rich Rajasthani kadhi."
  },
  {
    id: 10,
    title: "Kanji Wada",
    category: "indian",
    origin: "From the Land of Rajas",
    desc: "Traditional recipe from Rajasthan made from lentils soaked in a mildly spicy fermented mustard curry, topped with moong sprout beans",
    price: "Signature Station",
    pairing: "Fermented Mustard Water",
    details: "Prepared in traditional clay pots for perfect natural fermentation."
  },
  {
    id: 11,
    title: "Dahi Gujiya",
    category: "indian",
    origin: "The Holy City of Haridwar",
    desc: "Haridwar special chaat made of yogurt and gujiyas made of urad dal. Topped with: Tamarind & mint chutney, ginger juliennes & pomegranate seeds and garnished with Indian spices & saffron",
    price: "Signature Station",
    pairing: "Holy Ganga Mint Cooler",
    details: "Extremely delicate dumplings soaked in whipped creamy yogurt."
  },
  {
    id: 12,
    title: "Aloo Tikki with Dum Aloo",
    category: "indian",
    origin: "The Holy City of Haridwar",
    desc: "Crispy Aloo Patty served with Dum Aloo accompanied with chutney",
    price: "Signature Station",
    pairing: "Spiced Masala Soda",
    details: "A unique dual-potato delicacy served in leaf bowls."
  },
  {
    id: 13,
    title: "English Tawa Chaat",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Assorted English vegetables like broccoli, corn & peas with dry fruit like almond & cashews are tossed together in mild seasoning & finished with lime juice",
    price: "Signature Station",
    pairing: "Dry Chenin Blanc",
    details: "A modern, healthy take on street culinary theater."
  },
  {
    id: 14,
    title: "Aloo Tikki with Chole",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Crispy Aloo patty served with Chole accompanied with chutney",
    price: "Signature Station",
    pairing: "Classic Jaljeera",
    details: "Drizzled with hot Punjabi chole curry and sweet tamarind."
  },
  {
    id: 15,
    title: "Moong Dal Ladoo",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Fried Moong dal dumplings served with Mooli Lachha & mint chutney.",
    price: "Signature Station",
    pairing: "Sweet Lassi",
    details: "Served hot with shredded radish salad and spicy green chili paste."
  },
  {
    id: 16,
    title: "Jodhpuri Mirchi Pakoda",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Bhavnagri Mirch stuffed with mashed potatoes coated with gram flour and deep fried.",
    price: "Signature Station",
    pairing: "Hot Ginger Chai Shot",
    details: "Jodhpur's fiery green chilies fried to golden perfection."
  },
  {
    id: 17,
    title: "Matra Patila",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Overnight soaked & pressure cooked Safed Matar, further cooked with dry masala, topped with ginger, green chili & lemon",
    price: "Signature Station",
    pairing: "Tangy Kokum Soda",
    details: "Served directly from giant brass handis (patilas)."
  },
  {
    id: 18,
    title: "Moonglet",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Lentil paste whipped with onion, green chilly & cooked on hot plate",
    price: "Signature Station",
    pairing: "Cucumber Lemonade",
    details: "Whipped to an airy, soufflé-like light texture."
  },
  {
    id: 19,
    title: "Aloo, Shakarkandi, Matar Ki Chaat",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Diced Potato, Sweet Potato and peas tossed with Chaat masala & Tamarind chutney",
    price: "Signature Station",
    pairing: "Pomegranate Elixir",
    details: "Tossed inside a giant brass bowl with freshly ground spices."
  },
  {
    id: 20,
    title: "Fruit Kulia",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Summer Special chaat, made with cool & refreshing raw ingredients like cucumber, Pomegranate, watermelon, papaya etc",
    price: "Signature Station",
    pairing: "Cold Pressed Watermelon Juice",
    details: "Fruits are hollowed out and filled with black salt, lemon, and chickpeas."
  },
  {
    id: 21,
    title: "Shakarkandi Chuski",
    category: "indian",
    origin: "Panipat",
    desc: "Boiled sweet potato roundels shallow fried on tawa & served on stick like chuski with tamarind sweet & sour chutney topped with special masala",
    price: "Signature Station",
    pairing: "Tamarind Shrub",
    details: "Panipat Ram Lal Chowk style sweet potato served like an ice lolly."
  },
  {
    id: 22,
    title: "Dry Fruit Chaat",
    category: "indian",
    origin: "Panipat",
    desc: "Mouth-watering dry fruits with sweet potato & pomegranate mixed together with sweet chutney and masala",
    price: "Signature Station",
    pairing: "Spiced Apple Cider",
    details: "A luxurious and warm nut-heavy street delicacy."
  },
  {
    id: 23,
    title: "Palak Patte Ki Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Gram flour coated palak leaves served with sprouts, sev, chutneys and curd",
    price: "Signature Station",
    pairing: "Saffron Lassi shot",
    details: "Plated elegantly with drops of colorful herb infusions."
  },
  {
    id: 24,
    title: "Tamatar Ki Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Mixture of tomatoes, Aloo and Paneer cooked on tawa to a paste consistency topped with tangy sweet gravy",
    price: "Signature Station",
    pairing: "Earthy Kulhad Tea",
    details: "Served in handmade baked clay cups (kulhads) with a splash of hot ghee."
  },
  {
    id: 25,
    title: "Churaa Matar Ki Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Poha soaked in milk & green peas are tossed in aromatic spices along with lots of fresh coriander",
    price: "Signature Station",
    pairing: "Cardamom Infused Milk",
    details: "A classic Banaras winter morning specialty."
  },
  {
    id: 26,
    title: "Khasta Kachori served with Kala Chana",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Crispy short crust roundel filled with masala served with coriander & tamarind chutney",
    price: "Signature Station",
    pairing: "Spiced Mango Panna",
    details: "Served hot alongside a savory, dark kala chana gravy."
  },
  {
    id: 27,
    title: "Hot Papad Cone",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Crispy Papad Cones sprinkled with masala",
    price: "Signature Station",
    pairing: "Cold Premium Lager",
    details: "Hand-rolled warm, roasted mini papads filled with spicy toppings."
  },
  {
    id: 28,
    title: "Dahi Ka Chilla",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Yogurt based thin pancake in Indian spices",
    price: "Signature Station",
    pairing: "Herbal Mint Tea",
    details: "Drained yogurt batter griddled to a delicate, melt-in-mouth finish."
  },
  {
    id: 29,
    title: "Khajoor Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Stuffed date palms served with sprouts, sev, curd and chutney",
    price: "Signature Station",
    pairing: "Rosewater Spritz",
    details: "Bespoke molecular droplets of yogurt served over sweet dates."
  },
  {
    id: 30,
    title: "Bhutte Ki Khees",
    category: "indian",
    origin: "Smart City Indore",
    desc: "A close cousin of the polenta, the secret lies in the makkai ki dalia",
    price: "Signature Station",
    pairing: "Warm Ginger Chai",
    details: "Cooked live in heavy brass kadhais to release corn aromas."
  },
  {
    id: 31,
    title: "Sabutdane Ki Chaat",
    category: "indian",
    origin: "Smart City Indore",
    desc: "Savory Sago, Topped with Lime, Straw Potatoes / Salli, Peanuts and the Local Chaat Masala",
    price: "Signature Station",
    pairing: "Roasted Coriander Water",
    details: "An Indore Sarafa Bazaar specialty."
  },
  {
    id: 32,
    title: "Garadu Chaat",
    category: "indian",
    origin: "Smart City Indore",
    desc: "Shallow fried yam topped with Rare Indian spices",
    price: "Signature Station",
    pairing: "Tangy Lemon Fizz",
    details: "Indore's signature winter root chaat fried crisp."
  },
  {
    id: 33,
    title: "Pav Bhaji",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "It consists of a thick vegetable curry served with a soft Pav. Vegetables in the curry may include potatoes, onions, carrots, chilies, peas, bell peppers and tomatoes",
    price: "Signature Station",
    pairing: "Cutting Chai",
    details: "Prepared on a large iron flat grid with massive block of butter."
  },
  {
    id: 34,
    title: "Vada Pav",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle",
    price: "Signature Station",
    pairing: "Hot Fried Green Chili",
    details: "Served with spicy garlic red chutney and green herb chutney."
  },
  {
    id: 35,
    title: "Sev Puri",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Made of crispy papdi (flat puri) which is loaded with diced potatoes, chickpeas, onions and various types of chutneys including spicy mint, sweet-sour tamarind, chilli and garlic",
    price: "Signature Station",
    pairing: "Chilled Beer",
    details: "Assembled instantly on flat flour discs for immediate consumption."
  },
  {
    id: 36,
    title: "Bhel Puri",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Puffed rice mixed with sev and chaat flavours",
    price: "Signature Station",
    pairing: "Kokum Cooler",
    details: "Tossed light and dry, served in paper cones."
  },
  {
    id: 37,
    title: "Ragda Patty",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Shallow fried potato patty with chutney and sev",
    price: "Signature Station",
    pairing: "Sugarcane Mocktail",
    details: "Topped with warm, spiced yellow peas gravy."
  },
  {
    id: 38,
    title: "Safed Channe Ki Tikki",
    category: "indian",
    origin: "Nawabi Kanpur",
    desc: "Chickpea Patty served with coriander & tamarind chutney",
    price: "Signature Station",
    pairing: "Kanpur Special Soda",
    details: "Hand-pattied, fiber-rich chickpea patties seared slow."
  },
  {
    id: 39,
    title: "Garbad Chaat",
    category: "indian",
    origin: "Nawabi Kanpur",
    desc: "Also known as ‘Tower chaat’, Served in tall glass with tall spoon",
    price: "Signature Station",
    pairing: "Masala Lemonade",
    details: "An architectural vertical assembly of various chaat elements."
  },
  {
    id: 40,
    title: "Dabeli",
    category: "indian",
    origin: "Gujarat",
    desc: "Dabeli, kutchi dabeli or double roti is a popular snack food of India, originating in the Kutch or Kachchh region of Gujarat",
    price: "Signature Station",
    pairing: "Sweet Date Nectar",
    details: "Topped with fresh pomegranate kernels and roasted peanuts."
  },
  {
    id: 41,
    title: "Panki",
    category: "indian",
    origin: "Gujarat",
    desc: "Panki is made by cooking a batter between banana leaves",
    price: "Signature Station",
    pairing: "Chaach (Buttermilk)",
    details: "Steamed inside banana leaves to absorb aromatic chlorophyll."
  },
  {
    id: 42,
    title: "Dhokla",
    category: "indian",
    origin: "Gujarat",
    desc: "Soft and fluffy dhoklas, is a very simple and refreshing fusion chaat",
    price: "Signature Station",
    pairing: "Green Tea",
    details: "Served with a mustard seed temper and fresh curry leaves."
  },
  {
    id: 43,
    title: "Dal Moradabadi",
    category: "indian",
    origin: "Moradabad",
    desc: "The famous dal from moradabad, is a blend of moong dal that is seasoned as per your preference. Choice of Toppings: Chopped Tomatoes | Green Chili | Ginger Juliennes | Lemon Juice | Red Chili | Roasted Cumin Powder | Pink Salt | Freshly Chopped Coriander | Butter | Green Chutney",
    price: "Signature Station",
    pairing: "Crispy Kachori Crumbles",
    details: "Guests choose their toppings live from a hammered copper bar."
  },

  // ==========================================
  // --- TIMELESS TASTES OF INDIA ---
  // ==========================================
  {
    id: 44,
    title: "Tawa Chaap Tikka Masala",
    category: "timeless",
    origin: "Chargrilled Chaap & Co.",
    desc: "Accompanied with Roomali Roti, Mint Chutney, Lachha Pyaz",
    price: "Gourmet Platter",
    pairing: "Full Bodied Shiraz",
    details: "Cooked live on large circular tawas under charcoal smoke."
  },
  {
    id: 45,
    title: "Afghani Chaap Tikka Roll",
    category: "timeless",
    origin: "Chargrilled Chaap & Co.",
    desc: "Afghani cream marinaded soya chaap rolled in fresh flatbread",
    price: "Gourmet Platter",
    pairing: "Cardamom Cooler",
    details: "Skewered and baked in clay tandoors."
  },
  {
    id: 46,
    title: "Achari Chaap Tikka Roll",
    category: "timeless",
    origin: "Chargrilled Chaap & Co.",
    desc: "Tangy pickle-spiced soya chaap chunks wrapped with onions",
    price: "Gourmet Platter",
    pairing: "Chilled Lager",
    details: "Basted with mustard oil and pickling spices."
  },
  {
    id: 47,
    title: "Pudina Chaap Tikka Roll",
    category: "timeless",
    origin: "Chargrilled Chaap & Co.",
    desc: "Mint and herb marinated grilled soya chaap wrap",
    price: "Gourmet Platter",
    pairing: "Botanical Gin Tonic",
    details: "Finished with fresh mint dust and lime."
  },
  {
    id: 48,
    title: "Thatte Idli",
    category: "timeless",
    origin: "South Indian",
    desc: "Flat plate-sized steamed fluffy rice cakes",
    price: "Gourmet Platter",
    pairing: "Filter Coffee",
    details: "Served hot on banana leaves with pure ghee."
  },
  {
    id: 49,
    title: "Cigar Dosa",
    category: "timeless",
    origin: "South Indian",
    desc: "Accompanied with: Sambhar, Coconut Chutney, Tomato Chutney",
    price: "Gourmet Platter",
    pairing: "Fresh Coconut Water",
    details: "Rolled extremely thin and long, presenting a visual spectacle."
  },
  {
    id: 50,
    title: "Chatpati Chaap",
    category: "timeless",
    origin: "Chajju Ka Tawa",
    desc: "Soya chaap finished on tawa with chatpata Indian masala",
    price: "Gourmet Platter",
    pairing: "Masala Thums Up",
    details: "Griddled live on cast iron with a high flame."
  },
  {
    id: 51,
    title: "Mushroom Taka-Tak",
    category: "timeless",
    origin: "Chajju Ka Tawa",
    desc: "Mushroom finished on tawa with chatpata Indian masala. Served with: Roomali Roti, Lachha Pyaaz",
    price: "Gourmet Platter",
    pairing: "Tempranillo",
    details: "Spiced chopped mushrooms seared with iron spatulas producing taka-tak sound."
  },
  {
    id: 52,
    title: "Veg. Shahi Subz Galouti Wrap",
    category: "timeless",
    origin: "Awadhi Galouti Station",
    desc: "Seasoned vegetable mince rolled into soft kebabs and cooked to perfection",
    price: "Gourmet Platter",
    pairing: "Smoked Bourbon Cocktail",
    details: "Kebabs melt-in-the-mouth, cooked on an inverted dome griddle."
  },
  {
    id: 53,
    title: "Chukandar Akhrot Ke Kebab",
    category: "timeless",
    origin: "Awadhi Galouti Station",
    desc: "Pink combination of beetroot and walnut, seasoned and char grilled",
    price: "Gourmet Platter",
    pairing: "Pinot Noir",
    details: "Stunning crimson-pink kebabs with a crunchy walnut core."
  },
  {
    id: 54,
    title: "Subz Dal Ke Kebab",
    category: "timeless",
    origin: "Awadhi Galouti Station",
    desc: "Chef’s secret recipe. Served with: Ulte Tawe Ka Zafrani Parantha. Accomplimenst with: Green Chutney, Onion Lachaa",
    price: "Gourmet Platter",
    pairing: "Rosewater Spritzer",
    details: "Bespoke Awadhi royal recipe utilizing ancient grains."
  },
  {
    id: 55,
    title: "Bedmi Puri",
    category: "timeless",
    origin: "Chiman Lal Mathura",
    desc: "A puri dough comprising of soaked Urad dal, & other condiments; deep fried till golden brown. Served with: Aloo Ki Tarkari (A spicy, tangy Potato curry), Sitahal Ki Subzi (A sweet pumpkin vegetable). Accompaniments: Methi Ki Chutney, Achaar/Kachalu",
    price: "Gourmet Platter",
    pairing: "Chilled Sweet Lassi",
    details: "Mathura's heritage recipe cooked in pure desi ghee."
  },
  {
    id: 56,
    title: "Dhaba Dal",
    category: "timeless",
    origin: "Kesar Da Dhaba",
    desc: "Simmered cooked urad dal tempered with In-house masala",
    price: "Gourmet Platter",
    pairing: "Masala Chaas",
    details: "Slow-simmered in clay pots for 12 hours for a rich, smokey depth."
  },
  {
    id: 57,
    title: "Rasidey Rajmah",
    category: "timeless",
    origin: "Kesar Da Dhaba",
    desc: "Kidney beans cooked with Indian spices in Punjabi style",
    price: "Gourmet Platter",
    pairing: "Chilled Beer",
    details: "Served thick and rich over hot paranthas."
  },
  {
    id: 58,
    title: "Palak Paneer",
    category: "timeless",
    origin: "Kesar Da Dhaba",
    desc: "Cottage Cheese Cooked with Indian Spices in Spinach Gravy",
    price: "Gourmet Platter",
    pairing: "Sauvignon Blanc",
    details: "Creamy pureed spinach with pan-seared fresh paneer blocks."
  },
  {
    id: 59,
    title: "Baingan Bharta",
    category: "timeless",
    origin: "Kesar Da Dhaba",
    desc: "Soaked chickpeas cooked in spicy tangy tomato onion gravy",
    price: "Gourmet Platter",
    pairing: "Ginger Beer",
    details: "Punjabi dhaba style presentation. Served with: Lachha Paratha, Tandoori Kadak Roti, Pyazz Wali Missi Roti"
  },
  {
    id: 60,
    title: "Bharwaan Amritsari Kulcha",
    category: "timeless",
    origin: "Amritsari Kulcha",
    desc: "Baked leavened flat-bread with your choice of stuffing. Choice Of Stuffing: Paneer, Aloo, Pyaaz. Served With: Rasile Chole (Soaked chickpeas cooked in spicy tangy tomato onion gravy). Accompanied With: Imli Pyaz Ki Chutney (Tamarind and onion based chutney)",
    price: "Gourmet Platter",
    pairing: "Sweet Buttermilk",
    details: "Crushed by hand live with a splash of fresh butter."
  },
  {
    id: 61,
    title: "Rassey Missey Choley",
    category: "timeless",
    origin: "Nand Sadar Bazaar",
    desc: "Chana mala in special combination of authentic spices",
    price: "Gourmet Platter",
    pairing: "Spiced Soda",
    details: "The legendary Old Delhi chickpea recipe."
  },
  {
    id: 62,
    title: "Bhature",
    category: "timeless",
    origin: "Nand Sadar Bazaar",
    desc: "Fried puffed bread made from flour. Served with: Chutney & Achaar",
    price: "Gourmet Platter",
    pairing: "Cold Pressed Mango juice",
    details: "Stuffed with paneer and spices, puffed live in hot oil."
  },
  {
    id: 63,
    title: "Dal-E-Food Art",
    category: "timeless",
    origin: "Petite Kulcha Kulture",
    desc: "Black lentil soaked overnight; cooked in ginger, & simmered till perfection; finished & garnished with cream. Served with: Makhani Kulcha, Cheese Kulcha, Mushroom Kulcha",
    price: "Gourmet Platter",
    pairing: "Chardonnay",
    details: "House Girdhars' signature black dal recipe."
  },
  {
    id: 64,
    title: "Ram Babu Special Parantha",
    category: "timeless",
    origin: "Agra Ram Babu Special",
    desc: "Choice of Stuffing: Aloo, Ratlami Sev, Nimbu Masala, Chur Chur Papad. Served with: Aloo Ki Tarkari, Khatta Meetha Sitahal, Dahi. Accompanied by: Meethi Chutney, Sabziyon Ka Achaar",
    price: "Gourmet Platter",
    pairing: "Sweet Lassi",
    details: "Deep-fried paranthas made exactly as in the historic lanes of Agra."
  },
  {
    id: 65,
    title: "Paneer Laung Lata",
    category: "timeless",
    origin: "Ram Ram Sa Rajasthan",
    desc: "Cottage cheese stuffed parcels deep fried in silky gravy",
    price: "Gourmet Platter",
    pairing: "Viognier",
    details: "Stuffed paneer folded into small parcels and cooked in signature gravy."
  },
  {
    id: 66,
    title: "Matar Korma",
    category: "timeless",
    origin: "Ram Ram Sa Rajasthan",
    desc: "Garden fresh peas cooked in rich gravy with fox nuts and Indian spices",
    price: "Gourmet Platter",
    pairing: "Saffron Lassi",
    details: "Slow-simmered green peas in a rich cream gravy with makhanas."
  },
  {
    id: 67,
    title: "Rajasthani Kadhi",
    category: "timeless",
    origin: "Ram Ram Sa Rajasthan",
    desc: "Gram flour dumplings, simmered in a buttermilk gravy & and tempered with asafoetida cumin",
    price: "Gourmet Platter",
    pairing: "Smoked Buttermilk",
    details: "Traditional hot Kadhi with spices."
  },
  {
    id: 68,
    title: "Shahi Anardane Ke Gatte",
    category: "timeless",
    origin: "Ram Ram Sa Rajasthan",
    desc: "Kofta made with gram flour dough, stuffed with thyme-herbed cottage cheese, sultanas and pistachios with gravy by the full flavor of fenugreek seeds and dried leaves",
    price: "Gourmet Platter",
    pairing: "Dry White Wine",
    details: "A premium royal Rajasthani dish with pomegranate seeds."
  },
  {
    id: 69,
    title: "Papad Mangodi Ki Subzi",
    category: "timeless",
    origin: "Ram Ram Sa Rajasthan",
    desc: "Papad and Mangodi cooked in flavorful Rajasthani gravy with authentic spices. Relished with: Ker Sangri. Served with: Bikaneri Parantha, Bikaneri Flat Bread. Rice: Marwari Pulao. Accompaniments: Papad Churi, Hara Dhaniya Chutney, Fresh Aachar",
    price: "Gourmet Platter",
    pairing: "Traditional Araku Coffee",
    details: "A complete Rajasthani desert experience."
  },
  {
    id: 70,
    title: "Mushroom Pepper Roast",
    category: "timeless",
    origin: "Southern Spice Lab",
    desc: "Served with: Malabari Parotta",
    price: "Gourmet Platter",
    pairing: "Coconut Toddy Mocktail",
    details: "Dry black-pepper roasted mushrooms with flaky layered parotta."
  },
  {
    id: 71,
    title: "Paneer Polichattu",
    category: "timeless",
    origin: "Southern Spice Lab",
    desc: "Served with: Kothamilli Rice",
    price: "Gourmet Platter",
    pairing: "Cardamom Cold Brew",
    details: "Paneer wrapped in banana leaves with south Indian spices and grilled."
  },
  {
    id: 72,
    title: "Veg Moilee",
    category: "timeless",
    origin: "Southern Spice Lab",
    desc: "Served with: Mini Appam",
    price: "Gourmet Platter",
    pairing: "Lime and Ginger Cooler",
    details: "Mildly spiced coconut milk stew with seasonal vegetables."
  },

  // ==========================================
  // --- GLOBAL STREET FOOD ---
  // ==========================================
  {
    id: 73,
    title: "Artisanal Cheese & Nibbles (Burrata)",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Burrata topped with: Pesto, Cherry Tomato",
    price: "Grazing Table",
    pairing: "Pinot Grigio",
    details: "Presented on marble slab with premium herbs."
  },
  {
    id: 74,
    title: "Aged Cheddar Cheese Board",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Aged Cheddar served with: Herbed Crackers, Olives, Californian Grapes",
    price: "Grazing Table",
    pairing: "Cabernet Sauvignon",
    details: "Bespoke selection of sharp artisanal cheeses."
  },
  {
    id: 75,
    title: "Brie Cheese Board",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Brie served with: Garlic Sticks, Blueberry Compote",
    price: "Grazing Table",
    pairing: "Champagne / Prosecco",
    details: "Creamy French brie served with sweet compotes."
  },
  {
    id: 76,
    title: "Emmental Cheese Board",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Emmental served with: Kalmata Olives, Sourdough, Walnuts, Figs",
    price: "Grazing Table",
    pairing: "Dry Cider",
    details: "Classic Swiss cheese board assembly."
  },
  {
    id: 77,
    title: "Smoked Scarmoza Cheese Board",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Smoked Scarmoza served with: Smoked Honey | Apple Compote, Baguette, Almonds",
    price: "Grazing Table",
    pairing: "Bourbon / Oaky Chardonnay",
    details: "Intensely smokey cheese paired with sweet honey."
  },
  {
    id: 78,
    title: "Gouda Cheese Board",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Gouda served with: Apricots | Prunes, Foccacia, Cashew Nuts",
    price: "Grazing Table",
    pairing: "Amber Ale",
    details: "Nutty Dutch Gouda served with dried stone fruits."
  },
  {
    id: 79,
    title: "Caciocavallo Melting Cheese",
    category: "global",
    origin: "Cheese & Nibbles",
    desc: "Caciocavallo is sliced and served like any other cheese, accompanied by fruit sauces like quince preserves or fig sauce,or with onion jam. If aged, it can be grated to add flavor to sauces",
    price: "Grazing Table",
    pairing: "Italian Nebbiolo",
    details: "Hanged and melted over an open fire griddle live."
  },
  {
    id: 80,
    title: "Avo Pizza",
    category: "global",
    origin: "Guacamania",
    desc: "Crispy flatbread topped with fresh avocado and herbs",
    price: "Grazing Table",
    pairing: "Lime Margarita",
    details: "Fresh and green pizza alternative."
  },
  {
    id: 81,
    title: "Avo Mousse Bhel",
    category: "global",
    origin: "Guacamania",
    desc: "Light and airy avocado mousse tossed with crispies",
    price: "Grazing Table",
    pairing: "Citrus Tonic",
    details: "A theatrical modern take on street bhel."
  },
  {
    id: 82,
    title: "Fresh Guacamole with Nachos",
    category: "global",
    origin: "Guacamania",
    desc: "Savoring the rich, creamy symphony",
    price: "Grazing Table",
    pairing: "Tequila Shot / Lime Soda",
    details: "Smashed to order in large volcanic stone mortar."
  },
  {
    id: 83,
    title: "Gluten Free Pizzette",
    category: "global",
    origin: "Nutritious Nation",
    desc: "Cauliflower base topped with premium herbs and vegan cheese",
    price: "Grazing Table",
    pairing: "Organic Green Tea",
    details: "A healthy, guilt-free and gluten-free preparation."
  },
  {
    id: 84,
    title: "Spinach and Ricotta Zucchini Canneloni",
    category: "global",
    origin: "Nutritious Nation",
    desc: "Zucchini sheets rolled with fresh ricotta and spinach",
    price: "Grazing Table",
    pairing: "Vermentino",
    details: "Baked to perfection with house pomodoro."
  },
  {
    id: 85,
    title: "Sweet Potato and Lentil Patties with Tzatziki",
    category: "global",
    origin: "Nutritious Nation",
    desc: "Nutritious root vegetable and lentil cakes",
    price: "Grazing Table",
    pairing: "Lemon Water",
    details: "Served with refreshing, cucumber-heavy Greek tzatziki."
  },
  {
    id: 86,
    title: "Pumpkin, Silverbeet and Mushroom Bake",
    category: "global",
    origin: "Nutritious Nation",
    desc: "Layers of roasted pumpkin, earthy silverbeet, and button mushrooms",
    price: "Grazing Table",
    pairing: "Light Pinot Noir",
    details: "A warm, comforting baked vegan dish."
  },
  {
    id: 87,
    title: "Tofu and Peanut Quinoa Rice",
    category: "global",
    origin: "Nutritious Nation",
    desc: "High protein tofu tossed with crunchy peanuts and organic quinoa",
    price: "Grazing Table",
    pairing: "Kombucha",
    details: "Healthy Asian-inspired grains."
  },
  {
    id: 88,
    title: "Pumpkin Chilli Corn Carne",
    category: "global",
    origin: "Nutritious Nation",
    desc: "Guilt free gluten free pumpkin chili with corn",
    price: "Grazing Table",
    pairing: "Organic Beer",
    details: "Slow cooked root vegetables and legumes."
  },
  {
    id: 89,
    title: "Thai Curry Bhaji with Buttered Pao",
    category: "global",
    origin: "Fusion Touch",
    desc: "Assorted exotic vegetables in Thai curry, bhaji style served with buttered pao halves",
    price: "Grazing Table",
    pairing: "Off-dry Riesling",
    details: "Our iconic signature fusion creation combining Mumbai & Bangkok."
  },
  {
    id: 90,
    title: "Paper Pizza Dosa",
    category: "global",
    origin: "Fusion Touch",
    desc: "Served with Tomato & Coconut Chutney",
    price: "Grazing Table",
    pairing: "Fresh Coconut Water",
    details: "Extremely thin rice crepe with Italian pizza toppings."
  },
  {
    id: 91,
    title: "Shredded Potato Cake Chaat",
    category: "global",
    origin: "Fusion Touch",
    desc: "Stuffed with Tomato & corn Ragu",
    price: "Grazing Table",
    pairing: "Spiced Soda",
    details: "Potato cakes griddled and topped with Italian vegetable ragu."
  },
  {
    id: 92,
    title: "Lotus Stem Bhel",
    category: "global",
    origin: "Fusion Touch",
    desc: "Crispy lotus stems with mango, pineapple, peanuts tossed with sweet chilly & tomato chilli sauce",
    price: "Grazing Table",
    pairing: "Singha Beer",
    details: "Crispy roots tossed with fresh tropical fruits."
  },
  {
    id: 93,
    title: "Paneer Tikka Frankie",
    category: "global",
    origin: "Frankie Station",
    desc: "Tandoori paneer tikka rolled in soft roomali wrap",
    price: "Grazing Table",
    pairing: "Mint Cooler",
    details: "Rolled live with onions and lemon juice."
  },
  {
    id: 94,
    title: "Mix Veg & Cheese Frankie",
    category: "global",
    origin: "Frankie Station",
    desc: "Griddled vegetables and cheddar wrap. Accompanied with: Mint Chutney",
    price: "Grazing Table",
    pairing: "Masala Cola",
    details: "Popular street style flatbread wrap."
  },
  {
    id: 95,
    title: "Indian Spiced Potato Churros with Tandoori Mayo Dip",
    category: "global",
    origin: "Potato Churros",
    desc: "Crisp potato starch churros with local Indian tandoori spices",
    price: "Grazing Table",
    pairing: "Amber Ale",
    details: "Piped and fried live, served piping hot."
  },
  {
    id: 96,
    title: "Peri Peri Spiced Potato Churros with Spicy Quesso Dip",
    category: "global",
    origin: "Potato Churros",
    desc: "Fiery African peri-peri spiced potato churros",
    price: "Grazing Table",
    pairing: "Mexican Pale Lager",
    details: "Served with a warm, spicy liquid cheese dip."
  },
  {
    id: 97,
    title: "Cajuan Spiced Potato Churros with Garlic Toon",
    category: "global",
    origin: "Potato Churros",
    desc: "Louisiana Cajun-spiced potato churros",
    price: "Grazing Table",
    pairing: "Cold Brew Tonic",
    details: "Served with authentic Lebanese garlic cream (toum/toon)."
  },
  {
    id: 98,
    title: "Falafel Wrap",
    category: "global",
    origin: "Wrap It Up",
    desc: "Crispy chickpea balls wrapped with tahini and pickles",
    price: "Grazing Table",
    pairing: "Mint Lemonade",
    details: "Middle Eastern street wrap."
  },
  {
    id: 99,
    title: "Tex-Mex Wrap",
    category: "global",
    origin: "Wrap It Up",
    desc: "Spicy refried beans, avocado, and rice wrap",
    price: "Grazing Table",
    pairing: "Paloma Mocktail",
    details: "Wrapped inside a large soft flour tortilla."
  },
  {
    id: 100,
    title: "Grilled Vegetable in Pesto and Parmesan Wrap",
    category: "global",
    origin: "Wrap It Up",
    desc: "Mediterranean charred vegetables in rich basil pesto",
    price: "Grazing Table",
    pairing: "Sauvignon Blanc",
    details: "Basted with extra virgin olive oil."
  },
  {
    id: 101,
    title: "Mushroom Chettinad Wrap",
    category: "global",
    origin: "Wrap It Up",
    desc: "Spicy Chettinad roasted mushrooms inside soft parotta wrap",
    price: "Grazing Table",
    pairing: "Shiraz",
    details: "Fiery South Indian spices wrapped elegantly."
  },
  {
    id: 102,
    title: "Veg Seekh Gilafi Wrap",
    category: "global",
    origin: "Wrap It Up",
    desc: "Vegetable seekh kebab with bell pepper casing in soft flatbread",
    price: "Grazing Table",
    pairing: "Jaljeera Fizz",
    details: "Clay oven roasted skewered kebab roll."
  },
  {
    id: 103,
    title: "Atishi Paneer Tikka Wrap",
    category: "global",
    origin: "Wrap It Up",
    desc: "Spicy, red-chili marinated cottage cheese tikka wrap",
    price: "Grazing Table",
    pairing: "Lager Beer",
    details: "Tossed with capsicum and spicy onion ring salad."
  },
  {
    id: 104,
    title: "Corn & Pepper Tart",
    category: "global",
    origin: "Fusion Tart Station",
    desc: "Sweet corn and roasted bell peppers in a savory shortcrust pastry shell",
    price: "Grazing Table",
    pairing: "Chardonnay",
    details: "Mini tarts baked fresh live."
  },
  {
    id: 105,
    title: "Exotic Vegetable Tart",
    category: "global",
    origin: "Fusion Tart Station",
    desc: "Mediterranean zucchini, olives, and feta in pastry cup",
    price: "Grazing Table",
    pairing: "Rosé Wine",
    details: "Finished with micro-herbs."
  },
  {
    id: 106,
    title: "Sichuan Tart",
    category: "global",
    origin: "Fusion Tart Station",
    desc: "Spicy Sichuan vegetables and tofu cubes in crisp tart shell",
    price: "Grazing Table",
    pairing: "Gewürztraminer",
    details: "A hot, fiery fusion savory tart."
  },
  {
    id: 107,
    title: "Green Pea and Cheese Tart",
    category: "global",
    origin: "Fusion Tart Station",
    desc: "Creamy green peas puree topped with young parmesan",
    price: "Grazing Table",
    pairing: "Prosecco",
    details: "Sophisticated savory grazing pastry."
  },
  {
    id: 108,
    title: "Mushroom Masala Pita",
    category: "global",
    origin: "Fusion Pita Station",
    desc: "Sautéed mushrooms in Indian masala",
    price: "Grazing Table",
    pairing: "Syrah",
    details: "Served in pocket pita breads."
  },
  {
    id: 109,
    title: "Falafel Pita",
    category: "global",
    origin: "Fusion Pita Station",
    desc: "Mixture of ground chick peas, broad beans and spices; filled in mini pita",
    price: "Grazing Table",
    pairing: "Hummus Dip",
    details: "Served with tahini sauce inside warm pita pocket."
  },
  {
    id: 110,
    title: "Stir Fried Exotic Veggies Pita",
    category: "global",
    origin: "Fusion Pita Station",
    desc: "Exotic vegetables sit fried in Indian masala. Accompanied with: Babaganush, Beetroot Hummus, Muhammarra, Garlic Aioli, Tahini & Hare Dhaniye Ki Chutney",
    price: "Grazing Table",
    pairing: "Dry White Wine",
    details: "A massive, colorful Mediterranean-Indian fusion grazing station."
  },
  {
    id: 111,
    title: "Fusion Taco Tales",
    category: "global",
    origin: "La Taquería",
    desc: "Choice of Filling: Paneer Tikka Masala, Spicy Grilled Vegetables, Refried Beans. Choice of Salsa: Classic Tomato, Smoked Tomato, Guacamole, Pineapple. Choice of Toppings: Sour Cream, Aged Cheddar, Cream Cheese",
    price: "Grazing Table",
    pairing: "Mexican Beer / Mezcal",
    details: "Assembled live to order on soft flour or corn tortillas."
  },
  {
    id: 112,
    title: "Fusion Quesadilla",
    category: "global",
    origin: "La Taquería",
    desc: "Choice of Filling: Corn & Cheese, Fajita Veggies, Mexican Cottage Cheese. Choice of Salsa: Classic Tomato, Smoked Tomato, Guacamole, Pineapple. Choice of Toppings: Sour Cream, Aged Cheddar, Cream Cheese",
    price: "Grazing Table",
    pairing: "Corona with Lime",
    details: "Toasted live on hot griddles until cheese melts."
  },
  {
    id: 113,
    title: "Mushroom & Parsley Dumplings",
    category: "global",
    origin: "Thailand Dumplings",
    desc: "Minced & seasoned mushroom, chilies & garlic",
    price: "Grazing Table",
    pairing: "Warm Sake",
    details: "Thailand Dramatic Dumplings: Dim-sums prepared from refined flour dough, stuffed & steamed live."
  },
  {
    id: 114,
    title: "Cantonese Vegetable Dumplings",
    category: "global",
    origin: "Thailand Dumplings",
    desc: "Beans, water chestnut, baby corn & carrot",
    price: "Grazing Table",
    pairing: "Jasmine Tea",
    details: "Steamed inside bamboo boxes."
  },
  {
    id: 115,
    title: "Hot 'N' Sour Jade Dumplings",
    category: "global",
    origin: "Thailand Dumplings",
    desc: "Snow peas, beans, bok choy, broccoli, other greens & hot n sour sauce. Accompanied with: Black Bean / Chilli Oyster / Ginger Soya / Chili Jaggery / Hot Basil / Homemade Sauce",
    price: "Grazing Table",
    pairing: "Plum Wine",
    details: "Stunning translucent green dumplings."
  },
  {
    id: 116,
    title: "Japanese Pickle Roll",
    category: "global",
    origin: "Japanese Sushi",
    desc: "Pickle Cucumber, Taakuwan, Japanese mayo & Rayu",
    price: "Grazing Table",
    pairing: "Chilled Sake",
    details: "Traditional hosomaki rolled on bamboo mats."
  },
  {
    id: 117,
    title: "Avocado Caterpillar Roll",
    category: "global",
    origin: "Japanese Sushi",
    desc: "Avocado, Cucumber",
    price: "Grazing Table",
    pairing: "Green Tea",
    details: "Premium uramaki topped with thin avocado sheets."
  },
  {
    id: 118,
    title: "Tempura Fried Vegetable Roll",
    category: "global",
    origin: "Japanese Sushi",
    desc: "Tanuki, Spicy Mayo",
    price: "Grazing Table",
    pairing: "Sapporo Beer",
    details: "Crispy fried vegetable centers."
  },
  {
    id: 119,
    title: "Spicy Shitake Roll",
    category: "global",
    origin: "Japanese Sushi",
    desc: "Siracha, Tanuki. Served with: Soy Sauce, Wasabi, Gari",
    price: "Grazing Table",
    pairing: "Whisky Highball",
    details: "Topped with tempura crumbs and hot sriracha."
  },
  {
    id: 120,
    title: "Chilli Garlic Mushroom and Chives Stuffed Bao",
    category: "global",
    origin: "Baozi",
    desc: "Soft steamed bun stuffed with seasoned mushrooms",
    price: "Grazing Table",
    pairing: "Oolong Tea",
    details: "Baozi Station: Fluffy steamed Asian buns."
  },
  {
    id: 121,
    title: "Asian BBQ Soya Keema Stuffed Bao",
    category: "global",
    origin: "Baozi",
    desc: "Steamed bun with smoky BBQ soya mince filling",
    price: "Grazing Table",
    pairing: "Lager Beer",
    details: "Glazed with sweet soy sauce."
  },
  {
    id: 122,
    title: "4 Season Veg Bao",
    category: "global",
    origin: "Baozi",
    desc: "Buns filled with seasonal chopped Asian greens. Dips as per Chef: Chilli Garlic Soy Sauce, Scallion Dip, Roasted Yellow Pepper Sauce",
    price: "Grazing Table",
    pairing: "Jasmine Green Tea",
    details: "An assortment of colorful buns."
  },
  {
    id: 123,
    title: "Teppanyaki Experiential Display",
    category: "global",
    origin: "Teppanyaki",
    desc: "Teppanyaki, also known as hibachi, is a style of Japanese cooking that involves the use of an iron griddle. Choose from a lavish display of ingredients: Snow Peas, Broccoli, Baby Corn, Napa Cabbage, Corn Kernels, Shiitake, Button Mushrooms, Carrots",
    price: "Grazing Table",
    pairing: "Hot Sake shot",
    details: "Cooked live with high-skill knife work and smoke shows."
  },
  {
    id: 124,
    title: "Mix Mushroom Cheung Fung",
    category: "global",
    origin: "Cheung Fung",
    desc: "Mix Mushroom | Teriyaki Sauce",
    price: "Grazing Table",
    pairing: "Pinot Noir",
    details: "Silky steamed rice noodle rolls poured with sweet soy."
  },
  {
    id: 125,
    title: "Spinach and Sesame Cheung Fun",
    category: "global",
    origin: "Cheung Fung",
    desc: "Steamed rice roll filled with blanched spinach and toasted sesame seeds",
    price: "Grazing Table",
    pairing: "Sake",
    details: "A delicate, transparent rice noodle specialty."
  },
  {
    id: 126,
    title: "Pickled Vegetable Cheung Fun",
    category: "global",
    origin: "Cheung Fung",
    desc: "Steamed rice roll stuffed with crunchy pickled greens",
    price: "Grazing Table",
    pairing: "Cold Green Tea",
    details: "Fascinating textures with sweet and sour notes."
  },
  {
    id: 127,
    title: "Himalayan Salt Block Station",
    category: "global",
    origin: "Himalayan Salt Station",
    desc: "Cottage Cheese, Mushroom, Avocado, Broccoli, Asparagus, Sweet Potato. Spiced Rubs: Pomodoro Sauce, Truffle Crema, Black Pepper, Brown Butter Sauce",
    price: "Grazing Table",
    pairing: "Dry Chardonnay",
    details: "Ingredients are seared directly on blocks of pink Himalayan salt."
  },
  {
    id: 128,
    title: "Interactive Hotpot Station",
    category: "global",
    origin: "Hotpot",
    desc: "Soup Base: Spicy Sichuan Broth. Sauce: Sesame | Coriander Chilli | Soy Ginger. Dippers: Enoki Mushroom | Button Mushroom | Black Fungus | Broccoli | Carrot | Pokchoy | Tofu | Sliced Potato | Cabbage | Glass Noodles | Udon Noodles",
    price: "Grazing Table",
    pairing: "Chinese Beer",
    details: "Individual boiling broths at the table for guests to dip and cook live."
  },
  {
    id: 129,
    title: "Yellow Curry Noodles",
    category: "global",
    origin: "Sizzling Wok",
    desc: "Tofu | Spinach | Oriental Yellow Curry | Scallion and Burnt Garlic Noodles",
    price: "Grazing Table",
    pairing: "Tsingtao Beer",
    details: "Sizzling Wok: Stir fried to high temperatures live."
  },
  {
    id: 130,
    title: "Teriyaki Black Rice",
    category: "global",
    origin: "Sizzling Wok",
    desc: "Pokchoy | Edamame | Spring Onion | Shiitake | Teriyaki Sauce | Chilli Garlic Black Rice",
    price: "Grazing Table",
    pairing: "Sake Cooler",
    details: "Stir-fried forbidden black rice with savory umami sauces."
  },
  {
    id: 131,
    title: "Teppan Grilled Cottage Cheese Noodles",
    category: "global",
    origin: "Sizzling Wok",
    desc: "Teppan Grilled Cottage Cheese | Crispy Potato | Onion | Scallion | Ginger Soy | Teriyaki | Udon Noodles",
    price: "Grazing Table",
    pairing: "Plum Wine Fizz",
    details: "Thick wheat noodles griddled with rich cheese blocks."
  },
  {
    id: 132,
    title: "Mushroom Sichuan Fried Rice",
    category: "global",
    origin: "Sizzling Wok",
    desc: "Assorted Grilled Mushrooms | Spring Onion | BBQ Sauce | Sichuan Fried Rice",
    price: "Grazing Table",
    pairing: "Oolong Tea infusion",
    details: "Spicy Sichuan peppercorn-laced rice tossed live."
  },
  {
    id: 133,
    title: "Asparagus & Broccoli Black Bean Noodles",
    category: "global",
    origin: "Sizzling Wok",
    desc: "Teppan Grilled Asparagus | Broccoli | Onion | Burnt Garlic | Mustard Sauce | Black Bean Noodles",
    price: "Grazing Table",
    pairing: "Pilsner",
    details: "Healthy greens tossed with thick fermented black bean sauce."
  },
  {
    id: 134,
    title: "Robatayaki Cottage Cheese",
    category: "global",
    origin: "Robatayaki",
    desc: "Cottage Cheese | Thai Curry",
    price: "Grazing Table",
    pairing: "Whisky Highball",
    details: "Robatayaki: Japanese fireside cooking over white-oak binchotan coals."
  },
  {
    id: 135,
    title: "Robatayaki BBQ Potato",
    category: "global",
    origin: "Robatayaki",
    desc: "BBQ Potato | Cajun Rub",
    price: "Grazing Table",
    pairing: "Cold Lager",
    details: "Slow-roasted potato skewers seared with smoky spices."
  },
  {
    id: 136,
    title: "Robatayaki Grilled Broccoli",
    category: "global",
    origin: "Robatayaki",
    desc: "Broccoli | Teriyaki",
    price: "Grazing Table",
    pairing: "Green Tea Fizz",
    details: "Charred sweet broccoli florets glazed with sticky teriyaki sauce."
  },
  {
    id: 137,
    title: "Robatayaki Mushroom Skewers",
    category: "global",
    origin: "Robatayaki",
    desc: "Mushroom | Peanut",
    price: "Grazing Table",
    pairing: "Dry Sake",
    details: "Earthy mushrooms seared and drizzled with a rich peanut sauce."
  },
  {
    id: 138,
    title: "Tofu Karage",
    category: "global",
    origin: "Karage",
    desc: "Karaage is a Japanese cooking technique of deep-frying tofu",
    price: "Grazing Table",
    pairing: "Yuzu Tonic",
    details: "Crispy, potato starch-coated tofu chunks fried golden."
  },
  {
    id: 139,
    title: "Mockmeat Karage",
    category: "global",
    origin: "Karage",
    desc: "Deep fried plant-based mockmeat chunks with Japanese spices",
    price: "Grazing Table",
    pairing: "Asahi Beer",
    details: "Crispy exterior with juicy, tender bite."
  },
  {
    id: 140,
    title: "Herb Infused Cottage Cheese Satay",
    category: "global",
    origin: "Asian Satay & Dips",
    desc: "with Barbeque Chilli Sauce",
    price: "Grazing Table",
    pairing: "Lemongrass Tea",
    details: "Skewered paneer strips infused with fresh herbs."
  },
  {
    id: 141,
    title: "Thyme Infused Mushroom & Peppers Satay",
    category: "global",
    origin: "Asian Satay & Dips",
    desc: "with Lemon Caper Sauce",
    price: "Grazing Table",
    pairing: "Sauvignon Blanc",
    details: "Skewered button mushrooms with bell pepper squares."
  },
  {
    id: 142,
    title: "Grilled Zucchini & Baby Corn Stick",
    category: "global",
    origin: "Asian Satay & Dips",
    desc: "with Thai Red Curry",
    price: "Grazing Table",
    pairing: "Coconut water Mocktail",
    details: "Crunchy vegetables seared fireside."
  },
  {
    id: 143,
    title: "Garlicky Asparagus & Broccoli Satay",
    category: "global",
    origin: "Asian Satay & Dips",
    desc: "with Celery Tomato Sriracha Sauce",
    price: "Grazing Table",
    pairing: "Singha Lager",
    details: "Laced with garlic oil and finished with hot sriracha glaze."
  },
  {
    id: 144,
    title: "Flaming Mongolian Grill",
    category: "global",
    origin: "Flaming Mongolian Grill",
    desc: "Choose from a lavish display of ingredients: Zucchini, Snow Peas, Broccoli, Baby Corn, Napa Cabbage, Corn Kernels, Shiitake, Button Mushrooms, Carrots, Spinach Leaves, Assorted Peppers, Tofu, Cauliflower, Beans Sprout. Choice of Sauce: Shitake Soya Sauce, Black Pepper Sauce, Spicy Basil Sauce, Thai Sam Rod Sauce. Choice of Base Ingredient: Steamed Jasmine Rice, Thai Sesame Cereal Rice, Udon Noodles, Shanghai Noodles, Pad Thai Noodles",
    price: "Grazing Table",
    pairing: "Tsingtao Beer / Sake",
    details: "A dramatic grill show cooked live on an circular iron griddle."
  },
  {
    id: 145,
    title: "Silken Tofu & Straw Mushrooms",
    category: "global",
    origin: "Pan Asian Array Teppanyaki",
    desc: "White Fungus, Snowpeas, Garlic & Black Bean Sauce",
    price: "Grazing Table",
    pairing: "Jasmine tea Cooler",
    details: "Teppanyaki - Earth: Prepared live over flat iron grill."
  },
  {
    id: 146,
    title: "Burnt Garlic Stir Fried Greens",
    category: "global",
    origin: "Pan Asian Array Teppanyaki",
    desc: "Asparagus, Bokchoy, Broccoli",
    price: "Grazing Table",
    pairing: "Dry Sake",
    details: "Teppanyaki - Earth: High flame toss with smoky burnt garlic."
  },
  {
    id: 147,
    title: "Yellow Bean Seared Vegetables",
    category: "global",
    origin: "Pan Asian Array Teppanyaki",
    desc: "Broccoli, Mushrooms, Water-Chestnuts, Almond Shavings",
    price: "Grazing Table",
    pairing: "Chardonnay",
    details: "Teppanyaki - Land: Seared with sweet yellow soybean paste."
  },
  {
    id: 148,
    title: "Edamame with Pink Salt",
    category: "global",
    origin: "Pan Asian Array Teppanyaki",
    desc: "Edamame, Himalayan Pink Salt",
    price: "Grazing Table",
    pairing: "Warm Sake",
    details: "Teppanyaki - Land: Steamed whole pods dusted with coarse pink crystals."
  },
  {
    id: 149,
    title: "Stir Fried Wakame in Sesame Oil",
    category: "global",
    origin: "Pan Asian Array Teppanyaki",
    desc: "Wakame, Sesame Oil, Burnt Garlic",
    price: "Grazing Table",
    pairing: "Japanese Beer",
    details: "Teppanyaki - Sea: Warm seaweed tossed in rich roasted sesame oil."
  },
  {
    id: 150,
    title: "Waterchestnut Chilli Garlic",
    category: "global",
    origin: "Pan Asian Array Teppanyaki",
    desc: "Stir Fried Waterchestnut, Dark Soy, Black Pepper. Accompanied with Frills: Udon Noodles, Hakka Noodles, Black Rice, Steamed Rice",
    price: "Grazing Table",
    pairing: "Riesling",
    details: "Teppanyaki - Sea: Extremely crunchy waterchestnuts tossed in spicy garlic soy."
  },
  {
    id: 151,
    title: "Courgettes, Cherry Tomato & Red Cheddar Pizza",
    category: "global",
    origin: "Italiano Artistic Pizzeria",
    desc: "Courgettes & Sweet Corns, Greek feta & red cheddar",
    price: "Grazing Table",
    pairing: "Italian Red Wine",
    details: "Artistic Pizzeria: Freshly hand-tossed thin crust pizza wood-fired live."
  },
  {
    id: 152,
    title: "Cherry Tomato, Basil & Young Mozzarella Pizza",
    category: "global",
    origin: "Italiano Artistic Pizzeria",
    desc: "Loaded with Cheese, tomato sauce and oregano",
    price: "Grazing Table",
    pairing: "Chianti Classico",
    details: "Classic neapolitan style margarita pizza."
  },
  {
    id: 153,
    title: "Asparagus Goat Cheese & Rocket Pizza",
    category: "global",
    origin: "Italiano Artistic Pizzeria",
    desc: "Italian Goat cheese, grilled asparagus & season Rocket",
    price: "Grazing Table",
    pairing: "Sauvignon Blanc",
    details: "Wood-fired thin crust topped with fresh rocket leaves."
  },
  {
    id: 154,
    title: "Three Pepper Pizza",
    category: "global",
    origin: "Italiano Artistic Pizzeria",
    desc: "Pepperoncino, Virgin oil & slow roasted peppers",
    price: "Grazing Table",
    pairing: "Valpolicella",
    details: "Fired with extra virgin olive oil and charred sweet bell peppers."
  },
  {
    id: 155,
    title: "Pulled Cottage Cheese and Cheddar Panuozzo",
    category: "global",
    origin: "Panuozzo",
    desc: "Warm wood-fired sandwich stuffed with shredded cheese",
    price: "Grazing Table",
    pairing: "Sangiovese",
    details: "Pizza dough sandwich baked hot in the oven."
  },
  {
    id: 156,
    title: "Pesto | Sundried Tomato | Bocconcini Panuozzo",
    category: "global",
    origin: "Panuozzo",
    desc: "Warm sandwich with creamy baby mozzarella, pesto, and dried tomatoes",
    price: "Grazing Table",
    pairing: "Italian Prosecco",
    details: "Bespoke Italian street sandwich."
  },
  {
    id: 157,
    title: "Slider Buzz Station",
    category: "global",
    origin: "Slider Buzz",
    desc: "Slider Buns. Choice of Patties: Aloo Tikki Patty, Achari Paneer Patty. Choice of Sauces: Mustard, Cocktail Sauce, Ranch Sauce, Garlic Aioli",
    price: "Grazing Table",
    pairing: "Mini Craft Beer",
    details: "Gourmet mini burgers assembled live with fresh brioche buns."
  },
  {
    id: 158,
    title: "Salad - Tabbouleh",
    category: "global",
    origin: "Lebanese Norriture",
    desc: "Finely chopped parsley, mint, tomatoes, and bulgur wheat dressed with olive oil",
    price: "Grazing Table",
    pairing: "Lemon Cooler",
    details: "Lebanese Norriture: Clean and fresh Middle Eastern display."
  },
  {
    id: 159,
    title: "Cottage Cheese Shawarma Wrap",
    category: "global",
    origin: "Lebanese Norriture",
    desc: "Spiced paneer shavings wrapped in flatbread. Served with: Tzatziki, Beetroot Hummus",
    price: "Grazing Table",
    pairing: "Mint Lemonade",
    details: "Roasted on a vertical rotisserie spit live."
  },
  {
    id: 160,
    title: "Mezze Platter",
    category: "global",
    origin: "Lebanese Norriture",
    desc: "Hummus, Muhamara, Tzatziki, Babaganoush, Labneh. Accompanied with: Pita and Lavash",
    price: "Grazing Table",
    pairing: "Anise Drink (Arak)",
    details: "A lavish grazing spread of Middle Eastern dips and warm breads."
  },
  {
    id: 161,
    title: "Falafel Platter",
    category: "global",
    origin: "Falafel Platter",
    desc: "Crispy Falafel. Accompanied with: Pita, Hummus, Pickled Vegetables",
    price: "Grazing Table",
    pairing: "Tahini Shake",
    details: "Crisp ground-chickpea balls served hot out of the oil."
  },
  {
    id: 162,
    title: "Fresh Guac Bar",
    category: "global",
    origin: "La Taquería",
    desc: "Classic, Chipotle, Feta, Garlic. Accompanied with: Fresh Corn Nachos",
    price: "Grazing Table",
    pairing: "Margarita Mocktail",
    details: "La Taquería: Smashed to order live."
  },
  {
    id: 163,
    title: "Wild Mushroom Asada Taco",
    category: "global",
    origin: "La Taquería",
    desc: "Charred wild mushrooms inside warm corn tortillas",
    price: "Grazing Table",
    pairing: "Corona with Lime",
    details: "Taco Fiesta: Served with lime slices and coriander."
  },
  {
    id: 164,
    title: "Pulled Jackfruit and Corn Taco",
    category: "global",
    origin: "La Taquería",
    desc: "Sweet corn and smoky pulled jackfruit in tortilla shell",
    price: "Grazing Table",
    pairing: "Hibiscus Iced Tea",
    details: "Taco Fiesta: Slow-cooked pulled texture mimicking meat."
  },
  {
    id: 165,
    title: "Tempura Yam and Black Bean Taco",
    category: "global",
    origin: "La Taquería",
    desc: "Crisp fried yam strips and savory black beans in taco casing",
    price: "Grazing Table",
    pairing: "Mezcal Sour",
    details: "Taco Fiesta: Exciting play of crunchy and soft textures."
  },
  {
    id: 166,
    title: "Matcha Mushroom Chimichanga",
    category: "global",
    origin: "El Plato Grande",
    desc: "Ancho mushroom stuffed crispy chimichanga, porcini mushroom puree, avocado cream, jalapeño coriander salsa.",
    price: "Grazing Table",
    pairing: "Dry Rosé",
    details: "El Plato Grande: Premium vertical Mexican plating."
  },
  {
    id: 167,
    title: "Spiced Pumpkin Fajita",
    category: "global",
    origin: "El Plato Grande",
    desc: "Roasted beans, peppers, broccoli, spiced pumpkin, jalapeño, cottage cheese.",
    price: "Grazing Table",
    pairing: "Amber Lager",
    details: "Served sizzling on hot iron skillets."
  },
  {
    id: 168,
    title: "Mushroom & Poblano Enchilada Skillet",
    category: "global",
    origin: "El Plato Grande",
    desc: "Corn and jalapeño stuffed tortilla, refried beans, cheese melt, chili pepper sauce. With Raw & Roast Chili Pepper",
    price: "Grazing Table",
    pairing: "Michelada",
    details: "Baked hot in iron skillets."
  },
  {
    id: 169,
    title: "Chili Rellenos in Walnut Sauce",
    category: "global",
    origin: "El Plato Grande",
    desc: "Mexican rice, cheese, salsa, roasted roots, pomegranate.",
    price: "Grazing Table",
    pairing: "Premium Tequila",
    details: "Stuffed green poblano pepper covered in walnut cream sauce."
  },
  {
    id: 170,
    title: "Spicy Avocado, Yam & Black Bean Bowl",
    category: "global",
    origin: "El Plato Grande",
    desc: "Mexican lime rice, salsa verde, pico de gallo, refried beans, jalapeño salsa, corn. Add Ons: Guacamole / Salsa / Refried Beans / Sour Cream Nacho Chips / Mexican Rice / Aged Cheddar",
    price: "Grazing Table",
    pairing: "Agave Cooler",
    details: "A comprehensive healthy Mexican grain bowl."
  },
  {
    id: 171,
    title: "Som Tam",
    category: "global",
    origin: "Thai Island",
    desc: "Spicy green papaya salad pounded in mortar pestle",
    price: "Grazing Table",
    pairing: "Lemongrass Cooler",
    details: "Thai Island: Raw, sour, and fiery salad display."
  },
  {
    id: 172,
    title: "Yam Woon Sen (Glass Noodle Salad)",
    category: "global",
    origin: "Thai Island",
    desc: "Mung bean glass noodles with herbs, peanuts, and sour lime dressing",
    price: "Grazing Table",
    pairing: "Chilled Jasmine Tea",
    details: "Light, refreshing cold salad preparation."
  },
  {
    id: 173,
    title: "Satay Tohu (Tofu)",
    category: "global",
    origin: "Tropical Thai",
    desc: "Skewered tofu grilled and served with Thai peanut sauce",
    price: "Grazing Table",
    pairing: "Singha Lager",
    details: "Tropical Thai: Curries and satays served live."
  },
  {
    id: 174,
    title: "Satay Het (Mushroom)",
    category: "global",
    origin: "Tropical Thai",
    desc: "Skewered mushrooms grilled and served with peanut dip",
    price: "Grazing Table",
    pairing: "Thai Iced Tea",
    details: "Basted with coconut cream during grilling."
  },
  {
    id: 175,
    title: "Satay Broccoli",
    category: "global",
    origin: "Tropical Thai",
    desc: "Skewered broccoli spears seared live",
    price: "Grazing Table",
    pairing: "Off-dry Riesling",
    details: "Accompanied with: Thai Peanut Sauce, Hot Chilli Crisps."
  },
  {
    id: 176,
    title: "Mockmeat Satay",
    category: "global",
    origin: "Tropical Thai",
    desc: "Vegan mockmeat strips basted with coconut curry grilled fireside",
    price: "Grazing Table",
    pairing: "Citrus Cooler",
    details: "Unbelievable texture and rich peanut flavor."
  },
  {
    id: 177,
    title: "Red Thai Curry",
    category: "global",
    origin: "Clay Pot Specialities",
    desc: "Rich, red chili paste coconut curry with bamboo shoots. Served with: Jasmine Rice",
    price: "Grazing Table",
    pairing: "Gewürztraminer",
    details: "Simmered in clay pots over embers."
  },
  {
    id: 178,
    title: "Green Thai Curry",
    category: "global",
    origin: "Clay Pot Specialities",
    desc: "Sweet basil and green chili paste coconut milk curry. Served with: Jasmine Rice",
    price: "Grazing Table",
    pairing: "Pinot Gris",
    details: "Fragrant and herb-heavy curry simmered live."
  },
  {
    id: 179,
    title: "Thai Basil Fried Rice",
    category: "global",
    origin: "The Thai Rice Bowl",
    desc: "Spicy jasmine rice stir fried with holy basil and soy",
    price: "Grazing Table",
    pairing: "Thai Iced Tea",
    details: "Stir-fried live in giant woks."
  },
  {
    id: 180,
    title: "Pad Thai (Veg | Tofu)",
    category: "global",
    origin: "Noodle Bowl",
    desc: "Flat rice noodles stir fried with bean sprouts, peanuts, tamarind, and tofu",
    price: "Grazing Table",
    pairing: "Cold Singha Beer",
    details: "Thailand's iconic national street noodle dish."
  },
  {
    id: 181,
    title: "Yellow Curry Noodles (Veg | Tofu)",
    category: "global",
    origin: "Noodle Bowl",
    desc: "Thick yellow eggless wheat noodles in turmeric coconut broth",
    price: "Grazing Table",
    pairing: "Sake shot",
    details: "Rich, creamy Burmese-Thai hybrid style noodle bowl."
  }
];

function renderMenu(items) {
  const grid = document.getElementById('menu-items-grid');
  const countLabel = document.getElementById('menu-active-count');
  
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div class="menu-empty-message" style="grid-column: 1/-1; text-align: center; font-family: var(--font-serif); font-size: 1.5rem; color: var(--color-olive); padding: var(--space-xl) 0;">No culinary creations match your search.</div>`;
    if (countLabel) countLabel.textContent = "0 Creations";
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="menu-item-card hover-target" data-id="${item.id}">
      <div class="menu-item-header">
        <h3 class="menu-item-title">${item.title}</h3>
        <span class="menu-item-origin">${item.origin}</span>
      </div>
      <p class="menu-item-desc">${item.desc}</p>
      <div class="menu-item-details">
        <span class="menu-item-tag">Category: ${item.category.toUpperCase()}</span>
        <span class="menu-item-price">${item.price}</span>
      </div>
    </div>
  `).join('');

  if (countLabel) {
    countLabel.textContent = `${items.length} ${items.length === 1 ? 'Creation' : 'Creations'}`;
  }

  // Add click listeners to cards for the details modal
  document.querySelectorAll('.menu-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = parseInt(card.getAttribute('data-id'));
      const dish = menuDatabase.find(d => d.id === id);
      if (dish) {
        showMenuModal(dish);
      }
    });
  });
}

function initMenuFilters() {
  const searchInput = document.getElementById('menu-search');
  const filterButtons = document.querySelectorAll('.filter-btn');

  let activeCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    const filtered = menuDatabase.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    renderMenu(filtered);
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      applyFilters();
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  // Render all initially
  renderMenu(menuDatabase);
}

// Menu Details Modal
function showMenuModal(dish) {
  // Check if modal container already exists
  let modal = document.getElementById('menu-details-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'menu-details-modal';
    modal.className = 'menu-modal';
    // Style modal dynamically
    const style = document.createElement('style');
    style.innerHTML = `
      .menu-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(26, 26, 26, 0.85);
        backdrop-filter: blur(8px);
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.5s ease;
      }
      .menu-modal.open {
        opacity: 1;
        pointer-events: all;
      }
      .menu-modal-container {
        background-color: var(--color-ivory);
        border: 1px solid var(--color-olive-light);
        border-radius: 4px;
        width: 90%;
        max-width: 550px;
        padding: var(--space-xl);
        position: relative;
        transform: translateY(30px);
        transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        max-height: 90vh;
        overflow-y: auto;
      }
      .menu-modal.open .menu-modal-container {
        transform: translateY(0);
      }
      .menu-modal-close {
        position: absolute;
        top: var(--space-md);
        right: var(--space-md);
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--color-olive);
        transition: color 0.3s;
      }
      .menu-modal-close:hover {
        color: var(--color-terracotta);
      }
      .menu-modal-meta {
        font-family: var(--font-sans);
        font-size: 0.75rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--color-terracotta);
        margin-bottom: var(--space-xs);
      }
      .menu-modal-title {
        font-family: var(--font-serif);
        font-size: 2.2rem;
        margin-bottom: var(--space-md);
        line-height: 1.1;
      }
      .menu-modal-desc {
        font-family: var(--font-sans);
        font-size: 1rem;
        line-height: 1.6;
        color: var(--color-charcoal-light);
        margin-bottom: var(--space-lg);
      }
      .menu-modal-block {
        border-top: 1px solid var(--color-olive-light);
        padding-top: var(--space-md);
        margin-bottom: var(--space-md);
      }
      .menu-modal-block-title {
        font-family: var(--font-sans);
        font-size: 0.8rem;
        font-weight: var(--weight-semi);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-olive);
        margin-bottom: var(--space-xs);
      }
      .menu-modal-block-text {
        font-family: var(--font-serif);
        font-style: italic;
        font-size: 1.2rem;
        color: var(--color-charcoal);
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="menu-modal-container">
      <span class="menu-modal-close hover-target" id="modal-close-btn">&times;</span>
      <div class="menu-modal-meta">${dish.origin}</div>
      <h2 class="menu-modal-title">${dish.title}</h2>
      <p class="menu-modal-desc">${dish.desc}</p>
      
      <div class="menu-modal-block">
        <div class="menu-modal-block-title">Theatrical Food Station Presentation</div>
        <p class="menu-modal-desc" style="margin-bottom: 0; font-size: 0.95rem;">${dish.details}</p>
      </div>

      <div class="menu-modal-block">
        <div class="menu-modal-block-title">Curated Beverage Pairing</div>
        <p class="menu-modal-block-text">${dish.pairing}</p>
      </div>
      
      <div class="menu-modal-block" style="border-top: none; display: flex; justify-content: space-between; align-items: center; margin-bottom: 0;">
        <span class="menu-modal-block-title" style="margin-bottom: 0;">Valuation</span>
        <span class="menu-item-price" style="font-size: 1.6rem; color: var(--color-terracotta); font-family: var(--font-serif);">${dish.price}</span>
      </div>
    </div>
  `;

  // Open modal
  setTimeout(() => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }, 50);

  // Close bindings
  const closeBtn = modal.querySelector('#modal-close-btn');
  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMenuFilters();
});
