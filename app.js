/* Shree Ganesha Clay Works — lightweight catalogue and WhatsApp enquiries.
   Update the primary WhatsApp number here after the owner confirms it. */
const SHOP = {
  name: "Shree Ganesha Clay Works",
  whatsappNumber: "919493404602",
  alternatePhone: "+9185558596577"
};

const products = [
  {
    id: "clay-idols",
    category: "idols",
    name: { en: "Clay idols for home & pooja", te: "ఇంటి పూజ కోసం మట్టి విగ్రహాలు" },
    description: {
      en: "Ask us about the available traditional idols, designs and sizes.",
      te: "అందుబాటులో ఉన్న సంప్రదాయ విగ్రహాలు, డిజైన్లు మరియు సైజుల గురించి అడగండి."
    },
    categoryLabel: { en: "Devotion & decor", te: "పూజ & అలంకరణ" },
    tag: { en: "Explore the range", te: "సేకరణను చూడండి" },
    image: "https://images.unsplash.com/photo-1708368951853-3f33c050e687?auto=format&fit=crop&w=900&q=82",
    alt: "Earth-toned clay pottery display"
  },
  {
    id: "diyas",
    category: "diyas",
    name: { en: "Traditional diyas & lamps", te: "సంప్రదాయ మట్టి దీపాలు" },
    description: {
      en: "Explore clay lamps and festive pieces for pooja and celebrations.",
      te: "పూజలు మరియు పండుగల కోసం మట్టి దీపాలు, అలంకరణ వస్తువులను చూడండి."
    },
    categoryLabel: { en: "Light & celebration", te: "వెలుగు & వేడుకలు" },
    tag: { en: "Festive favourites", te: "పండుగ ప్రత్యేకం" },
    image: "https://images.unsplash.com/photo-1755752914975-196f46552b7c?auto=format&fit=crop&w=900&q=82",
    alt: "Decorative terracotta diyas"
  },
  {
    id: "cookware",
    category: "cookware",
    name: { en: "Clay cooking vessels", te: "మట్టి వంట పాత్రలు" },
    description: {
      en: "Ask about traditional cooking pots, handi and other kitchenware.",
      te: "సంప్రదాయ వంట కుండలు, హాండీలు మరియు ఇతర వంట పాత్రల గురించి అడగండి."
    },
    categoryLabel: { en: "For the kitchen", te: "వంటగది కోసం" },
    tag: { en: "Everyday cooking", te: "రోజువారీ వంట" },
    image: "https://images.unsplash.com/photo-1749359669134-289058a33c63?auto=format&fit=crop&w=900&q=82",
    alt: "Clay cooking pot over a small fire"
  },
  {
    id: "water",
    category: "water",
    name: { en: "Earthen water pots", te: "మట్టి కుండలు" },
    description: {
      en: "Ask us about water pots, matkas, lids and available capacities.",
      te: "నీటి కుండలు, మూతలు మరియు అందుబాటులో ఉన్న పరిమాణాల గురించి అడగండి."
    },
    categoryLabel: { en: "Home essentials", te: "ఇంటి అవసరాలు" },
    tag: { en: "Explore sizes", te: "సైజులు తెలుసుకోండి" },
    image: "https://images.unsplash.com/photo-1755798321597-06341c6c7dee?auto=format&fit=crop&w=900&q=82",
    alt: "Traditional terracotta pot with lid"
  },
  {
    id: "tableware",
    category: "tableware",
    name: { en: "Cups, bowls & tableware", te: "మట్టి కప్పులు, గిన్నెలు & పాత్రలు" },
    description: {
      en: "Discover clay cups, bowls, serving pieces and other tableware.",
      te: "మట్టి కప్పులు, గిన్నెలు, వడ్డించే పాత్రలు మరియు ఇతర వస్తువులను చూడండి."
    },
    categoryLabel: { en: "Gather around", te: "కలిసి భోజనం" },
    tag: { en: "For the table", te: "భోజనపు బల్ల కోసం" },
    image: "https://images.unsplash.com/photo-1708368951853-3f33c050e687?auto=format&fit=crop&w=900&q=82",
    alt: "Clay bowls and traditional vessels"
  },
  {
    id: "garden",
    category: "garden",
    name: { en: "Garden & home pieces", te: "తోట & ఇంటి అలంకరణ వస్తువులు" },
    description: {
      en: "Ask about clay planters, decorative pots and other home pieces.",
      te: "మట్టి మొక్కల కుండీలు, అలంకరణ కుండీలు మరియు ఇతర వస్తువుల గురించి అడగండి."
    },
    categoryLabel: { en: "A touch of earth", te: "మట్టితో అందం" },
    tag: { en: "For your space", te: "మీ ఇంటి కోసం" },
    image: "https://images.unsplash.com/photo-1755798321597-06341c6c7dee?auto=format&fit=crop&w=900&q=82",
    alt: "Earth-toned terracotta vessels"
  }
];

