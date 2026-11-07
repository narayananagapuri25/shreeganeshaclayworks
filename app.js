/* Shree Ganesha Clay Works — product catalogue, published rate guide and WhatsApp enquiries. */
const SHOP = {
  name: "Shree Ganesha Clay Works",
  whatsappNumber: "919493404602"
};

const products = [
  {
    id: "heart-diya",
    category: "diyas",
    name: { en: "Heart-shaped diya", te: "హృదయ ఆకారపు మట్టి దీపం" },
    description: {
      en: "A small traditional diya with a heart-shaped design.",
      te: "హృదయ ఆకారంలో తయారు చేసిన సంప్రదాయ మట్టి దీపం."
    },
    categoryLabel: { en: "Clay diya", te: "మట్టి దీపం" },
    price: "₹3.00 / piece · ₹30 / dozen",
    image: "assets/products/heart-diya.jpg",
    alt: "Heart-shaped terracotta diya supplied by the shop"
  },
  {
    id: "clay-idols",
    category: "idols",
    name: { en: "Clay idols & pooja pieces", te: "మట్టి విగ్రహాలు & పూజా వస్తువులు" },
    description: {
      en: "Looking for a clay idol or pooja piece? Message us to confirm the designs, sizes and availability currently at the shop.",
      te: "మట్టి విగ్రహం లేదా పూజా వస్తువు కావాలా? ప్రస్తుతం దుకాణంలో ఉన్న నమూనాలు, సైజులు మరియు లభ్యత కోసం మాకు సందేశం పంపండి."
    },
    categoryLabel: { en: "Pooja & devotion", te: "పూజ & భక్తి" },
    price: "Enquire for current designs and price",
    image: "assets/products/store-stock.jpg",
    alt: "Shop stock at Shree Ganesha Clay Works; ask about clay idol designs"
  },
  {
    id: "plain-agul",
    category: "agul",
    name: { en: "Plain agul", te: "సాదా అగులు" },
    description: {
      en: "Traditional agul designs. Ask us about available sizes and finishes.",
      te: "సంప్రదాయ అగులు డిజైన్లు. అందుబాటులో ఉన్న సైజులు, నమూనాల కోసం అడగండి."
    },
    categoryLabel: { en: "Traditional clayware", te: "సంప్రదాయ మట్టి వస్తువులు" },
    price: "Enquire for current price",
    image: "assets/products/plain-agul.jpg",
    alt: "Plain agul clay pieces"
  },
  {
    id: "stand-agul",
    category: "stand",
    name: { en: "Stand agul", te: "స్టాండ్ అగులు" },
    description: {
      en: "Stand designs in different numbered sizes, as shown in the shop's catalogue.",
      te: "దుకాణం కేటలాగ్‌లో చూపిన వివిధ నంబర్ల సైజుల్లో స్టాండ్ అగులు."
    },
    categoryLabel: { en: "Stand designs", te: "స్టాండ్ నమూనాలు" },
    price: "₹8–₹40 / piece · variants differ",
    image: "assets/products/stand-agul.jpg",
    alt: "Terracotta stand agul from the shop"
  },
  {
    id: "simini",
    category: "simini",
    name: { en: "B/Simini & C/Simini lamps", te: "బి / సి సిమిని దీపాలు" },
    description: {
      en: "Clay simini lamp bases. Please ask about the glass chimney and current combinations.",
      te: "మట్టి సిమిని దీపాల బేస్‌లు. గాజు చిమ్నీ మరియు అందుబాటులో ఉన్న రకాల గురించి అడగండి."
    },
    categoryLabel: { en: "Clay lamps", te: "మట్టి దీపాలు" },
    price: "C/Simini ₹50 · B/Simini ₹60",
    image: "assets/products/simini.jpg",
    alt: "Traditional clay simini lamp base"
  },
  {
    id: "cooking-vessels",
    category: "pots",
    name: { en: "Clay cooking vessels", te: "మట్టి వంట పాత్రలు" },
    description: {
      en: "Cooking vessels listed in the supplied rate chart, from ½ litre to 5 litres.",
      te: "సరఫరా చేసిన ధరల పట్టికలో ఉన్న ½ లీటర్ నుంచి 5 లీటర్ల వంట పాత్రలు."
    },
    categoryLabel: { en: "Kitchen collection", te: "వంటగది సేకరణ" },
    price: "₹100–₹300 / piece · capacity varies",
    image: "assets/products/cooking-vessels.jpg",
    alt: "Clay cooking vessel shown in the shop rate chart"
  },
  {
    id: "water-pots",
    category: "pots",
    name: { en: "Clay water pots & Ranjan", te: "మట్టి నీటి కుండలు & రంజన్" },
    description: {
      en: "Water pots listed in 8, 12, 15 and 20 litre sizes, plus Ranjan.",
      te: "8, 12, 15, 20 లీటర్ల నీటి కుండలు మరియు రంజన్."
    },
    categoryLabel: { en: "Home essentials", te: "ఇంటి అవసరాలు" },
    price: "₹150–₹300 / pot · Ranjan ₹250–₹300",
    image: "assets/products/water-pots.jpg",
    alt: "Traditional clay water pot shown in the shop rate chart"
  }
];

