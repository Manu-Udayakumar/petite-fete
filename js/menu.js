/* js/menu.js */

const menuDatabase = [
  // ==========================================
  // --- INDIAN STREET COLLECTIVE (indian) ---
  // ==========================================
  {
    id: 1,
    title: "Atta Golgappa",
    category: "indian",
    origin: "Ambala Street Collective",
    desc: "Deep fried Suji/Atta dumplings filled with potato, served with 6 varieties of flavored water: Guava, Lemon Kevra, Mitha, Hing, and Khatta.",
    price: "Interactive Station",
    pairing: "Masala Lemon Fizz",
    details: "Served from an elegant ice counter with flowing copper spouts."
  },
  {
    id: 2,
    title: "Kolkata Puchka",
    category: "indian",
    origin: "Charismatic Kolkata",
    desc: "Deep fried Flavored Dumpling with Potato and choice of flavored waters: Tetul Jol and Mishti Jol.",
    price: "Signature Station",
    pairing: "Spiced Gondhoraj Shrub",
    details: "Served in traditional leaf bowls."
  },
  {
    id: 3,
    title: "Jhalmuri",
    category: "indian",
    origin: "Charismatic Kolkata",
    desc: "Puffed rice, peanuts, chana & slivered coconut with the sharpness of mustard oil & lime juice, sprinkled with mudi masala.",
    price: "Signature Station",
    pairing: "Cutting Chai Shot",
    details: "Tossed live in paper cones."
  },
  {
    id: 4,
    title: "Churmur",
    category: "indian",
    origin: "Charismatic Kolkata",
    desc: "Safed matar mixed with special Bengali masala & chutneys, topped with crumbled puchka.",
    price: "Signature Station",
    pairing: "Cold Pressed Sugarcane Juice",
    details: "A classic street-side delicacy."
  },
  {
    id: 5,
    title: "Kolkata Kadhi Kachori",
    category: "indian",
    origin: "Charismatic Kolkata",
    desc: "Stuffed mini Kachories served with piping hot Kadhi, sweet & sour chutney and fine sev.",
    price: "Signature Station",
    pairing: "Kokum Cooler",
    details: "Served warm in clay plates."
  },
  {
    id: 6,
    title: "Ghugni Chaat",
    category: "indian",
    origin: "Charismatic Kolkata",
    desc: "Made of dried white peas with chopped tomatoes, potatoes, onions, green chillies, cilantro and tamarind chutney with a wide variety of spices served with crunchy, tangy toppings.",
    price: "Signature Station",
    pairing: "Rosewater Cooler",
    details: "Garnished with fresh ginger hair."
  },
  {
    id: 7,
    title: "Dahi Puchka",
    category: "indian",
    origin: "Charismatic Kolkata",
    desc: "Made from Atta, stuffed with flavorful mix of potatoes relished with sweet flavored curd and chutneys.",
    price: "Signature Station",
    pairing: "Pomegranate Elixir",
    details: "Served chilled with fine sev."
  },
  {
    id: 8,
    title: "Agra ki Pani-Puri",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Deep fried crispy suji puri filled with potato served with two varieties of flavored water (Khatta-Meetha and Pudina).",
    price: "Signature Station",
    pairing: "Pudina Mojito infusion",
    details: "Presented in traditional clay pottery with flowing fountains of botanical water."
  },
  {
    id: 9,
    title: "Kesari Dahi Bhalla / Papdi Ki Chaat",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Lentil dumplings/ Short crust roundels served with chilled sweet curd topped with Tamarind & mint chutney, ginger juliennes & pomegranate seeds and garnished with Indian spices & saffron.",
    price: "Signature Station",
    pairing: "Chilled Saffron Thandai",
    details: "Garnished live with golden saffron threads and pomegranate jewels."
  },
  {
    id: 10,
    title: "Thin Crust Chilla",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Gram flour pancake served with coriander & tamarind chutney.",
    price: "Signature Station",
    pairing: "Spiced Masala Lassi",
    details: "Cooked thin and crispy on a polished iron griddle."
  },
  {
    id: 11,
    title: "Dry Fruit Dahi Makhana Chaat",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Fox nut and yogurt based chaat.",
    price: "Signature Station",
    pairing: "Sweet Almond Milk",
    details: "A crunchy and light yogurt-based preparation utilizing premium quality roasted fox nuts."
  },
  {
    id: 12,
    title: "Moong Dal Chilla",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Soaked grinded Moong Dal pancake stuffed with Paneer & peas; served with coriander & tamarind chutney.",
    price: "Signature Station",
    pairing: "Roasted Cumin Shrub",
    details: "Griddled live with home-churned white butter."
  },
  {
    id: 13,
    title: "Khasta Aloo Tikki",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Crispy Aloo Patty served with coriander & tamarind chutney.",
    price: "Signature Station",
    pairing: "Earthy Ginger Brew",
    details: "Shallow fried to a golden crunch on heavy cast iron tawas."
  },
  {
    id: 14,
    title: "Dahi Pakodi",
    category: "indian",
    origin: "Flavors of Agra",
    desc: "Soft lentil dumplings soaked in curd, topped with chutney and jeera powder.",
    price: "Signature Station",
    pairing: "Chilled Buttermilk",
    details: "An antique street specialty of Agra, served cold."
  },
  {
    id: 15,
    title: "Basket Chaat",
    category: "indian",
    origin: "From the Land of Rajas",
    desc: "Flour base small basket filled with boiled chana, potato, sweet & spicy chutney, topped with cued and chaat masala.",
    price: "Signature Station",
    pairing: "Kesar Kulfi Shake",
    details: "A premium assortment of textures served in a crisp, edible basket."
  },
  {
    id: 16,
    title: "Ajmeri Kadhi Kachodi",
    category: "indian",
    origin: "From the Land of Rajas",
    desc: "Crispy Deep Fried Kachori, stuffed with masala and secret ingredients served with yellow gram flour & yogurt based curry cooked in authentic Indian Style.",
    price: "Signature Station",
    pairing: "Earthy Smoked Chaas",
    details: "Served bubbling hot with rich Rajasthani kadhi."
  },
  {
    id: 17,
    title: "Kanji Wada",
    category: "indian",
    origin: "From the Land of Rajas",
    desc: "Traditional recipe from Rajasthan made from lentils soaked in a mildly spicy fermented mustard curry, topped with moong sprout beans.",
    price: "Signature Station",
    pairing: "Fermented Mustard Water",
    details: "Prepared in traditional clay pots for perfect natural fermentation."
  },
  {
    id: 18,
    title: "Dahi Gujiya",
    category: "indian",
    origin: "The Holy City of Haridwar",
    desc: "Haridwar special chaat made of yogurt and gujiyas made of urad dal. Topped with: Tamarind & mint chutney, ginger juliennes & pomegranate seeds and garnished with Indian spices & saffron.",
    price: "Signature Station",
    pairing: "Holy Ganga Mint Cooler",
    details: "Extremely delicate dumplings soaked in whipped creamy yogurt."
  },
  {
    id: 19,
    title: "Aloo Tikki with Dum Aloo",
    category: "indian",
    origin: "The Holy City of Haridwar",
    desc: "Crispy Aloo Patty served with Dum Aloo accompanied with chutney.",
    price: "Signature Station",
    pairing: "Spiced Masala Soda",
    details: "A unique dual-potato delicacy served in leaf bowls."
  },
  {
    id: 20,
    title: "English Tawa Chaat",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Assorted English vegetables like broccoli, corn & peas with dry fruit like almond & cashews are tossed together in mild seasoning & finished with lime juice.",
    price: "Signature Station",
    pairing: "Dry Chenin Blanc",
    details: "A modern, healthy take on street culinary theater."
  },
  {
    id: 21,
    title: "Aloo Tikki with Chole",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Crispy Aloo patty served with Chole accompanied with chutney.",
    price: "Signature Station",
    pairing: "Classic Jaljeera",
    details: "Drizzled with hot Punjabi chole curry and sweet tamarind."
  },
  {
    id: 22,
    title: "Moong Dal Ladoo",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Fried Moong dal dumplings served with Mooli Lachha & mint chutney.",
    price: "Signature Station",
    pairing: "Sweet Lassi",
    details: "Served hot with shredded radish salad and spicy green chili paste."
  },
  {
    id: 23,
    title: "Jodhpuri Mirchi Pakoda",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Bhavnagri Mirch stuffed with mashed potatoes coated with gram flour and deep fried.",
    price: "Signature Station",
    pairing: "Hot Ginger Chai Shot",
    details: "Jodhpur's fiery green chilies fried to golden perfection."
  },
  {
    id: 24,
    title: "Matra Patila",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Overnight soaked & pressure cooked Safed Matar, further cooked with dry masala, topped with ginger, green chili & lemon.",
    price: "Signature Station",
    pairing: "Tangy Kokum Soda",
    details: "Served directly from giant brass handis (patilas)."
  },
  {
    id: 25,
    title: "Moonglet",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Lentil paste whipped with onion, green chilly & cooked on hot plate.",
    price: "Signature Station",
    pairing: "Cucumber Lemonade",
    details: "Whipped to an airy, soufflé-like light texture."
  },
  {
    id: 26,
    title: "Aloo, Shakarkandi, Matar Ki Chaat",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Diced Potato, Sweet Potato and peas tossed with Chaat masala & Tamarind chutney.",
    price: "Signature Station",
    pairing: "Pomegranate Elixir",
    details: "Tossed inside a giant brass bowl with freshly ground spices."
  },
  {
    id: 27,
    title: "Fruit Kulia",
    category: "indian",
    origin: "Classic Delhi Tales",
    desc: "Summer Special chaat, made with cool & refreshing raw ingredients like cucumber, Pomegranate, watermelon, papaya etc.",
    price: "Signature Station",
    pairing: "Cold Pressed Watermelon Juice",
    details: "Fruits are hollowed out and filled with black salt, lemon, and chickpeas."
  },
  {
    id: 28,
    title: "Shakarkandi Chuski",
    category: "indian",
    origin: "Panipat",
    desc: "Boiled sweet potato roundels shallow fried on tawa & served on stick like chuski with tamarind sweet & sour chutney topped with special masala.",
    price: "Signature Station",
    pairing: "Tamarind Shrub",
    details: "Panipat Ram Lal Chowk style sweet potato served like an ice lolly."
  },
  {
    id: 29,
    title: "Dry Fruit Chaat",
    category: "indian",
    origin: "Panipat",
    desc: "Mouth-watering dry fruits with sweet potato & pomegranate mixed together with sweet chutney and masala.",
    price: "Signature Station",
    pairing: "Spiced Apple Cider",
    details: "A luxurious and warm nut-heavy street delicacy."
  },
  {
    id: 30,
    title: "Palak Patte Ki Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Gram flour coated palak leaves served with sprouts, sev, chutneys and curd.",
    price: "Signature Station",
    pairing: "Saffron Lassi shot",
    details: "Plated elegantly with drops of colorful herb infusions."
  },
  {
    id: 31,
    title: "Tamatar Ki Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Mixture of tomatoes, Aloo and Paneer cooked on tawa to a paste consistency topped with tangy sweet gravy.",
    price: "Signature Station",
    pairing: "Earthy Kulhad Tea",
    details: "Served in handmade baked clay cups (kulhads) with a splash of hot ghee."
  },
  {
    id: 32,
    title: "Churaa Matar Ki Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Poha soaked in milk & green peas are tossed in aromatic spices along with lots of fresh coriander.",
    price: "Signature Station",
    pairing: "Cardamom Infused Milk",
    details: "A classic Banaras winter morning specialty."
  },
  {
    id: 33,
    title: "Khasta Kachori served with Kala Chana",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Crispy short crust roundel filled with masala served with coriander & tamarind chutney.",
    price: "Signature Station",
    pairing: "Spiced Mango Panna",
    details: "Served hot alongside a savory, dark kala chana gravy."
  },
  {
    id: 34,
    title: "Hot Papad Cone",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Crispy Papad Cones sprinkled with masala.",
    price: "Signature Station",
    pairing: "Cold Premium Lager",
    details: "Hand-rolled warm, roasted mini papads filled with spicy toppings."
  },
  {
    id: 35,
    title: "Dahi Ka Chilla",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Yogurt based thin pancake in Indian spices.",
    price: "Signature Station",
    pairing: "Herbal Mint Tea",
    details: "Drained yogurt batter griddled to a delicate, melt-in-mouth finish."
  },
  {
    id: 36,
    title: "Khajoor Chaat",
    category: "indian",
    origin: "Banarasi Chatkara",
    desc: "Stuffed date palms served with sprouts, sev, curd and chutney.",
    price: "Signature Station",
    pairing: "Rosewater Spritz",
    details: "Bespoke molecular droplets of yogurt served over sweet dates."
  },
  {
    id: 37,
    title: "Bhutte Ki Khees",
    category: "indian",
    origin: "Smart City Indore",
    desc: "A close cousin of the polenta, the secret lies in the makkai ki dalia.",
    price: "Signature Station",
    pairing: "Warm Ginger Chai",
    details: "Cooked live in heavy brass kadhais to release corn aromas."
  },
  {
    id: 38,
    title: "Sabutdane Ki Chaat",
    category: "indian",
    origin: "Smart City Indore",
    desc: "Savory Sago, Topped with Lime, Straw Potatoes / Salli, Peanuts and the Local Chaat Masala.",
    price: "Signature Station",
    pairing: "Roasted Coriander Water",
    details: "An Indore Sarafa Bazaar specialty."
  },
  {
    id: 39,
    title: "Garadu Chaat",
    category: "indian",
    origin: "Smart City Indore",
    desc: "Shallow fried yam topped with Rare Indian spices.",
    price: "Signature Station",
    pairing: "Tangy Lemon Fizz",
    details: "Indore's signature winter root chaat fried crisp."
  },
  {
    id: 40,
    title: "Pav Bhaji",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "It consists of a thick vegetable curry served with a soft Pav. Vegetables in the curry may include potatoes, onions, carrots, chilies, peas, bell peppers and tomatoes.",
    price: "Signature Station",
    pairing: "Cutting Chai",
    details: "Prepared on a large iron flat grid with massive block of butter."
  },
  {
    id: 41,
    title: "Vada Pav",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Vegetarian fast food dish native to the state of Maharashtra. The dish consists of a deep fried potato dumpling placed inside a bread bun sliced almost in half through the middle.",
    price: "Signature Station",
    pairing: "Hot Fried Green Chili",
    details: "Served with spicy garlic red chutney and green herb chutney."
  },
  {
    id: 42,
    title: "Sev Puri",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Made of crispy papdi (flat puri) which is loaded with diced potatoes, chickpeas, onions and various types of chutneys including spicy mint, sweet-sour tamarind, chilli and garlic.",
    price: "Signature Station",
    pairing: "Chilled Beer",
    details: "Assembled instantly on flat flour discs for immediate consumption."
  },
  {
    id: 43,
    title: "Bhel Puri",
    category: "indian",
    origin: "Mumbai Chowpatty",
    desc: "Puffed rice mixed with sev and chaat flavours.",
    price: "Signature Station",
    pairing: "Kokum Cooler",
    details: "Tossed light and dry, served in paper cones."
  },
  {
    id: 44,
    title: "Safed Channe Ki Tikki",
    category: "indian",
    origin: "Nawabi Kanpur",
    desc: "Chickpea Patty served with coriander & tamarind chutney.",
    price: "Signature Station",
    pairing: "Kanpur Special Soda",
    details: "Hand-pattied, fiber-rich chickpea patties seared slow."
  },
  {
    id: 45,
    title: "Garbad Chaat",
    category: "indian",
    origin: "Nawabi Kanpur",
    desc: "Also known as ‘Tower chaat’, Served in tall glass with tall spoon.",
    price: "Signature Station",
    pairing: "Masala Lemonade",
    details: "An architectural vertical assembly of various chaat elements."
  },
  {
    id: 46,
    title: "Dabeli",
    category: "indian",
    origin: "Gujarat",
    desc: "Dabeli, kutchi dabeli or double roti is a popular snack food of India, originating in the Kutch or Kachchh region of Gujarat.",
    price: "Signature Station",
    pairing: "Sweet Date Nectar",
    details: "Topped with fresh pomegranate kernels and roasted peanuts."
  },
  {
    id: 47,
    title: "Panki",
    category: "indian",
    origin: "Gujarat",
    desc: "Panki is made by cooking a batter between banana leaves.",
    price: "Signature Station",
    pairing: "Chaach (Buttermilk)",
    details: "Steamed inside banana leaves to absorb aromatic chlorophyll."
  },
  {
    id: 48,
    title: "Dhokla Chaat",
    category: "indian",
    origin: "Gujarat",
    desc: "Soft and fluffy dhoklas, is a very simple and refreshing fusion chaat.",
    price: "Signature Station",
    pairing: "Green Tea",
    details: "Served with a mustard seed temper and fresh curry leaves."
  },
  {
    id: 49,
    title: "Dal Moradabadi Chaat",
    category: "indian",
    origin: "Moradabad",
    desc: "The famous dal from moradabad, is a blend of moong dal that is seasoned as per your preference. Choice of Toppings: Chopped Tomatoes | Green Chili | Ginger Juliennes | Lemon Juice | Red Chili | Roasted Cumin Powder | Pink Salt | freshly chopped Coriander | Butter | Green Chutney.",
    price: "Signature Station",
    pairing: "Crispy Kachori Crumbles",
    details: "Guests choose their toppings live from a hammered copper bar."
  },

  // ==========================================
  // --- TIMELESS TASTES OF INDIA (timeless) ---
  // ==========================================
  {
    id: 50,
    title: "Paneer Khurchan",
    category: "timeless",
    origin: "Chajju ka Tawa",
    desc: "Fresh paneer strips finished on tawa with chatpata Indian masala, served with Roomali Roti and Lachha Pyaaz.",
    price: "Gourmet Platter",
    pairing: "Medium-bodied Merlot",
    details: "Cooked live on a sizzling flat tawa."
  },
  {
    id: 51,
    title: "Chatpati Chaap",
    category: "timeless",
    origin: "Chajju ka Tawa",
    desc: "Soya chaap finished on tawa with chatpata Indian masala, accompanied with Roomali Roti and lachha onion.",
    price: "Gourmet Platter",
    pairing: "Masala Thums Up",
    details: "Tossed continuously under high flames."
  },
  {
    id: 52,
    title: "Mushroom Taka-Tak",
    category: "timeless",
    origin: "Chajju ka Tawa",
    desc: "Mushroom finished on tawa with chatpata Indian masala. Served with: Roomali Roti and Lachha Pyaaz.",
    price: "Gourmet Platter",
    pairing: "Tempranillo",
    details: "Chopped and seared using double flat-iron spatulas."
  },
  {
    id: 53,
    title: "Veg. Shahi Subz Galouti Wrap",
    category: "timeless",
    origin: "Awadhi Galouti Station",
    desc: "Seasoned vegetable mince rolled into soft kebabs and cooked to perfection, wrapped inside Ulte Tawe ka Zafrani Parantha.",
    price: "Gourmet Platter",
    pairing: "Smoked Bourbon Cocktail",
    details: "Kebabs melt-in-the-mouth, prepared live."
  },
  {
    id: 54,
    title: "Chukandar Akhrot Ke Kebab",
    category: "timeless",
    origin: "Awadhi Galouti Station",
    desc: "Pink combination of beetroot and walnut, seasoned and char grilled, served with Ulte Tawe ka Zafrani Parantha.",
    price: "Gourmet Platter",
    pairing: "Pinot Noir",
    details: "A gorgeous crimson kebab with a nutty crunch."
  },
  {
    id: 55,
    title: "Subz Dal ke Kebab",
    category: "timeless",
    origin: "Awadhi Galouti Station",
    desc: "Chef’s secret recipe, served with Ulte Tawe ka Zafrani Parantha and Green Chutney / Onion Lachaa.",
    price: "Gourmet Platter",
    pairing: "Rosewater Spritzer",
    details: "Meticulously blended grains and spices."
  },
  {
    id: 56,
    title: "Specialized Mahi Parat Kebab (Paneer Ke Teenke)",
    category: "timeless",
    origin: "Mahi Parat Kebab",
    desc: "Paneer ke teenke, Rajma ki Galouti, and Veg chapli kebab skewers served with Mint chutney, Laccha pyaaz, and Lemon wedges.",
    price: "Gourmet Platter",
    pairing: "Robust Syrah",
    details: "Cooked on a wide brass parat over a slow coal fire."
  },
  {
    id: 57,
    title: "Hors D'oeuvres Special Kebabs (Aitishi Paneer Tikka)",
    category: "timeless",
    origin: "Hors D'oeuvres Station",
    desc: "Mildly flavored soft cubes of paneer cooked on skewers (Aitishi / Malai / Nawabi / Papad Paneer Tikka), Bhatti ki chaap, Kudrat ka tofah (mushroom), Bhutte methi ki seekh, Meva Mava Ki Kakori, and Aam Papad Dahi Kebab.",
    price: "Gourmet Platter",
    pairing: "Saffron Lassi shot",
    details: "An extensive display of signature clay-baked skewers."
  },
  {
    id: 58,
    title: "Indian Melange One Pot Rice Bowl (Subz Dum Biryani)",
    category: "timeless",
    origin: "The Indian Melange",
    desc: "Subz Dum Biryani paired with Mirchi Ka Saalan and Aloo Methi Ki Tehri. Accompanied with: Tadka Raita and Palak Choley Chawal in Kulhad.",
    price: "Gourmet Platter",
    pairing: "Spiced Buttermilk",
    details: "Slow-baked inside individual dough-sealed clay handis."
  },
  {
    id: 59,
    title: "Dal-E-Culinary Canvas",
    category: "timeless",
    origin: "Show Stopper Station",
    desc: "Black lentil soaked overnight; cooked in ginger, & simmered till perfection; finished & garnished with cream.",
    price: "Gourmet Platter",
    pairing: "Oak-aged Chardonnay",
    details: "Our signature dish, slow-cooked for 18 hours."
  },
  {
    id: 60,
    title: "Specialized Deccan Delight (Crispy Appam & Stew)",
    category: "timeless",
    origin: "Deccan Station",
    desc: "Crispy fermented appams served with vegetable stew, Andhra style veg korma with Malabari paratha, Bisi bele baath served with ghee, and Puliyogare with Tadka raita.",
    price: "Gourmet Platter",
    pairing: "Fresh Coconut Water",
    details: "Appams swirled live on miniature cast iron pans."
  },
  {
    id: 61,
    title: "Paneer Aur Kofta (Paneer Maska)",
    category: "timeless",
    origin: "Paneer & Kofta Station",
    desc: "Traditional gravy selection: Paneer maska in fresh tomato puree accented with saffron, Paneer khada masala, Paneer Qasr-E-Pukhtan, Kofta-e-khaas, and Aloo Bhukhara Kofta.",
    price: "Gourmet Platter",
    pairing: "Chilled Chenin Blanc",
    details: "Simmered in copper degs."
  },
  {
    id: 62,
    title: "Subziyo Ka Anubhav (Aloo Masaledar)",
    category: "timeless",
    origin: "Subziyo Ka Anubhav",
    desc: "Aloo masaledar cooked with Indian masala, Adraki Gobhi, Matar korma, Makkai shehzadi, Subziyon ki khurchan, Bhindi Naintara, Chenna Tinda, and Bharwaan parwal.",
    price: "Gourmet Platter",
    pairing: "Warm Ginger Tea",
    details: "Showcasing seasonal local vegetables tossed in rare spices."
  },
  {
    id: 63,
    title: "Bharwaan Amritsari Kulcha",
    category: "timeless",
    origin: "Amritsar",
    desc: "Baked leavened flat-bread with choice of stuffing: Paneer, Aloo & Pyaaz. Served with: Rasile Chole and relished with Imli Pyaaz Ki Chutney.",
    price: "Gourmet Platter",
    pairing: "Sweet Buttermilk",
    details: "Clay-baked and crushed by hand with fresh makhan."
  },
  {
    id: 64,
    title: "Rassey Missey Choley & Bhature",
    category: "timeless",
    origin: "Nand-Sadar Bazaar",
    desc: "Chana masala in special combination of authentic spices, served with stuffed fried puffed Bhature, Chutney & Achaar.",
    price: "Gourmet Platter",
    pairing: "Mango Lassi Shot",
    details: "The legendary Old Delhi recipe made with premium spices."
  },
  {
    id: 65,
    title: "Exquisite Dhaba Dal & Palak Paneer",
    category: "timeless",
    origin: "Exquisite Dhaba",
    desc: "Dhaba dal tempered in oil with smoky flavours, Palak Paneer, Paneer Bhurji, Baigan ka Bharta, and Aloo Vadiyan.",
    price: "Gourmet Platter",
    pairing: "Premium Pilsner",
    details: "Rustic clay-pot slow cooking."
  },
  {
    id: 66,
    title: "GT Road Paratha",
    category: "timeless",
    origin: "Exquisite Dhaba",
    desc: "Clay-oven baked Parathas with choice of stuffing: Paneer, Aloo, and Piyaaz. Served with: White Butter.",
    price: "Gourmet Platter",
    pairing: "Earthy Masala Chai",
    details: "Served straight from the tandoor."
  },
  {
    id: 67,
    title: "Gujrati Sweets & Farsan (Mohanthal)",
    category: "timeless",
    origin: "Gujrati Station",
    desc: "Mohanthal with Suterfeni, Kesar Pista Shrikhand. Farsan: Stuffed Dhokla, Singhoda bhel sanjoli. Shaak: Singhoda babycorn nu shaak, Bataka tameta nu shaak.",
    price: "Gourmet Platter",
    pairing: "Gujrati Chaas",
    details: "An elaborate traditional Gujarati thali representation."
  },
  {
    id: 68,
    title: "Gujrati Bowl Meal & Maharaj Ni Desi Dal",
    category: "timeless",
    origin: "Gujrati Station",
    desc: "Bhavnagri lasaniya bataka with bhungla, ghee rice, and khati kadhi. Breads: Biscuit masala bhakhri. Dal: Maharaj Ni Desi Dal. Rice: Walo Bhaat. Accompanied with: Roasted Khichiya, Mathiya, Gor Keri, and Athela Marcha.",
    price: "Gourmet Platter",
    pairing: "Sweet Lime Shrub",
    details: "Prepared under the guidance of traditional Maharaj chefs."
  },
  {
    id: 69,
    title: "Food From Mother's Kitchen (Yellow Dal Tadka)",
    category: "timeless",
    origin: "Mother's Kitchen",
    desc: "Daal Fry: Tempered with your choice of lentils (Chana & Urad) and tadka (Jeera & Lehsun, Hing, Tamatar Lal Mirch, Masala Pyaaz). Garnish: Coriander, Curry Leaves, Sukhi Lal Mirch. Served with: Tawa Phulka.",
    price: "Gourmet Platter",
    pairing: "Simple Mint Buttermilk",
    details: "Cooked on order, presenting comfort homestyle flavors."
  },
  {
    id: 70,
    title: "Surja Maharaj Puchka & Club Kachori",
    category: "timeless",
    origin: "Surja Maharaj's Specialized",
    desc: "Puchka / luchi puri served with lake dum aloo, and club kachori served with Lal channa subzi.",
    price: "Gourmet Platter",
    pairing: "Masala Soda",
    details: "Bespoke high-skill artisanal frying."
  },
  {
    id: 71,
    title: "Surja Maharaj Rajasthani Station (Dal/Baati/Churma)",
    category: "timeless",
    origin: "Surja Maharaj Rajasthani",
    desc: "Panchmel dal, Masala baati, Plain baati, Rose churma, and Plain churma. Accompanied with: Bajre Ki Khichdi served with Kadhi, ghee, and shakkar.",
    price: "Gourmet Platter",
    pairing: "Smoked Buttermilk",
    details: "Traditional royal Rajasthani feast."
  },
  {
    id: 72,
    title: "Rajasthani Ker Sangri & Bikaneri Parantha",
    category: "timeless",
    origin: "Surja Maharaj Rajasthani",
    desc: "Ker Sangri berries and beans cooked in mustard oil with yogurt, served with Bikaneri Parantha. Accompanied with: Papad Churi, Hara Dhaniya Chutney, and Fresh Achar Station.",
    price: "Gourmet Platter",
    pairing: "Cold Pressed Pomegranate",
    details: "Authentic dry desert ingredients imported from Bikaner."
  },
  {
    id: 73,
    title: "Chaunka Station (Chaunka Matar)",
    category: "timeless",
    origin: "Chaunka Station",
    desc: "Chaunka Matar and Bhuna Aloo with Jeera Chaunk. Accompanied with: Chidwa and aloo laccha.",
    price: "Gourmet Platter",
    pairing: "Hot Ginger Chai",
    details: "Sautéed in small brass woks with high tempering."
  },
  {
    id: 74,
    title: "Khichdi Khow Suey",
    category: "timeless",
    origin: "Chaunka Station",
    desc: "Dal Chawal Khichdi served with Palak, bhindi, Karela, Imly, Shakkar, Alloo Lachaa, Papad ka Bhuji, and Fried Onion, alongside Bajre Ki Khichdi.",
    price: "Gourmet Platter",
    pairing: "Salted Chaas",
    details: "An interesting fusion pairing of comforting grains."
  },
  {
    id: 75,
    title: "Chiman Lal Bedmi Poori Station",
    category: "timeless",
    origin: "Mathura Special",
    desc: "Bedmi Puri made of soaked Urad dal and spices, served with Aloo Ki Tarkari (spicy potato curry), Sitahal ki Subzi (sweet pumpkin), Methi Ki Chutney, and Achaar/Kachalu.",
    price: "Gourmet Platter",
    pairing: "Desi Rabdi Shot",
    details: "Mathura's heritage recipe cooked in pure ghee."
  },
  {
    id: 76,
    title: "Indian Breads",
    category: "timeless",
    origin: "Mathura Special",
    desc: "Missi Roti, Biscuiti Roti, Reshmi Paratha, Tandoori Roti, Lachha Paratha, Lal Mirch Parantha, Butter Naan, and Garlic Coriander Naan.",
    price: "Gourmet Platter",
    pairing: "White Butter Dollops",
    details: "Baked live in clay tandoors."
  },

  // ==========================================
  // --- GLOBAL STREET FOOD (global) ---
  // ==========================================
  {
    id: 77,
    title: "Selection of Sweet Gourmet Bites (Anjeer Bites)",
    category: "global",
    origin: "Selection of Sweet Bites",
    desc: "Stuffed Anjeer bites, Badaam Patra Roll, Tri color nut triangle, Gulab Patti Sandesh, Pista Gulkand Ball, Kaju Chocolate Ball, Orange Sandesh, Kesar Sandesh, Mango Sandesh, and Gurr Sandesh.",
    price: "Grazing Table",
    pairing: "Dessert Wine / Moscato",
    details: "Presented on marble blocks with dry ice fog."
  },
  {
    id: 78,
    title: "The Nuts Platter",
    category: "global",
    origin: "Selection of Sweet Bites",
    desc: "Roasted Almond Nuts, Roasted Cashew Nuts, Roasted Fox Nuts, Peri Peri Peanuts, Pecan Nuts, Hazel Nuts Rochers, Walnuts, and Chocolate Coated Apricots.",
    price: "Grazing Table",
    pairing: "Aged Tawny Port",
    details: "Perfect accompaniment for premium spirits."
  },
  {
    id: 79,
    title: "Tarts & Quiche (Asparagus Goat Cheese)",
    category: "global",
    origin: "Tarts & Quiche",
    desc: "Asparagus and Goat Cheese Quiche, Corn Jalapeno and Cheddar Tartlets, Wild Mushroom Tart, and Wilted Spinach and Feta Quiche.",
    price: "Grazing Table",
    pairing: "Sauvignon Blanc",
    details: "Miniatures baked fresh and served warm."
  },
  {
    id: 80,
    title: "Melting Point Cheese Board",
    category: "global",
    origin: "Melting Point",
    desc: "Aged Cheddar / Brie, Emmental, and Camembert / Gouda. Accompaniments: Roasted Baby Potatoes, Brussel Sprouts, Mushrooms, String Beans, Cherry Tomatoes, Fresh Apricots, and Green Apples.",
    price: "Grazing Table",
    pairing: "Pinot Noir / Chardonnay",
    details: "Presented alongside local honeycomb and roasted nuts."
  },
  {
    id: 81,
    title: "Melting Point Breads & Fruits",
    category: "global",
    origin: "Melting Point",
    desc: "Breads & Crackers: Plain & Salty Crackers, Baguette / Pita, Breadsticks/Foccacia/Sourdough. Nuts: Apricots, Cashews, Almonds, Walnuts. Fresh Fruits: Apple Compote and Californian Grapes.",
    price: "Grazing Table",
    pairing: "Fruity Prosecco",
    details: "A comprehensive artisanal bread display."
  },
  {
    id: 82,
    title: "Cheese & Jalapeno Poppers & Cheese Fountain",
    category: "global",
    origin: "Melting Point",
    desc: "Cheese and Jalapeno Poppers, Cheese Fountain served with Charred Pineapple, Green Apple, and Bread Croutons, alongside Welsh Rarebit.",
    price: "Grazing Table",
    pairing: "Spicy Margarita",
    details: "Featuring a cascading hot cheddar fountain."
  },
  {
    id: 83,
    title: "Melting Pita Pockets",
    category: "global",
    origin: "Melting Point",
    desc: "Falafel with Hummus, and Falafel with Quatro Fromage pockets.",
    price: "Grazing Table",
    pairing: "Pomegranate Spritzer",
    details: "Stuffed live with fresh parsley salad."
  },
  {
    id: 84,
    title: "Salad Studio (Grilled Asparagus)",
    category: "global",
    origin: "Melting Point",
    desc: "Grilled Asparagus with Toasted Walnuts and Melted Cheese, and Arugula with Mixed Seeds and Cranberry with Brie.",
    price: "Grazing Table",
    pairing: "Chilled Rosé",
    details: "Light, healthy, and texturally rich."
  },
  {
    id: 85,
    title: "Petite Cones",
    category: "global",
    origin: "Melting Point",
    desc: "Creamed Corn Fritters, Thai Crunchy Bhel, and Jhal Muri served in crispy mini cones.",
    price: "Grazing Table",
    pairing: "Lime Soda",
    details: "Passed around in custom wooden display blocks."
  },
  {
    id: 86,
    title: "Potato Churros Station",
    category: "global",
    origin: "Potato Churros Station",
    desc: "Indian Spiced Potato Churros with Tandoori Mayo Dip, Peri Peri Spiced Potato Churros with Spicy Queso Dip, and Cajun Spiced Potato Churros with Garlic Toon.",
    price: "Grazing Table",
    pairing: "Craft IPA",
    details: "Churros are piped and fried live in hot oil."
  },
  {
    id: 87,
    title: "The Gourmet Bruschetta",
    category: "global",
    origin: "The Gourmet Bruschetta",
    desc: "Baguette bread topped with choice of: Tomato & Basil, Olive Tapenade, and Creamy Mushroom Ragu.",
    price: "Grazing Table",
    pairing: "Chianti Classico",
    details: "Toasted live on charcoal ovens."
  },
  {
    id: 88,
    title: "Wrap It Up",
    category: "global",
    origin: "Wrap It Up",
    desc: "Falafel Wrap, Tex-Mex Wrap, Grilled Vegetable in Pesto and Parmesan Wrap, Mushroom Chettinad Wrap, Veg Seekh Gilafi Wrap, and Atishi Paneer Tikka Wrap.",
    price: "Grazing Table",
    pairing: "Mexican Pale Lager",
    details: "Pressed hot in flat grills."
  },
  {
    id: 89,
    title: "The Sandwich Emporium",
    category: "global",
    origin: "The Sandwich Emporium",
    desc: "Grilled Cheese and Basil Marinated Cheese Sandwich in Foccacia, Pesto Grilled Vegetable and Aged Cheddar multigrain bread Sandwich, Veg Club Sandwich, and Duxelles and Olive Tapenade brown bread Sandwich.",
    price: "Grazing Table",
    pairing: "Iced Tea",
    details: "Cut into elegant crustless triangles."
  },
  {
    id: 90,
    title: "Fusion Fondue",
    category: "global",
    origin: "Fusion Fondue",
    desc: "Herb Cheese Fondue with Crispy Poppers, Mumbai Bhaji Fondue with Butter Crusted Pao Poppers, and Aloo Ka Jhol Fondue with Coin Sized khasta Kachodi Poppers.",
    price: "Grazing Table",
    pairing: "Amber Ale",
    details: "Individual boiling fondue pots served on rotation."
  },
  {
    id: 91,
    title: "Kathi Rolls",
    category: "global",
    origin: "Kathi Rolls",
    desc: "Paneer tikka and jalapeno kathi roll rolled in hot fresh kathi roll, and Maseledar chaap kathi roll.",
    price: "Grazing Table",
    pairing: "Masala Cola",
    details: "Rolled in butter paper wrappers."
  },
  {
    id: 92,
    title: "Belgium Spiral Potatoes",
    category: "global",
    origin: "Kathi Rolls",
    desc: "Tandoori masala rubbed potato chips topped with mint mayo, Rarra spice fried potato with rogan aioli, and Peri peri masala dusted fries with kasundi mayo.",
    price: "Grazing Table",
    pairing: "Chilled Beer",
    details: "Presented on long bamboo skewers."
  },
  {
    id: 93,
    title: "Italian Artistic Pizzeria",
    category: "global",
    origin: "Italian Artistic Pizzeria",
    desc: "Courgettes, cherry tomato & red cheddar, Cherry Tomato, Basil & young mozzarella, Asparagus Goat Cheese & Rocket Pizza, Three Pepper Pizza, Classic Margherita, Mushroom and Corn, and Vegetable Pepper Milano.",
    price: "Grazing Table",
    pairing: "Chianti Classico",
    details: "Fired in our signature dome stone oven."
  },
  {
    id: 94,
    title: "Artistic Pizzeria (Neapolitan / Turkish / NY)",
    category: "global",
    origin: "Artistic Pizzeria",
    desc: "Neapolitan: Classic Cheese, Onion Capsicum Mushroom. Turkish Pide: Spinach & Corn, Triple Chilli. New York: Cradle of Liberty, Farmers Market, and The Capital (Peri Peri Paneer) Sheet Pizza.",
    price: "Grazing Table",
    pairing: "Pinot Grigio",
    details: "Hand-tossed thin crusts made live with premium cheese."
  },
  {
    id: 95,
    title: "Mexican Station (Picante / Tapas)",
    category: "global",
    origin: "Mexican Station",
    desc: "Baked Jacked Potatoes with Sour Cream, Baked Beans, Bean Chilli, Loaded Potato Skins, Mexican Rice & Cheese, Chilli Beans, Guacamole, and Corn and Cheese.",
    price: "Grazing Table",
    pairing: "Classic Margarita",
    details: "A comprehensive Mexican display."
  },
  {
    id: 96,
    title: "Mexican Burritos & Tacos",
    category: "global",
    origin: "Mexican Station",
    desc: "Burrito: Refried Beans, Rice, Avocado; Fajita Veggies; Chipotle Potato. Taco: Crispy Cottage Cheese, shredded lettuce, tomato salsa; Black Lentil, Pico D Gallo, lemon, iceberg, cheese.",
    price: "Grazing Table",
    pairing: "Tequila Shot",
    details: "Served with fresh corn chips and pico de gallo."
  },
  {
    id: 97,
    title: "Mexican Quesadillas",
    category: "global",
    origin: "Mexican Station",
    desc: "Bbq grilled vegetable quesadilla, and Chipotle cottage cheese quesadilla served with Guacamole, Salsa, Sour cream, and Refried beans.",
    price: "Grazing Table",
    pairing: "Corona with Lime",
    details: "Pressed hot with cheddar and cotija cheeses."
  },
  {
    id: 98,
    title: "Mexican Soft Shell Tacos & Slider Buzz",
    category: "global",
    origin: "Mexican Station",
    desc: "Chipotle soft shell tacos with roasted veggies, Cajun spiced cottage cheese taco. Slider Buzz: Coloured Slider Buns (Red Velvet, Spinach Green) with choice of Aloo Tikki or Achari Paneer Patty.",
    price: "Grazing Table",
    pairing: "Mini Craft Lager",
    details: "Slider buns are baked fresh to order."
  },
  {
    id: 99,
    title: "Dramatic Gyoza",
    category: "global",
    origin: "Dramatic Gyoza",
    desc: "Vegetable thai herb gyoza, Cottage cheese and scallion, Cottage cheese and water chest, Vegetable sichuan, and Mushroom & chives. Accompanied with: Tonsui, Sun Dried Chilli, and Scallion Sauce.",
    price: "Grazing Table",
    pairing: "Chilled Sake",
    details: "Traditional pan-seared savory dumplings cooked on iron griddles."
  },
  {
    id: 100,
    title: "Thailand Dimsums",
    category: "global",
    origin: "Thailand Dimsums",
    desc: "MUSHROOM & PARSLEY, WATER CHESTNUT & PEANUT, Philadelphia cream cheese, Vegetable shanghai, Hot red thai curry wonton, and Hot 'n' Sour Jade. Accompanied with: Tonsui, Sun Dried Chilli, and Scallion Sauce.",
    price: "Grazing Table",
    pairing: "Jasmine Green Tea",
    details: "Steamed inside tall bamboo baskets."
  },
  {
    id: 101,
    title: "Live Designer Appetizers",
    category: "global",
    origin: "Live Designer Appetizers",
    desc: "Breaded Mushroom Baoger, Thai Curry Chopsuey, Pulled Jackfruit Taco on Reshmi Parantha, Chipotle Paneer on Akhari topped with Kothmir dip, Dal Chawal Arancini, and Sundried Tomato Palenta Bites.",
    price: "Grazing Table",
    pairing: "Oolong Tea",
    details: "Avant-garde fusion appetizers styled in individual portions."
  },
  {
    id: 102,
    title: "Pan Asian Starters",
    category: "global",
    origin: "Pan Asian Starters",
    desc: "Siracha honey soy lotus stem, Schezwan style cottage cheese, Thai spring roll, Crispy vegetable tossed dry chilli, Vietnamese rice paper roll with crunchy asparagus, Asian corn cake, and Tofu in Three pepper sauce.",
    price: "Grazing Table",
    pairing: "Singha Lager",
    details: "Asian-inspired street delicacies."
  },
  {
    id: 103,
    title: "European Starters",
    category: "global",
    origin: "European Starters",
    desc: "Wild mushroom filo pies (mushroom ragu in filo), Melted brie on potato roesti with honey mustard glaze, Zanzibar roasted broccoli with cheddar crostini, Morrocan Triangles, and Mushroom croquettes.",
    price: "Grazing Table",
    pairing: "Chardonnay",
    details: "Baked pastries and croquettes served warm."
  },
  {
    id: 104,
    title: "Khao Suey Station",
    category: "global",
    origin: "Khao Suey Station",
    desc: "Burmese-influenced noodle dish served with choices: Chopped Onions, Garlic, Ginger, Lemon Grass, Coriander, and Exotic Veg. Garnishes: Peanuts, Spring Onions, Lemon, and Red Chilies.",
    price: "Grazing Table",
    pairing: "Warm Sake shot",
    details: "Boiling coconut-turmeric broth swirled over noodles."
  },
  {
    id: 105,
    title: "Soup Studio",
    category: "global",
    origin: "Soup Studio",
    desc: "Tomato basil soup with croutons, Cream of Broccoli, Tom yum soup, Manchow soup, Cream of Mushroom, and Gazpacho. Served with: Soft Buns, Soup Sticks, and Butter.",
    price: "Grazing Table",
    pairing: "Dry Sherry",
    details: "Chilled or hot soup shooters served in glassware."
  },
  {
    id: 106,
    title: "Salad Station",
    category: "global",
    origin: "Salad Station",
    desc: "Classic Panzanella, Italian Pasta Salad, Crunchy Kimchi, Fattoush Salad, Sprout Salad, Russian Salad, and Crispy Corn Salad.",
    price: "Grazing Table",
    pairing: "Organic Green Tea Shrub",
    details: "Made from scratch using farm-fresh garden greens."
  },
  {
    id: 107,
    title: "Salad Station (Mexican / German)",
    category: "global",
    origin: "Salad Station",
    desc: "Mexican Three Bean Salad, German Potato Salad, Coronation Cottage Cheese Salad, Baby Spinach with Cranberry & Red Onion, Pasta Salad with Brandy Sauce, Apple Celery & Raisin, and Pickled Beetroot with Walnut.",
    price: "Grazing Table",
    pairing: "Sauvignon Blanc",
    details: "A gorgeous array of texturally unique cold salads."
  },
  {
    id: 108,
    title: "Salad Studio (Pre Plated Salad Bar)",
    category: "global",
    origin: "Salad Studio",
    desc: "Green Apple Tabbouleh, Caprese Salad (Bocconcini & Cherry Tomatoes), Wine Cured Grape Salad, Caramelized Pear Salad, and Greek Salad with Watermelon and Avo.",
    price: "Grazing Table",
    pairing: "Prosecco",
    details: "Individual portions styled geometrically on white slate tiles."
  },
  {
    id: 109,
    title: "Salad Platter & Curd Station",
    category: "global",
    origin: "Salad Studio",
    desc: "Garden Fresh Salad Platter (Cucumber, Radish, Tomato). Curd Station: Anar Pudina, Cucumber, and Pineapple Raita. Accompanied with: Achaar and Papad (Khiciya / Kali Mirch).",
    price: "Grazing Table",
    pairing: "Watermelon cooler",
    details: "Traditional accompaniments for mains."
  },
  {
    id: 110,
    title: "Italiano Pasta Lounge (Penne & Fusilli)",
    category: "global",
    origin: "Italiano Pasta Lounge",
    desc: "Penne and Fusilli bar with choice of Sauce (Arabiatta, Pink Sauce, Alfredo) and choice of Veggies (Zucchini, Mushrooms, Cherry Tomato, Basil, Olives, Baby Corn).",
    price: "Grazing Table",
    pairing: "Chianti Classico",
    details: "Stir-fried live in copper pans."
  },
  {
    id: 111,
    title: "Spaghetti Bar",
    category: "global",
    origin: "Italiano Pasta Lounge",
    desc: "Spaghetti with choice of Sauce (Aglio-E-Olio, Fresh Tomato Basil, Chef's Special Mushroom, Italian Herb) and Add-Ons (Olives, Capers, Oregano, Parmesan, Olive Oil).",
    price: "Grazing Table",
    pairing: "Valpolicella",
    details: "Tossed inside a giant Parmesan wheel before serving."
  },
  {
    id: 112,
    title: "Pre Plated Pasta Lounge",
    category: "global",
    origin: "Italiano Pasta Lounge",
    desc: "Spinach and Ricotta Cannelloni in Pink Sauce, Spaghetti Cacio Pepe, Spaghetti Aglio Olio, Fusilli in Heirloom Tomato or Alfredo, Penne in Creamy Pesto or Arabiatta, Farfalle in Capanota, and Wild Mushroom Ravioli.",
    price: "Grazing Table",
    pairing: "Dry Vermentino",
    details: "Bespoke plated pastas styled with micro-herbs."
  },
  {
    id: 113,
    title: "Ravishing Ravioli & Baked Pasta Bar",
    category: "global",
    origin: "Italiano Pasta Lounge",
    desc: "Spinach and cheese Ravioli with creamy pesto, wild mushroom Ravioli with sage butter, Linguine & Tagliatelle, Baked Mac and Cheese, Baked Conchiglie, and Baked Cannelloni in Creamy Pesto.",
    price: "Grazing Table",
    pairing: "Riesling",
    details: "Baked inside single-serving ceramic dishes."
  },
  {
    id: 114,
    title: "The Luxurious Table (Edamame Zen Bar)",
    category: "global",
    origin: "The Luxurious Table",
    desc: "Butter and Chilli Oil Tossed Edamame, and Sea Salt Crisp Edamame in Cones.",
    price: "Grazing Table",
    pairing: "Asahi Beer",
    details: "A clean, minimalist Asian pod."
  },
  {
    id: 115,
    title: "The Luxurious Table (Gucchi Licious)",
    category: "global",
    origin: "The Luxurious Table",
    desc: "Gucchi Pilaf wrapped in Banana Leaf (aromatic Kashmiri style pulao), and Gucchi Tawa served with Malabari parantha.",
    price: "Grazing Table",
    pairing: "Full-bodied Merlot",
    details: "Sourcing premium Kashmiri gucchi mushrooms."
  },
  {
    id: 116,
    title: "The Luxurious Table (Truffle Zest & Avocado)",
    category: "global",
    origin: "The Luxurious Table",
    desc: "Wild Mushroom Risotto with White Truffle Shavings, Linguine in Mamarossa with Truffle. Avocado: Avo Pizza (cold pizza with ponzu), and Avo Cream Cheese Toast on Sourdough.",
    price: "Grazing Table",
    pairing: "Barolo Red Wine",
    details: "Truffles are hand-shaved live over the plates."
  },
  {
    id: 117,
    title: "The Luxurious Table (Plant-Based Meat)",
    category: "global",
    origin: "The Luxurious Table",
    desc: "Mock keema pilaf (minced mock keema, rice and spices), and Mock bangers and mash served with mashed potatoes and onion jus.",
    price: "Grazing Table",
    pairing: "Cabernet Sauvignon",
    details: "A premium vegan alternative."
  },
  {
    id: 118,
    title: "Pan Asian Teppanyaki Station",
    category: "global",
    origin: "Pan Asian Teppanyaki",
    desc: "Broccoli, Bokchoy, Zucchini, White Fungus, Spinach, Snow Peas, Eggplant, Tofu, and Baby Corn grilled live with choice of sauces (Yellow/Green Curry, Garlic Soy, BBQ, Teriyaki).",
    price: "Grazing Table",
    pairing: "Chilled Sake",
    details: "Griddled live on flat iron hibachis."
  },
  {
    id: 119,
    title: "Wok to Wok Noodles & Rice",
    category: "global",
    origin: "Wok to Wok",
    desc: "Noodles: Hokkien Mee, Singaporean Three Pepper, Dry Chilli Spring Onion Udon, Butter Pepper Garlic. Wok Tossed Rice: Chilli Basil Garlic, Black Pepper Sauce, and Sichuan Fried Rice.",
    price: "Grazing Table",
    pairing: "Tsingtao Beer",
    details: "Stir-fried in wok burners producing high flames."
  },
  {
    id: 120,
    title: "Wok Tossed Vegetables & Tropical Thai",
    category: "global",
    origin: "Wok to Wok",
    desc: "Stir fried green vegetables with cashews in Maii sauce. Tropical Thai: Kaeng Phet (red curry) and Kaeng Khiao Wan (green curry) served in bowls with Jasmine Rice.",
    price: "Grazing Table",
    pairing: "Off-dry Riesling",
    details: "Aromatic Thai curries simmered in coconut milk."
  },
  {
    id: 121,
    title: "Western Desserts (Tiramisu & Cheesecake)",
    category: "global",
    origin: "The Sweet Tooth",
    desc: "Flambe brownie with French vanilla, Italian Tiramisu, Blueberry Cheese Cake, Mississippi mud pie, Lemon tart, Chocolate Mousse, Banoffee pie, Yuzu Parfait, and Zaffrano Cheese Cake.",
    price: "Grazing Table",
    pairing: "Late Harvest Gewürztraminer",
    details: "Western desserts presented in shot glasses and mini tart shells."
  },
  {
    id: 122,
    title: "Western Desserts & Churros Chamber",
    category: "global",
    origin: "The Sweet Tooth",
    desc: "Dark Chocolate Rum Ball, Biscoff Pastry, Mini Opera Tart, Red Velvet, Millefeuilles. Churros Chamber: churros with choice of toppings (Chocolate, Strawberry compote, Cinnamon, Nutella, Caramel).",
    price: "Grazing Table",
    pairing: "Espresso Martini",
    details: "Hot fried churros paired with sweet compotes."
  },
  {
    id: 123,
    title: "Waffle Bar & Cold Stone Ice Cream",
    category: "global",
    origin: "Waffle Bar",
    desc: "Classic, Chocó Lovers, and Nutty Nutella Brownie Waffles. Skillet Baked Cookie. Cold Stone Ice Cream: Oreo Cookies & Cream Sundae, Blueberry-Strawberry Cream Explosion, and Nutellicious Choco Heaven.",
    price: "Grazing Table",
    pairing: "Sweet Dessert Cider",
    details: "Ice cream folded live on cold marble slabs."
  },
  {
    id: 124,
    title: "Indian Desserts & Fusion Ghewar",
    category: "global",
    origin: "Indian Desserts",
    desc: "Kesari Nano Jalebi (Live) served with Shahi Laccha Rabri. Fusion Ghewar: Malai, Chocolate, and Blueberry Ghewar topped with varieties of Rabri.",
    price: "Grazing Table",
    pairing: "Sweet Sauternes",
    details: "Nano jalebis are piped and fried live in ghee."
  },
  {
    id: 125,
    title: "Hot Desserts & Halwa Bar",
    category: "global",
    origin: "Indian Desserts",
    desc: "Stuffed Gulab Jamun, Malaidaar Malpua, Hasrat-e-Husn Blueberry, Baked gurr rasgulla, Baked boondi malai. Halwa Bar: Badam, Moong Dal, Anjeer, and Pista Halwa.",
    price: "Grazing Table",
    pairing: "Spiced Mulled Wine",
    details: "Traditional hot sweets served in clay bowls."
  },
  {
    id: 126,
    title: "Tawa Mithai & Rasmalai Counter",
    category: "global",
    origin: "Indian Desserts",
    desc: "Mini cham cham, mini rasgulla, mini malai roll, mini narial burfi, and badam launj served with honey rabri. Rasmalai: Sitaphal, Khajoor, and Strawberry rasmalai.",
    price: "Grazing Table",
    pairing: "Chilled Sweet Mead",
    details: "Sweat delicacies seared live on flat griddles."
  },
  {
    id: 127,
    title: "Cold Desserts & Rabri Sthan",
    category: "global",
    origin: "Indian Desserts",
    desc: "Kesari Rasmalai, Blue Berry Chenna Pice, Coconut Cream Surprise in coconut shell, Rose Kheer, Chilled Kesari Kumra Balls, Gurr Malai Sandwich. Rabri Sthan: Aam, Gulkand, and Strawberry Rabri served in Waffle Cones.",
    price: "Grazing Table",
    pairing: "Saffron Milk Shot",
    details: "Presented on structured ice blocks."
  },
  {
    id: 128,
    title: "Sandesh Counter & Sugar Free Sweets",
    category: "global",
    origin: "Indian Desserts",
    desc: "Sandesh Counter: Orange, Strawberry, Rose Cream, and Chikki Sandesh. Sugar Free: kalakand (paneer, milk, nuts), and dry fruit rabri. Bikaneri Sweets: madhur milan and anarkali.",
    price: "Grazing Table",
    pairing: "Rosewater Spritz",
    details: "A delicate nut-based diabetic-friendly section."
  },
  {
    id: 129,
    title: "Kulfi by The Culinary Canvas",
    category: "global",
    origin: "Indian Desserts",
    desc: "Kesar Pista Kulfi, Mango kulfi, Fruit Cream, PAAN, Anar kulfi, and Kesar Pista Kulfi Falooda with Chia Seeds. Served with: Cold Kesar Badaam Milk.",
    price: "Grazing Table",
    pairing: "Almond Milk Shake",
    details: "Kulfi blocks are sliced live and decorated with falooda."
  },
  {
    id: 130,
    title: "Tea & Coffee Selection",
    category: "global",
    origin: "Tea & Coffee",
    desc: "Teas: English breakfast, Darjeeling, Earl grey, Green, and Live Masala Chai. Coffees: Americano, Macchiato, Latte, and Cappuccino.",
    price: "Grazing Table",
    pairing: "Double Chocolate Cookies",
    details: "Masala chai prepared live in brass kettles with ginger and cinnamon."
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