const translations = {
  en: {
    announcement: "Traditional clayware • Mancherial, Telangana",
    announcementLink: "Visit our store",
    navHome: "Home", navProducts: "Collections", navStory: "Our story", navVisit: "Visit us",
    navEnquire: "Enquire on WhatsApp", heroEyebrow: "THE BEAUTY OF EARTHEN CRAFT",
    heroTitle: "Made of earth.<br><em>Rooted in tradition.</em>",
    heroText: "Discover clay idols, diyas, cooking ware and timeless pieces that bring a little more meaning to everyday moments.",
    exploreButton: "Explore collections", visitButton: "Find our store",
    heroNote: "A celebration of clay, culture & everyday living",
    stripOne: "Clay for your home", stripTwo: "Tradition for your rituals", stripThree: "Warmth for your table", stripFour: "A store to explore",
    categoryEyebrow: "EXPLORE THE STORE", categoryTitle: "Find your kind<br><em>of clay.</em>",
    categoryText: "From meaningful little details to pieces made for everyday use, find a collection that feels at home with you.",
    category01: "DEVOTION & DECOR", category02: "LIGHT & CELEBRATION", category03: "MADE FOR THE KITCHEN",
    category04: "EVERYDAY ESSENTIALS", category05: "GATHER AROUND", category06: "A TOUCH OF EARTH",
    catIdols: "Clay idols", catDiyas: "Diyas & lamps", catCookware: "Cooking ware",
    catWater: "Water pots", catTableware: "Cups & tableware", catGarden: "Garden & home",
    collectionEyebrow: "A CLOSER LOOK", collectionTitle: "A collection for<br><em>every occasion.</em>",
    collectionText: "Browse a few of the collections you can explore at our store. Message us to check current designs, sizes and availability.",
    filterAll: "All collections", searchPlaceholder: "Search collections",
    emptyState: "No matching collections. Try another search.",
    collectionFootnote: "These are representative collection examples. Please enquire for actual designs, sizes, prices and availability.",
    storyImageCaption: "The timeless touch of clay", storyEyebrow: "OUR LOVE FOR CLAY",
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
    phoneLabel: "CALL / WHATSAPP", secondPhoneLabel: "ALTERNATE CONTACT", whatsappButton: "Chat with us on WhatsApp",
    contactNote: "Availability and response times may vary. We will confirm your enquiry directly.",
    closingEyebrow: "SHREE GANESHA CLAY WORKS · MANCHERIAL",
    closingTitle: "Choose clay.<br><em>Keep tradition close.</em>",
    closingLink: "Explore the collections", footerTagline: "Experience the tradition of clay.",
    footerLocation: "Mancherial, Telangana, India", backTop: "Back to top ↑", floatingWhatsapp: "WhatsApp us",
    askCollection: "Ask about this collection", exploreRange: "Explore the range"
  },
  te: {
    announcement: "సంప్రదాయ మట్టి వస్తువులు • మంచిర్యాల, తెలంగాణ",
    announcementLink: "మా దుకాణాన్ని సందర్శించండి",
    navHome: "హోమ్", navProducts: "సేకరణలు", navStory: "మా గురించి", navVisit: "మా దుకాణం",
    navEnquire: "వాట్సాప్‌లో అడగండి", heroEyebrow: "మట్టి కళలోని అందం",
    heroTitle: "మట్టితో రూపం.<br><em>సంప్రదాయమే మా బలం.</em>",
    heroText: "మట్టి విగ్రహాలు, దీపాలు, వంట పాత్రలు మరియు రోజువారీ జీవితానికి ప్రత్యేకతనిచ్చే సంప్రదాయ వస్తువులను చూడండి.",
    exploreButton: "సేకరణలను చూడండి", visitButton: "మా దుకాణం",
    heroNote: "మట్టి, సంస్కృతి మరియు రోజువారీ జీవనానికి ఒక వేడుక",
    stripOne: "మీ ఇంటి కోసం మట్టి వస్తువులు", stripTwo: "మీ ఆచారాలకు సంప్రదాయం", stripThree: "మీ భోజనానికి ప్రత్యేకత", stripFour: "సందర్శించదగిన దుకాణం",
    categoryEyebrow: "మా దుకాణాన్ని చూడండి", categoryTitle: "మీకు నచ్చిన<br><em>మట్టి వస్తువులు.</em>",
    categoryText: "రోజువారీ అవసరాల నుంచి ప్రత్యేక సందర్భాల వరకు, మీకు నచ్చిన సేకరణను ఎంచుకోండి.",
    category01: "పూజ & అలంకరణ", category02: "వెలుగు & వేడుకలు", category03: "వంటగది కోసం",
    category04: "రోజువారీ అవసరాలు", category05: "భోజనపు బల్ల కోసం", category06: "మట్టితో అందం",
    catIdols: "మట్టి విగ్రహాలు", catDiyas: "మట్టి దీపాలు", catCookware: "వంట పాత్రలు",
    catWater: "నీటి కుండలు", catTableware: "కప్పులు & పాత్రలు", catGarden: "తోట & ఇల్లు",
    collectionEyebrow: "మరింత దగ్గరగా చూడండి", collectionTitle: "ప్రతి సందర్భానికి<br><em>ఒక సేకరణ.</em>",
    collectionText: "మా దుకాణంలో చూడగలిగే కొన్ని సేకరణలను ఇక్కడ చూడండి. ప్రస్తుత డిజైన్లు, సైజులు మరియు లభ్యత కోసం మాకు సందేశం పంపండి.",
    filterAll: "అన్ని సేకరణలు", searchPlaceholder: "సేకరణలను వెతకండి",
    emptyState: "సరిపోలే సేకరణలు లేవు. మరో పదంతో వెతకండి.",
    collectionFootnote: "ఇవి సేకరణలకు ఉదాహరణలు మాత్రమే. అసలు డిజైన్లు, సైజులు, ధరలు మరియు లభ్యత కోసం దయచేసి అడగండి.",
    storyImageCaption: "మట్టికి ఎప్పటికీ నిలిచే అందం", storyEyebrow: "మట్టిపై మా అభిమానం",
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
    phoneLabel: "ఫోన్ / వాట్సాప్", secondPhoneLabel: "మరో సంప్రదింపు నంబర్", whatsappButton: "వాట్సాప్‌లో మాట్లాడండి",
    contactNote: "లభ్యత మరియు స్పందన సమయం మారవచ్చు. మీ వివరాలను మేము నేరుగా నిర్ధారిస్తాము.",
    closingEyebrow: "ష్రీ గణేశ క్లే వర్క్స్ · మంచిర్యాల",
    closingTitle: "మట్టిని ఎంచుకోండి.<br><em>సంప్రదాయాన్ని నిలుపుకోండి.</em>",
    closingLink: "సేకరణలను చూడండి", footerTagline: "మట్టి సంప్రదాయాన్ని అనుభవించండి.",
    footerLocation: "మంచిర్యాల, తెలంగాణ, భారతదేశం", backTop: "పైకి వెళ్లండి ↑", floatingWhatsapp: "వాట్సాప్ చేయండి",
    askCollection: "ఈ సేకరణ గురించి అడగండి", exploreRange: "సేకరణను చూడండి"
  }
};