const rateGroups = [
  {
    title: { en: "Numbered diyas", te: "నంబర్ మట్టి దీపాలు" },
    rows: [
      ["Diya No. 1", "₹1.50", "₹15"],
      ["Diya No. 2", "₹2.00", "₹20"],
      ["Diya No. 3", "₹2.50", "₹25"],
      ["Diya No. 4", "₹3.00", "₹30"],
      ["Diya No. 5", "₹4.00", "₹40"],
      ["Diya No. 6", "₹7.00", "₹70"],
      ["Diya No. 7", "₹9.00", "₹90"],
      ["Diya No. 8", "₹15.00", "₹150"],
      ["Diya No. 9", "₹18.00", "₹180"],
      ["Diya No. 10", "₹20.00", "₹200"],
      ["Diya No. 12", "₹35.00", "₹350"],
      ["1/2 Ltr", "₹75.00", "₹750"]
    ]
  },
  {
    title: { en: "Special diyas & designs", te: "ప్రత్యేక మట్టి దీపాలు & నమూనాలు" },
    rows: [
      ["Colour Diya — Single", "₹12.00", "₹120"],
      ["Colour Diya — Double", "₹25.00", "₹250"],
      ["Colour Diya — 4 Face", "₹50.00", "₹500"],
      ["Pot & Thulasi", "₹100.00", "₹1,000"],
      ["Heart Shape", "₹3.00", "₹30"],
      ["No. 4 Stand", "₹8.00", "₹80"],
      ["No. 5 Stand", "₹10.00", "₹100"],
      ["No. 6 Stand", "₹15.00", "₹150"],
      ["No. 7 Stand", "₹20.00", "₹200"],
      ["No. 8 Stand", "₹25.00", "₹250"],
      ["B/Star", "₹6.00", "₹60"],
      ["No. 7 Star", "₹10.00", "₹100"],
      ["No. 10 Star", "₹20.00", "₹200"],
      ["C/Stand", "₹25.00", "₹250"],
      ["B/Stand", "₹40.00", "₹400"],
      ["No. 5 Star Stand", "₹10.00", "₹100"],
      ["Cone", "₹45.00", "₹450"],
      ["B/Tulasi", "₹30.00", "₹300"],
      ["C/Simini", "₹50.00", "₹500"],
      ["B/Simini", "₹60.00", "₹600"]
    ]
  },
  {
    title: { en: "Clay cooking vessels", te: "మట్టి వంట పాత్రలు" },
    noDozen: true,
    rows: [
      ["5 L", "₹300", ""],
      ["3 L", "₹250", ""],
      ["2 L", "₹200", ""],
      ["1 L", "₹150", ""],
      ["1/2 L", "₹100", ""]
    ]
  },
  {
    title: { en: "Clay water pots · నీటి కుండలు", te: "మట్టి నీటి కుండలు" },
    noDozen: true,
    rows: [
      ["20 L", "₹300", ""],
      ["15 L", "₹250", ""],
      ["12 L", "₹200", ""],
      ["8 L", "₹150", ""],
      ["Ranjan", "₹250–₹300", ""]
    ]
  }
];

