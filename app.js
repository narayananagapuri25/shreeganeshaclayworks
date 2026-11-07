/* Shree Ganesha Clay Works — product catalogue, published rate guide and WhatsApp enquiries. */
const SHOP = {
  name: "Shree Ganesha Clay Works",
  whatsappNumber: "919493404602"
};

const products = [
  {
    id: "heart-diya",
    category: "diyas",
    name: { en: "Traditional clay diya", te: "సంప్రదాయ మట్టి దీపం" },
    description: {
      en: "A traditional clay diya shown in the shop's original photograph. See the numbered and special diya rates below, then ask us to confirm your preferred design.",
      te: "దుకాణం అసలు ఫోటోలో చూపిన సంప్రదాయ మట్టి దీపం. నంబర్ మరియు ప్రత్యేక దీపాల ధరల కోసం క్రింది పట్టిక చూడండి."
    },
    categoryLabel: { en: "Clay diya", te: "మట్టి దీపం" },
    price: { en: "See diya sizes & rates below", te: "దీపాల సైజులు, ధరల కోసం క్రింది పట్టిక చూడండి" },
    image: "assets/products/heart-diya.jpg",
    alt: "Traditional clay diya photographed from above",
    searchTerms: ["diya", "diyas", "deepam", "deepalu", "clay lamp", "దీపం", "దీపాలు"]
  },
  {
    id: "clay-idols",
    category: "idols",
    name: { en: "Pooja & other clay items", te: "పూజా & ఇతర మట్టి వస్తువులు" },
    description: {
      en: "A view of the shop's clay stock. Ask us about idols, pooja pieces and the designs currently available.",
      te: "దుకాణంలోని మట్టి వస్తువుల నిల్వను చూపించే ఫోటో. విగ్రహాలు, పూజా వస్తువులు మరియు ప్రస్తుతం అందుబాటులో ఉన్న నమూనాల గురించి అడగండి."
    },
    categoryLabel: { en: "Pooja & more", te: "పూజ & ఇతర వస్తువులు" },
    price: { en: "Ask about current designs & prices", te: "ప్రస్తుత నమూనాలు, ధరల కోసం అడగండి" },
    image: "assets/products/store-stock.jpg",
    alt: "Rows of clay products displayed inside the shop",
    searchTerms: ["clay idol", "idols", "pooja", "puja", "devotional", "విగ్రహాలు", "పూజా వస్తువులు"]
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
    price: { en: "Ask about sizes & current price", te: "సైజులు, ప్రస్తుత ధర కోసం అడగండి" },
    image: "assets/products/plain-agul.jpg",
    alt: "Plain agul clay pieces",
    searchTerms: ["agul", "agal", "traditional agul", "అగులు"]
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
    price: { en: "₹8–₹40 / piece · sizes vary", te: "ఒక్కొక్కటి ₹8–₹40 · సైజును బట్టి" },
    image: "assets/products/stand-agul.jpg",
    alt: "Terracotta stand agul from the shop",
    searchTerms: ["stand agul", "agul stand", "stand design", "స్టాండ్ అగులు"]
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
    price: { en: "C/Simini ₹50 each · B/Simini ₹60 each", te: "సి సిమిని ₹50 · బి సిమిని ₹60 ఒక్కొక్కటి" },
    image: "assets/products/simini.jpg",
    alt: "Traditional clay simini lamp base",
    searchTerms: ["simini", "b/simini", "c/simini", "chimney lamp", "oil lamp", "సిమిని", "సిమిని దీపాలు"]
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
    price: { en: "₹100–₹300 / vessel · capacity varies", te: "₹100–₹300 / పాత్ర · సామర్థ్యాన్ని బట్టి" },
    image: "assets/products/cooking-vessels.jpg",
    alt: "Clay cooking vessel shown in the shop rate chart",
    searchTerms: ["cooking pot", "cookware", "clay pot", "handi", "vessel", "వంట పాత్రలు", "వంట కుండ"]
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
    price: { en: "₹150–₹300 / pot · Ranjan ₹250–₹300", te: "కుండ ₹150–₹300 · రంజన్ ₹250–₹300" },
    image: "assets/products/water-pots.jpg",
    alt: "Traditional clay water pot shown in the shop rate chart",
    searchTerms: ["water pot", "matka", "clay water storage", "ranjan", "నీటి కుండ", "నీటి కుండలు", "రంజన్"]
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
    title: { en: "Clay water pots", te: "మట్టి నీటి కుండలు" },
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
    announcement: "Store hours · 9 AM–7 PM",
    announcementLink: "Get directions ↗",
    navHome: "Home", navProducts: "Collections", navRates: "Rate chart", navStory: "Our story", navVisit: "Visit us",
    navEnquire: "Enquire on WhatsApp", heroEyebrow: "THE BEAUTY OF EARTHEN CRAFT",
    heroTitle: "Clay for everyday.<br><em>Rooted in tradition.</em>",
    heroText: "Explore traditional diyas, agul, simini lamps, cooking vessels and water pots. Browse the shop rate guide or ask us about current availability.",
    exploreButton: "Explore collections", visitButton: "Find our store",
    heroNote: "A celebration of clay, culture & everyday living",
    hoursLabel: "STORE HOURS", hoursValue: "9:00 AM–7:00 PM",
    locationLabel: "FIND US", locationValue: "Naspur, Mancherial",
    callLabel: "CALL THE STORE", callValue: "+91 94934 04602",
    directionsLabel: "VISIT THE STORE", directionsValue: "Get directions",
    howToEyebrow: "HOW TO SHOP",
    howToTitle: "From browsing to<br><em>your shop visit.</em>",
    howToBrowseTitle: "Browse products",
    howToBrowseText: "Explore the collections and check the printed rate guide.",
    howToBrowseLink: "Browse the catalogue ↗",
    howToAskTitle: "Confirm on WhatsApp",
    howToAskText: "Ask about today's price, sizes, designs and availability.",
    howToAskLink: "Message the shop ↗",
    howToVisitTitle: "Visit the store",
    howToVisitText: "Use the address and directions, or call before you travel.",
    howToVisitLink: "See store details ↗",

    categoryEyebrow: "EXPLORE THE STORE", categoryTitle: "Shop by<br><em>category.</em>",
    categoryText: "Choose a product type to jump straight to its collection and send a direct enquiry to the shop.",
    category01: "POOJA & FESTIVAL", category02: "TRADITIONAL DESIGNS", category03: "STAND DESIGNS",
    category04: "LAMPS & SIMINI", category05: "KITCHEN & HOME", category06: "HOME ESSENTIALS", category07: "MORE TO EXPLORE",
    catDiyas: "Clay diyas", catAgul: "Agul", catStand: "Stand agul", catSimini: "Simini lamps",
    catCookware: "Cooking ware", catWater: "Water pots", catIdols: "Pooja & other items",
    collectionEyebrow: "A CLOSER LOOK", collectionTitle: "Browse products<br><em>& prices.</em>",
    collectionText: "Search by product name or category. Each product links to WhatsApp so you can confirm today’s price, size and availability.",
    filterAll: "All collections", searchPlaceholder: "Search diyas, pots, lamps…",
    emptyState: "No matching products. Try another search.",
    emptyAsk: "Ask the shop on WhatsApp ↗",
    oneResult: "Showing 1 result", resultsCount: "Showing {count} results",
    collectionFootnote: "Pack quantities appearing in some shared product photos are reference pack sizes only, not a live stock count.",
    rateEyebrow: "SHOP PRICE GUIDE", rateTitle: "Shop price<br><em>guide.</em>",
    rateIntro: "Browse the rates supplied by the shop by product and size. Tap any row to ask about the current price and availability on WhatsApp.",
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
    phoneLabel: "CALL / WHATSAPP", secondPhoneLabel: "ALTERNATE CONTACT", primaryWhatsAppLabel: "WhatsApp primary number ↗", alternateWhatsAppLabel: "WhatsApp alternate number ↗", whatsappButton: "Chat with us on WhatsApp",
    contactNote: "Both shop numbers can be called or messaged on WhatsApp. Product enquiries from the catalogue are sent to the primary number.",
    closingEyebrow: "SHREE GANESHA CLAY WORKS · MANCHERIAL",
    closingTitle: "Choose clay.<br><em>Keep tradition close.</em>",
    closingLink: "Explore the collections", footerTagline: "Experience the tradition of clay.",
    footerLocation: "Mancherial, Telangana, India", backTop: "Back to top ↑", floatingWhatsapp: "WhatsApp us"
  },
  te: {
    announcement: "దుకాణ సమయాలు · ఉదయం 9–సాయంత్రం 7",
    announcementLink: "దారి తెలుసుకోండి ↗",
    navHome: "హోమ్", navProducts: "సేకరణలు", navRates: "ధరల పట్టిక", navStory: "మా గురించి", navVisit: "మా దుకాణం",
    navEnquire: "వాట్సాప్‌లో అడగండి", heroEyebrow: "మట్టి కళలోని అందం",
    heroTitle: "రోజువారీ అవసరాలకు మట్టి.<br><em>సంప్రదాయంతో.</em>",
    heroText: "సంప్రదాయ దీపాలు, అగులు, సిమిని దీపాలు, వంట పాత్రలు మరియు నీటి కుండలను చూడండి. ప్రస్తుత ధరలు, లభ్యత కోసం అడగండి.",
    exploreButton: "సేకరణలను చూడండి", visitButton: "మా దుకాణం",
    heroNote: "మట్టి, సంస్కృతి మరియు రోజువారీ జీవనానికి ఒక వేడుక",
    hoursLabel: "దుకాణ సమయాలు", hoursValue: "ఉదయం 9:00–సాయంత్రం 7:00",
    locationLabel: "మా చిరునామా", locationValue: "నాస్పూర్, మంచిర్యాల",
    callLabel: "దుకాణానికి ఫోన్ చేయండి", callValue: "+91 94934 04602",
    directionsLabel: "మా దుకాణానికి రండి", directionsValue: "దారి తెలుసుకోండి",
    howToEyebrow: "ఎలా కొనుగోలు చేయాలి",
    howToTitle: "వెతకడం నుంచి<br><em>దుకాణ సందర్శన వరకు.</em>",
    howToBrowseTitle: "ఉత్పత్తులను చూడండి",
    howToBrowseText: "సేకరణలను పరిశీలించి ధరల పట్టికను చూడండి.",
    howToBrowseLink: "కేటలాగ్ చూడండి ↗",
    howToAskTitle: "వాట్సాప్‌లో నిర్ధారించండి",
    howToAskText: "ప్రస్తుత ధర, సైజులు, నమూనాలు మరియు లభ్యత గురించి అడగండి.",
    howToAskLink: "దుకాణానికి సందేశం పంపండి ↗",
    howToVisitTitle: "దుకాణానికి రండి",
    howToVisitText: "చిరునామా, దారి తెలుసుకోండి లేదా బయలుదేరే ముందు ఫోన్ చేయండి.",
    howToVisitLink: "దుకాణ వివరాలు చూడండి ↗",

    categoryEyebrow: "మా దుకాణాన్ని చూడండి", categoryTitle: "వస్తువుల<br><em>రకాన్ని ఎంచుకోండి.</em>",
    categoryText: "ఒక వస్తువు రకాన్ని ఎంచుకుంటే సంబంధిత సేకరణకు వెళ్లి నేరుగా దుకాణాన్ని సంప్రదించవచ్చు.",
    category01: "పూజ & పండుగలు", category02: "సంప్రదాయ నమూనాలు", category03: "స్టాండ్ నమూనాలు",
    category04: "దీపాలు & సిమిని", category05: "వంటగది & ఇల్లు", category06: "ఇంటి అవసరాలు", category07: "ఇంకా చూడండి",
    catDiyas: "మట్టి దీపాలు", catAgul: "అగులు", catStand: "స్టాండ్ అగులు", catSimini: "సిమిని దీపాలు",
    catCookware: "వంట పాత్రలు", catWater: "నీటి కుండలు", catIdols: "పూజా & ఇతర వస్తువులు",
    collectionEyebrow: "మరింత దగ్గరగా చూడండి", collectionTitle: "ఉత్పత్తులు<br><em>& ధరలు.</em>",
    collectionText: "వస్తువు పేరు లేదా రకం ద్వారా వెతకండి. ప్రస్తుత ధర, సైజు మరియు లభ్యతను వాట్సాప్‌లో నిర్ధారించుకోండి.",
    filterAll: "అన్ని సేకరణలు", searchPlaceholder: "దీపాలు, కుండలు, పాత్రలు వెతకండి",
    emptyState: "సరిపోలే ఉత్పత్తులు లేవు. మరో పదంతో వెతకండి.",
    emptyAsk: "వాట్సాప్‌లో దుకాణాన్ని అడగండి ↗",
    oneResult: "1 ఫలితం", resultsCount: "{count} ఫలితాలు",
    collectionFootnote: "కొన్ని ఉత్పత్తుల ఫోటోలలో కనిపించే బ్యాగ్ లేదా బాక్స్ పరిమాణాలు సూచన మాత్రమే; అవి ప్రస్తుత స్టాక్ సంఖ్యలు కావు.",
    rateEyebrow: "దుకాణం ధరల గైడ్", rateTitle: "దుకాణం<br><em>ధరల పట్టిక.</em>",
    rateIntro: "దుకాణం అందించిన ధరలను వస్తువు మరియు సైజు వారీగా చూడండి. ప్రస్తుత ధర, లభ్యత కోసం ఏ వరుసనైనా ఎంచుకుని వాట్సాప్‌లో అడగండి.",
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
    phoneLabel: "ఫోన్ / వాట్సాప్", secondPhoneLabel: "మరో సంప్రదింపు నంబర్", primaryWhatsAppLabel: "ప్రధాన నంబర్‌కు వాట్సాప్ ↗", alternateWhatsAppLabel: "ప్రత్యామ్నాయ నంబర్‌కు వాట్సాప్ ↗", whatsappButton: "వాట్సాప్‌లో మాట్లాడండి",
    contactNote: "దుకాణంలోని రెండు నంబర్లకూ ఫోన్ చేయవచ్చు లేదా వాట్సాప్ సందేశం పంపవచ్చు. కేటలాగ్ ద్వారా చేసే విచారణలు ప్రధాన నంబర్‌కు వెళ్తాయి.",
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
const productResultCount = document.getElementById("product-result-count");
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
      product.categoryLabel.en, product.categoryLabel.te, product.price.en, product.price.te,
      ...(product.searchTerms || [])
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
      '<div class="product-price">' + product.price[language] + '</div>' +
      '<a class="product-card-action" href="' + waUrl(message) + '" target="_blank" rel="noopener noreferrer">' +
      '<span>' + translations[language].rateAsk + '</span><span aria-hidden="true">↗</span></a>' +
      '</div></article>';
  }).join("");

  productGrid.querySelectorAll("img").forEach(function (imageElement) {
    imageElement.addEventListener("error", function () {
      imageElement.closest(".product-image-wrap").classList.add("image-failed");
    }, { once: true });
  });
  productResultCount.textContent = visible.length === 1
    ? translations[language].oneResult
    : translations[language].resultsCount.replace("{count}", String(visible.length));
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

// Keep the floating WhatsApp shortcut out of the opening announcement and hero.
// It appears after the visitor has started scrolling, then remains available.
const floatingWhatsapp = document.querySelector(".floating-whatsapp");
function updateFloatingWhatsapp() {
  floatingWhatsapp.classList.toggle("is-visible", window.scrollY > 360);
}
window.addEventListener("scroll", updateFloatingWhatsapp, { passive: true });
updateFloatingWhatsapp();

document.getElementById("current-year").textContent = new Date().getFullYear();
applyWhatsAppLinks();
renderProducts();
renderRateGroups();