let activeLanguage = "en";
let activeFilter = "all";
let searchTerm = "";

const productGrid = document.getElementById("product-grid");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("product-search");

function waUrl(message) {
  return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(message);
}

function generalMessage() {
  return "Hello " + SHOP.name + "! I would like to know more about your clay products and current collections. Please share details and availability.";
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
      product.categoryLabel.en, product.categoryLabel.te
    ].join(" ").toLowerCase();
    return matchesFilter && searchable.includes(searchTerm);
  });

  productGrid.innerHTML = visible.map(function (product) {
    const name = product.name[language];
    const description = product.description[language];
    const categoryLabel = product.categoryLabel[language];
    const tag = product.tag[language];
    const action = translations[language].askCollection;
    const message = "Hello " + SHOP.name + "! I am interested in your " + product.name.en + " collection. Please share current designs, sizes, prices and availability.";
    const image = product.image;
    return '<article class="product-card">' +
      '<div class="product-image-wrap">' +
      '<img src="' + image + '" alt="' + product.alt + '" loading="lazy" onerror="this.style.opacity=0">' +
      '<span class="product-tag">' + tag + '</span>' +
      '</div>' +
      '<div class="product-card-body">' +
      '<span class="product-card-category">' + categoryLabel + '</span>' +
      '<h3>' + name + '</h3>' +
      '<p>' + description + '</p>' +
      '<a class="product-card-action" href="' + waUrl(message) + '" target="_blank" rel="noopener noreferrer">' +
      '<span>' + action + '</span><span aria-hidden="true">↗</span></a>' +
      '</div></article>';
  }).join("");

  emptyState.hidden = visible.length !== 0;
}

function setLanguage(language) {
  if (!translations[language]) return;
  activeLanguage = language;
  document.documentElement.lang = language === "te" ? "te" : "en";

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    if (translations[language][key] !== undefined) {
      element.innerHTML = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[language][key] !== undefined) {
      element.placeholder = translations[language][key];
    }
  });

  document.querySelectorAll("[data-lang]").forEach(function (button) {
    const selected = button.getAttribute("data-lang") === language;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  renderProducts();
}

document.querySelectorAll("[data-filter]").forEach(function (button) {
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

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeMenu();
});

document.getElementById("current-year").textContent = new Date().getFullYear();
applyWhatsAppLinks();
renderProducts();