const translations = {
  en: {
    announcement: "Traditional clayware • Mancherial, Telangana",
    announcementLink: "Visit our store",
    navHome: "Home", navProducts: "Collections", navRates: "Rate chart", navStory: "Our story", navVisit: "Visit us",
    navEnquire: "Enquire on WhatsApp", heroEyebrow: "THE BEAUTY OF EARTHEN CRAFT",
    heroTitle: "Made of earth.<br><em>Rooted in tradition.</em>",
    heroText: "Explore traditional diyas, agul, simini lamps, cooking vessels and water pots from our Mancherial store.",
    exploreButton: "Explore collections", visitButton: "Find our store",
    heroNote: "A celebration of clay, culture & everyday living",
    stripOne: "Clay for your home", stripTwo: "Tradition for your rituals", stripThree: "Warmth for your table", stripFour: "A store to explore",
    categoryEyebrow: "EXPLORE THE STORE", categoryTitle: "Find your kind<br><em>of clay.</em>",
    categoryText: "Browse real product photographs from our store, then contact us directly for current designs and availability.",
    category01: "POOJA & FESTIVAL", category02: "TRADITIONAL DESIGNS", category03: "STAND DESIGNS",
    category04: "LAMPS & SIMINI", category05: "KITCHEN & HOME", category06: "HOME ESSENTIALS", category07: "POOJA & DEVOTION",
    catDiyas: "Clay diyas", catAgul: "Agul", catStand: "Stand agul", catSimini: "Simini lamps",
    catCookware: "Cooking ware", catWater: "Water pots", catIdols: "Clay idols & pooja",
    collectionEyebrow: "A CLOSER LOOK", collectionTitle: "A collection for<br><em>every occasion.</em>",
    collectionText: "A selection of product types from Shree Ganesha Clay Works. Message us to confirm designs, sizes and availability.",
    filterAll: "All collections", searchPlaceholder: "Search collections",
    emptyState: "No matching collections. Try another search.",
    collectionFootnote: "Pack quantities appearing in some shared product photos are reference pack sizes only, not a live stock count.",
    rateEyebrow: "SHOP PRICE GUIDE", rateTitle: "A clear price for<br><em>every little light.</em>",
    rateIntro: "Prices below are transcribed from the rate chart supplied by the shop. Choose a design, then message us to confirm today's rate and availability.",
    rateDisclaimer: "Prices are from the supplied rate chart and may change. Please confirm the current price, quantity and availability on WhatsApp before visiting or placing an order. Dozen prices are shown exactly as printed in the chart.",
    rateItem: "Product / size", rateSingle: "Single piece", rateDozen: "Dozen",
    rateAsk: "Ask about this item", rateEnquire: "WhatsApp", rateEnquireAction: "Ask",
    storyImageCaption: "A look inside our store", storyEyebrow: "OUR LOVE FOR CLAY",
    storyTitle: "Some things feel<br>like <em>coming home.</em>",
    storyText: "Clay has always been part of the way we cook, celebrate, pray and bring warmth into our homes. At Shree Ganesha Clay Works, we bring together traditional clay products for everyday moments and special occasions.",
    storyTextTwo: "Step inside, explore the collections and talk to us about the pieces you are looking for. We will be happy to help you find the right one.",
    storyLink: "Come by and say hello", valuesEyebrow: "THE SIMPLE THINGS MATTER",
    valuesTitle: "A little more earth.<br><em>A little more meaning.</em>",
    valueOneTitle: "A timeless tradition", valueOneText: "Clay pieces connected to familiar rituals and everyday life.",
    valueTwoTitle: "For many moments", valueTwoText: "From the kitchen and pooja room to celebrations and gifting.",
    valueThreeTitle: "Personal assistance", valueThreeText: "Talk to us directly about designs, sizes and availability.",
    visitEyebrow: "COME VISIT US", visitTitle: "The store is<br><em>closer than you think.</em>",
    visitText: "We would love to welcome you. Visit our store to explore the collections in person, or message us before you come.",
    addressLabel: "FIND OUR STORE", directionsButton: "Get directions", messageButton: "Message the store",
    visitCardTitle: "LET'S TALK CLAY",
    visitCardText: "Questions about a product or looking for something specific? We are just a message away.",
    phoneLabel: "CALL / WHATSAPP", secondPhoneLabel: "ALTERNATE NUMBER (AS PRINTED)", whatsappButton: "Chat with us on WhatsApp",
    contactNote: "The alternate number is displayed as printed on the shop poster. Enquiries through this website go to the primary WhatsApp number.",
    closingEyebrow: "SHREE GANESHA CLAY WORKS · MANCHERIAL",
    closingTitle: "Choose clay.<br><em>Keep tradition close.</em>",
    closingLink: "Explore the collections", footerTagline: "Experience the tradition of clay.",
    footerLocation: "Mancherial, Telangana, India", backTop: "Back to top ↑", floatingWhatsapp: "WhatsApp us"
  },
  te: {
    announcement: "సంప్రదాయ మట్టి వస్తువులు • మంచిర్యాల, తెలంగాణ",
    announcementLink: "మా దుకాణాన్ని సందర్శించండి",
    navHome: "హోమ్", navProducts: "సేకరణలు", navRates: "ధరల పట్టిక", navStory: "మా గురించి", navVisit: "మా దుకాణం",
    navEnquire: "వాట్సాప్‌లో అడగండి", heroEyebrow: "మట్టి కళలోని అందం",
    heroTitle: "మట్టితో రూపం.<br><em>సంప్రదాయమే మా బలం.</em>",
    heroText: "మంచిర్యాలలోని మా దుకాణంలో సంప్రదాయ దీపాలు, అగులు, సిమిని దీపాలు, వంట పాత్రలు మరియు నీటి కుండలను చూడండి.",
    exploreButton: "సేకరణలను చూడండి", visitButton: "మా దుకాణం",
    heroNote: "మట్టి, సంస్కృతి మరియు రోజువారీ జీవనానికి ఒక వేడుక",
    stripOne: "మీ ఇంటి కోసం మట్టి వస్తువులు", stripTwo: "మీ ఆచారాలకు సంప్రదాయం", stripThree: "మీ భోజనానికి ప్రత్యేకత", stripFour: "సందర్శించదగిన దుకాణం",
    categoryEyebrow: "మా దుకాణాన్ని చూడండి", categoryTitle: "మీకు నచ్చిన<br><em>మట్టి వస్తువులు.</em>",
    categoryText: "మా దుకాణంలోని నిజమైన ఉత్పత్తుల ఫోటోలను చూడండి. ప్రస్తుత నమూనాలు, సైజులు మరియు లభ్యత కోసం నేరుగా మమ్మల్ని సంప్రదించండి.",
    category01: "పూజ & పండుగలు", category02: "సంప్రదాయ నమూనాలు", category03: "స్టాండ్ నమూనాలు",
    category04: "దీపాలు & సిమిని", category05: "వంటగది & ఇల్లు", category06: "ఇంటి అవసరాలు", category07: "పూజ & భక్తి",
    catDiyas: "మట్టి దీపాలు", catAgul: "అగులు", catStand: "స్టాండ్ అగులు", catSimini: "సిమిని దీపాలు",
    catCookware: "వంట పాత్రలు", catWater: "నీటి కుండలు", catIdols: "మట్టి విగ్రహాలు & పూజా వస్తువులు",
    collectionEyebrow: "మరింత దగ్గరగా చూడండి", collectionTitle: "ప్రతి సందర్భానికి<br><em>ఒక సేకరణ.</em>",
    collectionText: "ష్రీ గణేశ క్లే వర్క్స్‌లో లభించే కొన్ని ఉత్పత్తుల రకాలు. నమూనాలు, సైజులు మరియు లభ్యత నిర్ధారించుకోవడానికి మాకు సందేశం పంపండి.",
    filterAll: "అన్ని సేకరణలు", searchPlaceholder: "సేకరణలను వెతకండి",
    emptyState: "సరిపోలే సేకరణలు లేవు. మరో పదంతో వెతకండి.",
    collectionFootnote: "కొన్ని ఉత్పత్తుల ఫోటోలలో కనిపించే బ్యాగ్ లేదా బాక్స్ పరిమాణాలు సూచన మాత్రమే; అవి ప్రస్తుత స్టాక్ సంఖ్యలు కావు.",
    rateEyebrow: "దుకాణం ధరల గైడ్", rateTitle: "ప్రతి దీపానికి<br><em>స్పష్టమైన ధర.</em>",
    rateIntro: "దుకాణం అందించిన ధరల పట్టిక నుంచి క్రింది ధరలను నమోదు చేశాము. ప్రస్తుత ధర మరియు లభ్యత కోసం వాట్సాప్‌లో నిర్ధారించుకోండి.",
    rateDisclaimer: "ఈ ధరలు అందించిన ధరల పట్టిక ఆధారంగా ఉన్నాయి; మారవచ్చు. ఆర్డర్ లేదా దుకాణ సందర్శనకు ముందు ప్రస్తుత ధర, పరిమాణం మరియు లభ్యతను వాట్సాప్‌లో నిర్ధారించుకోండి. డజను ధరలు పట్టికలో ఉన్నట్లుగానే చూపించబడ్డాయి.",
    rateItem: "వస్తువు / సైజు", rateSingle: "ఒక్కటి", rateDozen: "డజను",
    rateAsk: "ఈ వస్తువు గురించి అడగండి", rateEnquire: "WhatsApp", rateEnquireAction: "అడగండి",
    storyImageCaption: "మా దుకాణంలోని ఒక చూపు", storyEyebrow: "మట్టిపై మా అభిమానం",
    storyTitle: "కొన్ని వస్తువులు<br><em>ఇంటిలా అనిపిస్తాయి.</em>",
    storyText: "వంట, పండుగలు, పూజలు మరియు మన ఇళ్లలో ఆప్యాయతను నింపడంలో మట్టికి ఎప్పటి నుంచో ప్రత్యేక స్థానం ఉంది. ష్రీ గణేశ క్లే వర్క్స్‌లో రోజువారీ అవసరాలు మరియు ప్రత్యేక సందర్భాల కోసం సంప్రదాయ మట్టి వస్తువులను అందిస్తున్నాము.",
    storyTextTwo: "మా దుకాణానికి వచ్చి సేకరణలను చూడండి. మీకు కావలసిన వస్తువుల గురించి మాతో మాట్లాడండి. సరైన వస్తువును ఎంచుకోవడంలో సంతోషంగా సహాయం చేస్తాము.",
    storyLink: "మా దుకాణానికి రండి", valuesEyebrow: "చిన్న విషయాలకూ విలువ ఉంది",
    valuesTitle: "మట్టికి దగ్గరగా.<br><em>సంప్రదాయానికి మరింత దగ్గరగా.</em>",
    valueOneTitle: "ఎప్పటికీ నిలిచే సంప్రదాయం", valueOneText: "మన ఆచారాలు మరియు రోజువారీ జీవితంతో ముడిపడిన మట్టి వస్తువులు.",
    valueTwoTitle: "అనేక సందర్భాల కోసం", valueTwoText: "వంటగది, పూజ గది, పండుగలు మరియు కానుకల కోసం.",
    valueThreeTitle: "వ్యక్తిగత సహాయం", valueThreeText: "డిజైన్లు, సైజులు మరియు లభ్యత గురించి నేరుగా మాతో మాట్లాడండి.",
    visitEyebrow: "మా దుకాణానికి రండి", visitTitle: "మీకు దగ్గరలోనే<br><em>మా దుకాణం ఉంది.</em>",
    visitText: "మిమ్మల్ని స్వాగతించడానికి మేము సిద్ధంగా ఉన్నాము. సేకరణలను ప్రత్యక్షంగా చూడటానికి దుకాణానికి రండి లేదా ముందుగా మాకు సందేశం పంపండి.",
    addressLabel: "మా దుకాణం చిరునామా", directionsButton: "దారి తెలుసుకోండి", messageButton: "దుకాణానికి సందేశం పంపండి",
    visitCardTitle: "మట్టి వస్తువుల గురించి మాట్లాడుకుందాం",
    visitCardText: "ఏదైనా వస్తువు గురించి వివరాలు కావాలా? మీకు కావలసినది వెతుకుతున్నారా? మేము ఒక సందేశం దూరంలో ఉన్నాము.",
    phoneLabel: "ఫోన్ / వాట్సాప్", secondPhoneLabel: "పోస్టర్‌లో ముద్రించిన ప్రత్యామ్నాయ నంబర్", whatsappButton: "వాట్సాప్‌లో మాట్లాడండి",
    contactNote: "ప్రత్యామ్నాయ నంబర్ దుకాణం పోస్టర్‌లో ఉన్నట్లుగానే చూపించబడింది. ఈ వెబ్‌సైట్ ద్వారా పంపే వాట్సాప్ సందేశాలు ప్రధాన నంబర్‌కు వెళ్తాయి.",
    closingEyebrow: "ష్రీ గణేశ క్లే వర్క్స్ · మంచిర్యాల",
    closingTitle: "మట్టిని ఎంచుకోండి.<br><em>సంప్రదాయాన్ని నిలుపుకోండి.</em>",
    closingLink: "సేకరణలను చూడండి", footerTagline: "మట్టి సంప్రదాయాన్ని అనుభవించండి.",
    footerLocation: "మంచిర్యాల, తెలంగాణ, భారతదేశం", backTop: "పైకి వెళ్లండి ↑", floatingWhatsapp: "వాట్సాప్ చేయండి"
  }
};

let activeLanguage = "en";
let activeFilter = "all";
let searchTerm = "";

const productGrid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("product-search");
const rateGroupsElement = document.getElementById("rate-groups");

function waUrl(message) {
  return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(message);
}

function generalMessage() {
  return "Hello " + SHOP.name + "! I would like to know more about your clay products. Please share current designs, prices and availability.";
}

function applyWhatsAppLinks() {
  document.querySelectorAll("[data-whatsapp='general']").forEach(function (link) {
    link.href = waUrl(generalMessage());
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function renderProducts() {
  const language = activeLanguage;
  const visible = products.filter(function (product) {
    const matchesFilter = activeFilter === "all" || product.category === activeFilter;
    const searchable = [
      product.name.en, product.name.te, product.description.en, product.description.te,
      product.categoryLabel.en, product.categoryLabel.te, product.price
    ].join(" ").toLowerCase();
    return matchesFilter && searchable.includes(searchTerm);
  });

  productGrid.innerHTML = visible.map(function (product) {
    const message = "Hello " + SHOP.name + "! I am interested in " + product.name.en + ". Please confirm the current price, available designs and stock.";
    return '<article class="product-card">' +
      '<div class="product-image-wrap">' +
      '<img src="' + product.image + '" alt="' + product.alt + '" loading="lazy">' +
      '<span class="product-tag">' + product.categoryLabel[language] + '</span>' +
      '</div>' +
      '<div class="product-card-body">' +
      '<span class="product-card-category">' + product.categoryLabel[language] + '</span>' +
      '<h3>' + product.name[language] + '</h3>' +
      '<p>' + product.description[language] + '</p>' +
      '<div class="product-price">' + product.price + '</div>' +
      '<a class="product-card-action" href="' + waUrl(message) + '" target="_blank" rel="noopener noreferrer">' +
      '<span>' + translations[language].rateAsk + '</span><span aria-hidden="true">↗</span></a>' +
      '</div></article>';
  }).join("");

  productGrid.querySelectorAll("img").forEach(function (imageElement) {
    imageElement.addEventListener("error", function () {
      imageElement.closest(".product-image-wrap").classList.add("image-failed");
    }, { once: true });
  });
  emptyState.hidden = visible.length !== 0;
}

function renderRateGroups() {
  const language = activeLanguage;
  rateGroupsElement.innerHTML = rateGroups.map(function (group) {
    const rows = group.rows.map(function (row) {
      const rateSummary = group.noDozen
        ? row[1]
        : row[1] + " per piece / " + row[2] + " per dozen";
      const message = "Hello " + SHOP.name + "! I would like to enquire about " +
        row[0] + " (printed rate: " + rateSummary +
        "). Please confirm today's price, available quantity and stock.";
      return '<tr><th scope="row">' + row[0] + '</th><td>' + row[1] + '</td>' +
        (group.noDozen ? '' : '<td>' + row[2] + '</td>') +
        '<td><a class="rate-enquire" href="' + waUrl(message) +
        '" target="_blank" rel="noopener noreferrer">' +
        translations[language].rateEnquireAction + '<span aria-hidden="true"> ↗</span></a></td></tr>';
    }).join("");
    return '<section class="rate-card"><h3>' + group.title[language] + '</h3><div class="rate-table-wrap">' +
      '<table class="rate-table"><thead><tr><th scope="col">' + translations[language].rateItem + '</th>' +
      '<th scope="col">' + translations[language].rateSingle + '</th>' +
      (group.noDozen ? '' : '<th scope="col">' + translations[language].rateDozen + '</th>') +
      '<th scope="col">' + translations[language].rateEnquire + '</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div></section>';
  }).join("");
}

function setLanguage(language) {
  if (!translations[language]) return;
  activeLanguage = language;
  document.documentElement.lang = language === "te" ? "te" : "en";

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    if (translations[language][key] !== undefined) element.innerHTML = translations[language][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[language][key] !== undefined) element.placeholder = translations[language][key];
  });
  document.querySelectorAll("[data-lang]").forEach(function (button) {
    const selected = button.getAttribute("data-lang") === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderProducts();
  renderRateGroups();
}

document.querySelectorAll("[data-filter]").forEach(function (button) {
  button.setAttribute("aria-pressed", String(button.getAttribute("data-filter") === activeFilter));
  button.addEventListener("click", function () {
    activeFilter = button.getAttribute("data-filter");
    document.querySelectorAll("[data-filter]").forEach(function (item) {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderProducts();
  });
});

document.querySelectorAll("[data-category-link]").forEach(function (link) {
  link.addEventListener("click", function () {
    searchInput.value = "";
    searchTerm = "";
    activeFilter = link.getAttribute("data-category-link");
    const matchingFilter = document.querySelector('[data-filter="' + activeFilter + '"]');
    if (matchingFilter) matchingFilter.click();
  });
});

searchInput.addEventListener("input", function () {
  searchTerm = searchInput.value.trim().toLocaleLowerCase();
  renderProducts();
});

document.querySelectorAll("[data-lang]").forEach(function (button) {
  button.addEventListener("click", function () {
    setLanguage(button.getAttribute("data-lang"));
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

function closeMenu() {
  primaryNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

menuToggle.addEventListener("click", function () {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  primaryNav.classList.toggle("is-open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
});

primaryNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", function (event) {
  if (!primaryNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeMenu();
});

document.getElementById("current-year").textContent = new Date().getFullYear();
applyWhatsAppLinks();
renderProducts();
renderRateGroups();
