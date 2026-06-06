const priest = {
  name: "Kilambhi Narasimha Charyulu",
  siteName: "Aathreyasa Krupa Pooja Services",
  whatsapp: "919502668772",
  email: "knarasimhacharyyulu@gmail.com",
  locationName: "Gandhi Nagar, Vanasthalipuram",
  locationUrl: "https://jsdl.in/DT-28J4GAEEYYW",
  upiId: "",
};

const poojaCategories = [
  {
    name: "Daily & Regular Poojas",
    services: [
      "Ganapathi Pooja",
      "Lakshmi Pooja",
      "Saraswati Pooja",
      "Shiva Pooja",
      "Vishnu Pooja",
      "Hanuman Pooja",
      "Durga Pooja",
      "Navagraha Pooja",
      "Satyanarayana Vratham",
      "Rudrabhishekam",
      "Abhishekam Services",
      "Archana",
      "Sahasranama Parayanam",
      "Deepa Pooja",
    ],
  },
  {
    name: "Homams / Havan / Yagnas",
    services: [
      "Ganapathi Homam",
      "Sudarshana Homam",
      "Lakshmi Kubera Homam",
      "Chandi Homam",
      "Navagraha Homam",
      "Mrityunjaya Homam",
      "Ayushya Homam",
      "Dhanvantri Homam",
      "Vastu Homam",
      "Rudra Homam",
      "Putrakameshti Homam",
      "Saraswati Homam",
      "Gayatri Homam",
      "Agni Hotra",
    ],
  },
  {
    name: "Life Event Ceremonies (Samskaras)",
    services: [
      "Garbhadhana",
      "Pumsavana",
      "Seemantham (Baby Shower)",
      "Jatakarma",
      "Namakaranam (Naming Ceremony)",
      "Annaprasana (First Feeding)",
      "Aksharabhyasam (Vidyarambham)",
      "Chudakarana (Mundan)",
      "Ear Piercing Ceremony",
      "Upanayanam (Thread Ceremony)",
      "Match Making Consultation",
      "Engagement Ceremony",
      "Wedding Muhurtham Selection",
      "Marriage Ceremony",
      "Gruhapravesam for Newlyweds",
      "Sathyanarayana Vratham after Marriage",
    ],
  },
  {
    name: "House & Property Related Services",
    services: [
      "Gruhapravesam (House Warming)",
      "Bhoomi Pooja",
      "Vastu Pooja",
      "Vastu Shanti",
      "Office Inauguration",
      "Shop Opening Ceremony",
      "Factory Inauguration",
      "Land Purchase Pooja",
      "Real Estate Project Pooja",
      "Renovation Pooja",
    ],
  },
  {
    name: "Vehicle & Business Services",
    services: [
      "Vehicle Pooja",
      "New Car Pooja",
      "Bike Pooja",
      "Commercial Vehicle Blessing",
      "Business Launch Pooja",
      "Startup Launch Pooja",
      "Machinery Installation Pooja",
      "Factory Equipment Pooja",
      "Ayudha Pooja",
    ],
  },
  {
    name: "Festival Special Poojas",
    services: [
      "Vinayaka Chavithi Pooja",
      "Diwali Lakshmi Pooja",
      "Ugadi Pooja",
      "Sankranti Pooja",
      "Dasara Pooja",
      "Navaratri Poojas",
      "Varalakshmi Vratham",
      "Sri Rama Navami",
      "Krishna Janmashtami",
      "Maha Shivaratri",
      "Karthika Deepam",
      "Bonalu Pooja",
      "Bathukamma Pooja",
      "Pongal Pooja",
      "Onam Pooja",
    ],
  },
  {
    name: "Ancestor & Ritual Services",
    services: [
      "Shraddha Karma",
      "Tarpanam",
      "Pinda Pradanam",
      "Annual Death Ceremony",
      "Amavasya Rituals",
      "Pitru Dosha Nivarana Pooja",
      "Narayana Bali",
      "Tripindi Shraddha",
    ],
  },
  {
    name: "Astrology & Consultation Services",
    services: [
      "Horoscope Reading",
      "Janma Kundali Analysis",
      "Marriage Compatibility",
      "Muhurtham Selection",
      "Vastu Consultation",
      "Numerology Consultation",
      "Dosha Analysis",
      "Graha Shanti Recommendations",
      "Career & Education Guidance",
    ],
  },
  {
    name: "Dosha Nivarana & Remedial Poojas",
    services: [
      "Kala Sarpa Dosha Pooja",
      "Rahu Ketu Pooja",
      "Navagraha Shanti",
      "Mangala Dosha Pooja",
      "Pitru Dosha Pooja",
      "Shani Shanti",
      "Chandi Pooja",
      "Mahamrityunjaya Japa",
      "Sarpa Samskara",
    ],
  },
  {
    name: "Japa & Parayanam Services",
    services: [
      "Vishnu Sahasranama Parayanam",
      "Lalitha Sahasranama Parayanam",
      "Sundarakanda Parayanam",
      "Bhagavad Gita Parayanam",
      "Ramayana Parayanam",
      "Devi Mahatmyam",
      "Rudram Chanting",
      "Mahamrityunjaya Japa",
      "Gayatri Japa",
    ],
  },
  {
    name: "Temple Services",
    services: [
      "Temple Consecration (Kumbhabhishekam)",
      "Prana Pratishtha",
      "Temple Anniversary Poojas",
      "Temple Utsavams",
      "Special Alankarams",
      "Daily Temple Rituals",
      "Temple Homams",
    ],
  },
  {
    name: "Online / Virtual Services",
    services: [
      "Online Pooja Booking",
      "Virtual Satyanarayana Pooja",
      "Video Consultation",
      "Remote Sankalpam Services",
    ],
  },
];

const translations = {
  en: {
    navBook: "Book",
    navServices: "Services",
    navContact: "Contact",
    navDesk: "Priest Desk",
    languageLabel: "Language",
    priestName: priest.name,
    heroCopy:
      "Book daily poojas, homams, samskaras, festival rituals, consultations and online services with payment after acceptance.",
    bookNow: "Book a Slot",
    viewLocation: "View Location",
    availability: "All days, 9 AM to 6 PM",
    bookingTitle: "Book a pooja slot",
    bookingCopy:
      "Hyderabad bookings need at least 2 days notice. Outside Hyderabad bookings need at least 1 week notice.",
    paymentLabel: "Payment",
    paymentValue: "After priest acceptance",
    priceLabel: "Price",
    priceValue: "On call",
    modeLabel: "Mode",
    modeValue: "Home, temple and online",
    nameLabel: "Name",
    whatsappLabel: "WhatsApp number",
    categoryLabel: "Pooja category",
    serviceLabel: "Pooja type",
    visitAreaLabel: "Service area",
    withinHyderabad: "Within Hyderabad",
    outsideHyderabad: "Outside Hyderabad",
    onlineVirtual: "Online / Virtual",
    modeSelectLabel: "Service mode",
    homeVisit: "Home visit",
    templeVisit: "Temple service",
    onlineService: "Online service",
    slotLabel: "Time slot",
    addressLabel: "Address",
    notesLabel: "Notes / Gothram / Star",
    submitBooking: "Submit Booking",
    servicesEyebrow: "Services",
    servicesTitle: "Poojas, homams and consultations",
    searchLabel: "Search services",
    contactEyebrow: "Contact",
    contactTitle: priest.siteName,
    whatsappAction: "WhatsApp",
    mapAction: "Map",
    deskEyebrow: "Priest Desk",
    deskTitle: "Review bookings",
    blockedTitle: "Blocked days",
    blockDateLabel: "Block a date",
    blockDateButton: "Block Date",
    bookingListTitle: "Booking requests",
    pending: "Pending",
    accepted: "Accepted",
    rejected: "Rejected",
    emptyBookings: "No booking requests yet.",
    emptyBlocked: "No blocked days.",
  },
  hi: {
    navBook: "बुक करें",
    navServices: "सेवाएं",
    navContact: "संपर्क",
    navDesk: "पुजारी डेस्क",
    languageLabel: "भाषा",
    priestName: priest.name,
    heroCopy:
      "दैनिक पूजा, होम, संस्कार, त्योहार पूजा, परामर्श और ऑनलाइन सेवाओं के लिए स्लॉट बुक करें।",
    bookNow: "स्लॉट बुक करें",
    viewLocation: "स्थान देखें",
    availability: "हर दिन, सुबह 9 से शाम 6",
    bookingTitle: "पूजा स्लॉट बुक करें",
    bookingCopy:
      "हैदराबाद में कम से कम 2 दिन पहले और बाहर के लिए कम से कम 1 सप्ताह पहले बुकिंग करें।",
    paymentLabel: "भुगतान",
    paymentValue: "स्वीकृति के बाद",
    priceLabel: "मूल्य",
    priceValue: "कॉल पर",
    modeLabel: "माध्यम",
    modeValue: "घर, मंदिर और ऑनलाइन",
    nameLabel: "नाम",
    whatsappLabel: "व्हाट्सऐप नंबर",
    categoryLabel: "पूजा श्रेणी",
    serviceLabel: "पूजा प्रकार",
    visitAreaLabel: "सेवा क्षेत्र",
    withinHyderabad: "हैदराबाद के अंदर",
    outsideHyderabad: "हैदराबाद के बाहर",
    onlineVirtual: "ऑनलाइन / वर्चुअल",
    modeSelectLabel: "सेवा माध्यम",
    homeVisit: "घर पर सेवा",
    templeVisit: "मंदिर सेवा",
    onlineService: "ऑनलाइन सेवा",
    slotLabel: "समय स्लॉट",
    addressLabel: "पता",
    notesLabel: "नोट्स / गोत्र / नक्षत्र",
    submitBooking: "बुकिंग भेजें",
    servicesEyebrow: "सेवाएं",
    servicesTitle: "पूजा, होम और परामर्श",
    searchLabel: "सेवाएं खोजें",
    contactEyebrow: "संपर्क",
    contactTitle: priest.siteName,
    whatsappAction: "व्हाट्सऐप",
    mapAction: "मानचित्र",
    deskEyebrow: "पुजारी डेस्क",
    deskTitle: "बुकिंग देखें",
    blockedTitle: "ब्लॉक किए गए दिन",
    blockDateLabel: "तारीख ब्लॉक करें",
    blockDateButton: "ब्लॉक करें",
    bookingListTitle: "बुकिंग अनुरोध",
    pending: "प्रतीक्षा",
    accepted: "स्वीकृत",
    rejected: "अस्वीकृत",
    emptyBookings: "अभी कोई बुकिंग नहीं है।",
    emptyBlocked: "कोई ब्लॉक दिन नहीं है।",
  },
  te: {
    navBook: "బుక్ చేయండి",
    navServices: "సేవలు",
    navContact: "సంప్రదింపు",
    navDesk: "పూజారి డెస్క్",
    languageLabel: "భాష",
    priestName: priest.name,
    heroCopy:
      "నిత్య పూజలు, హోమాలు, సంస్కారాలు, పండుగ పూజలు, సంప్రదింపులు మరియు ఆన్‌లైన్ సేవల కోసం స్లాట్ బుక్ చేయండి.",
    bookNow: "స్లాట్ బుక్ చేయండి",
    viewLocation: "స్థానం చూడండి",
    availability: "ప్రతి రోజు, ఉదయం 9 నుండి సాయంత్రం 6 వరకు",
    bookingTitle: "పూజా స్లాట్ బుక్ చేయండి",
    bookingCopy:
      "హైదరాబాద్‌లో కనీసం 2 రోజుల ముందుగా, హైదరాబాద్ వెలుపల కనీసం 1 వారం ముందుగా బుక్ చేయాలి.",
    paymentLabel: "చెల్లింపు",
    paymentValue: "అంగీకారం తర్వాత",
    priceLabel: "ధర",
    priceValue: "కాల్‌లో",
    modeLabel: "విధానం",
    modeValue: "ఇంటి వద్ద, ఆలయం మరియు ఆన్‌లైన్",
    nameLabel: "పేరు",
    whatsappLabel: "వాట్సాప్ నంబర్",
    categoryLabel: "పూజా వర్గం",
    serviceLabel: "పూజా రకం",
    visitAreaLabel: "సేవ ప్రాంతం",
    withinHyderabad: "హైదరాబాద్‌లో",
    outsideHyderabad: "హైదరాబాద్ వెలుపల",
    onlineVirtual: "ఆన్‌లైన్ / వర్చువల్",
    modeSelectLabel: "సేవ విధానం",
    homeVisit: "ఇంటి వద్ద సేవ",
    templeVisit: "ఆలయ సేవ",
    onlineService: "ఆన్‌లైన్ సేవ",
    slotLabel: "సమయ స్లాట్",
    addressLabel: "చిరునామా",
    notesLabel: "గమనికలు / గోత్రం / నక్షత్రం",
    submitBooking: "బుకింగ్ పంపండి",
    servicesEyebrow: "సేవలు",
    servicesTitle: "పూజలు, హోమాలు మరియు సంప్రదింపులు",
    searchLabel: "సేవలు వెతకండి",
    contactEyebrow: "సంప్రదింపు",
    contactTitle: priest.siteName,
    whatsappAction: "వాట్సాప్",
    mapAction: "మ్యాప్",
    deskEyebrow: "పూజారి డెస్క్",
    deskTitle: "బుకింగ్స్ చూడండి",
    blockedTitle: "బ్లాక్ చేసిన రోజులు",
    blockDateLabel: "తేదీ బ్లాక్ చేయండి",
    blockDateButton: "బ్లాక్ చేయండి",
    bookingListTitle: "బుకింగ్ అభ్యర్థనలు",
    pending: "పెండింగ్",
    accepted: "అంగీకరించారు",
    rejected: "తిరస్కరించారు",
    emptyBookings: "ఇంకా బుకింగ్స్ లేవు.",
    emptyBlocked: "బ్లాక్ చేసిన రోజులు లేవు.",
  },
  ta: {
    navBook: "புக் செய்க",
    navServices: "சேவைகள்",
    navContact: "தொடர்பு",
    navDesk: "புரோகிதர் டெஸ்க்",
    languageLabel: "மொழி",
    priestName: priest.name,
    heroCopy:
      "தினசரி பூஜைகள், ஹோமங்கள், சம்ஸ்காரங்கள், திருவிழா பூஜைகள், ஆலோசனைகள் மற்றும் ஆன்லைன் சேவைகளுக்கு நேரம் பதிவு செய்யுங்கள்.",
    bookNow: "நேரம் பதிவு செய்க",
    viewLocation: "இடம் பார்க்க",
    availability: "அனைத்து நாட்களும், காலை 9 முதல் மாலை 6 வரை",
    bookingTitle: "பூஜை நேரம் பதிவு செய்க",
    bookingCopy:
      "ஹைதராபாத் சேவைக்கு குறைந்தது 2 நாட்கள் முன், வெளியூர் சேவைக்கு குறைந்தது 1 வாரம் முன் பதிவு செய்ய வேண்டும்.",
    paymentLabel: "கட்டணம்",
    paymentValue: "ஒப்புதல் பிறகு",
    priceLabel: "விலை",
    priceValue: "காலில்",
    modeLabel: "முறை",
    modeValue: "வீடு, கோவில் மற்றும் ஆன்லைன்",
    nameLabel: "பெயர்",
    whatsappLabel: "வாட்ஸ்அப் எண்",
    categoryLabel: "பூஜை வகை",
    serviceLabel: "பூஜை பெயர்",
    visitAreaLabel: "சேவை பகுதி",
    withinHyderabad: "ஹைதராபாத் உள்ளே",
    outsideHyderabad: "ஹைதராபாத் வெளியே",
    onlineVirtual: "ஆன்லைன் / மெய்நிகர்",
    modeSelectLabel: "சேவை முறை",
    homeVisit: "வீட்டு சேவை",
    templeVisit: "கோவில் சேவை",
    onlineService: "ஆன்லைன் சேவை",
    slotLabel: "நேரம்",
    addressLabel: "முகவரி",
    notesLabel: "குறிப்புகள் / கோத்திரம் / நட்சத்திரம்",
    submitBooking: "பதிவை அனுப்பு",
    servicesEyebrow: "சேவைகள்",
    servicesTitle: "பூஜைகள், ஹோமங்கள் மற்றும் ஆலோசனைகள்",
    searchLabel: "சேவைகள் தேடல்",
    contactEyebrow: "தொடர்பு",
    contactTitle: priest.siteName,
    whatsappAction: "வாட்ஸ்அப்",
    mapAction: "வரைபடம்",
    deskEyebrow: "புரோகிதர் டெஸ்க்",
    deskTitle: "பதிவுகளை பார்க்க",
    blockedTitle: "முடக்கப்பட்ட நாட்கள்",
    blockDateLabel: "தேதியை முடக்கு",
    blockDateButton: "முடக்கு",
    bookingListTitle: "பதிவு கோரிக்கைகள்",
    pending: "நிலுவை",
    accepted: "ஏற்கப்பட்டது",
    rejected: "நிராகரிக்கப்பட்டது",
    emptyBookings: "இன்னும் பதிவு இல்லை.",
    emptyBlocked: "முடக்கப்பட்ட நாள் இல்லை.",
  },
  kn: {
    navBook: "ಬುಕ್ ಮಾಡಿ",
    navServices: "ಸೇವೆಗಳು",
    navContact: "ಸಂಪರ್ಕ",
    navDesk: "ಪುರೋಹಿತ ಡೆಸ್ಕ್",
    languageLabel: "ಭಾಷೆ",
    priestName: priest.name,
    heroCopy:
      "ದೈನಂದಿನ ಪೂಜೆಗಳು, ಹೋಮಗಳು, ಸಂಸ್ಕಾರಗಳು, ಹಬ್ಬದ ಪೂಜೆಗಳು, ಸಲಹೆಗಳು ಮತ್ತು ಆನ್‌ಲೈನ್ ಸೇವೆಗಳಿಗಾಗಿ ಸಮಯ ಬುಕ್ ಮಾಡಿ.",
    bookNow: "ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ",
    viewLocation: "ಸ್ಥಳ ನೋಡಿ",
    availability: "ಎಲ್ಲಾ ದಿನಗಳು, ಬೆಳಿಗ್ಗೆ 9 ರಿಂದ ಸಂಜೆ 6",
    bookingTitle: "ಪೂಜೆ ಸ್ಲಾಟ್ ಬುಕ್ ಮಾಡಿ",
    bookingCopy:
      "ಹೈದರಾಬಾದ್ ಸೇವೆಗೆ ಕನಿಷ್ಠ 2 ದಿನ ಮೊದಲು, ಹೊರಗಿನ ಸೇವೆಗೆ ಕನಿಷ್ಠ 1 ವಾರ ಮೊದಲು ಬುಕ್ ಮಾಡಬೇಕು.",
    paymentLabel: "ಪಾವತಿ",
    paymentValue: "ಸ್ವೀಕೃತಿಯ ನಂತರ",
    priceLabel: "ಬೆಲೆ",
    priceValue: "ಕಾಲ್‌ನಲ್ಲಿ",
    modeLabel: "ಮಾಧ್ಯಮ",
    modeValue: "ಮನೆ, ದೇವಾಲಯ ಮತ್ತು ಆನ್‌ಲೈನ್",
    nameLabel: "ಹೆಸರು",
    whatsappLabel: "ವಾಟ್ಸಾಪ್ ಸಂಖ್ಯೆ",
    categoryLabel: "ಪೂಜೆ ವರ್ಗ",
    serviceLabel: "ಪೂಜೆ ಪ್ರಕಾರ",
    visitAreaLabel: "ಸೇವೆ ಪ್ರದೇಶ",
    withinHyderabad: "ಹೈದರಾಬಾದ್ ಒಳಗೆ",
    outsideHyderabad: "ಹೈದರಾಬಾದ್ ಹೊರಗೆ",
    onlineVirtual: "ಆನ್‌ಲೈನ್ / ವರ್ಚುವಲ್",
    modeSelectLabel: "ಸೇವೆ ವಿಧಾನ",
    homeVisit: "ಮನೆ ಸೇವೆ",
    templeVisit: "ದೇವಾಲಯ ಸೇವೆ",
    onlineService: "ಆನ್‌ಲೈನ್ ಸೇವೆ",
    slotLabel: "ಸಮಯ ಸ್ಲಾಟ್",
    addressLabel: "ವಿಳಾಸ",
    notesLabel: "ಟಿಪ್ಪಣಿಗಳು / ಗೋತ್ರ / ನಕ್ಷತ್ರ",
    submitBooking: "ಬುಕಿಂಗ್ ಕಳುಹಿಸಿ",
    servicesEyebrow: "ಸೇವೆಗಳು",
    servicesTitle: "ಪೂಜೆಗಳು, ಹೋಮಗಳು ಮತ್ತು ಸಲಹೆಗಳು",
    searchLabel: "ಸೇವೆಗಳು ಹುಡುಕಿ",
    contactEyebrow: "ಸಂಪರ್ಕ",
    contactTitle: priest.siteName,
    whatsappAction: "ವಾಟ್ಸಾಪ್",
    mapAction: "ನಕ್ಷೆ",
    deskEyebrow: "ಪುರೋಹಿತ ಡೆಸ್ಕ್",
    deskTitle: "ಬುಕಿಂಗ್ ನೋಡಿ",
    blockedTitle: "ಬ್ಲಾಕ್ ಮಾಡಿದ ದಿನಗಳು",
    blockDateLabel: "ದಿನಾಂಕ ಬ್ಲಾಕ್ ಮಾಡಿ",
    blockDateButton: "ಬ್ಲಾಕ್ ಮಾಡಿ",
    bookingListTitle: "ಬುಕಿಂಗ್ ವಿನಂತಿಗಳು",
    pending: "ಬಾಕಿ",
    accepted: "ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
    rejected: "ನಿರಾಕರಿಸಲಾಗಿದೆ",
    emptyBookings: "ಇನ್ನೂ ಯಾವುದೇ ಬುಕಿಂಗ್ ಇಲ್ಲ.",
    emptyBlocked: "ಬ್ಲಾಕ್ ದಿನಗಳಿಲ್ಲ.",
  },
};

const state = {
  bookings: load("akps-bookings", []),
  blockedDates: load("akps-blocked-dates", []),
  selectedDate: "",
  selectedSlot: "",
  language: load("akps-language", "en"),
  calendarMonth: new Date(),
};

const slots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const refs = {
  languageSelect: document.querySelector("#language-select"),
  categorySelect: document.querySelector("#category-select"),
  serviceSelect: document.querySelector("#service-select"),
  visitArea: document.querySelector("#visit-area"),
  serviceMode: document.querySelector("#service-mode"),
  calendarTitle: document.querySelector("#calendar-title"),
  calendarGrid: document.querySelector("#calendar-grid"),
  prevMonth: document.querySelector("#prev-month"),
  nextMonth: document.querySelector("#next-month"),
  bookingDate: document.querySelector("#booking-date"),
  slotGrid: document.querySelector("#slot-grid"),
  bookingForm: document.querySelector("#booking-form"),
  statusPanel: document.querySelector("#status-panel"),
  servicesList: document.querySelector("#services-list"),
  serviceSearch: document.querySelector("#service-search"),
  bookingList: document.querySelector("#booking-list"),
  blockDateForm: document.querySelector("#block-date-form"),
  blockDateInput: document.querySelector("#block-date-input"),
  blockedList: document.querySelector("#blocked-list"),
};

init();

function init() {
  refs.languageSelect.value = state.language;
  populateCategorySelect();
  renderServices();
  renderCalendar();
  renderSlots();
  renderBookingList();
  renderBlockedDates();
  applyLanguage();
  bindEvents();
}

function bindEvents() {
  refs.languageSelect.addEventListener("change", () => {
    state.language = refs.languageSelect.value;
    save("akps-language", state.language);
    applyLanguage();
    renderBookingList();
    renderBlockedDates();
  });

  refs.categorySelect.addEventListener("change", populateServiceSelect);
  refs.visitArea.addEventListener("change", () => {
    state.selectedDate = "";
    state.selectedSlot = "";
    refs.bookingDate.value = "";
    renderCalendar();
    renderSlots();
  });

  refs.prevMonth.addEventListener("click", () => {
    state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() - 1, 1);
    renderCalendar();
  });

  refs.nextMonth.addEventListener("click", () => {
    state.calendarMonth = new Date(state.calendarMonth.getFullYear(), state.calendarMonth.getMonth() + 1, 1);
    renderCalendar();
  });

  refs.bookingForm.addEventListener("submit", handleBookingSubmit);
  refs.serviceSearch.addEventListener("input", () => renderServices(refs.serviceSearch.value));
  refs.blockDateForm.addEventListener("submit", handleBlockDate);
}

function populateCategorySelect() {
  refs.categorySelect.innerHTML = "";
  poojaCategories.forEach((category, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = category.name;
    refs.categorySelect.append(option);
  });
  populateServiceSelect();
}

function populateServiceSelect() {
  const category = poojaCategories[Number(refs.categorySelect.value)] || poojaCategories[0];
  refs.serviceSelect.innerHTML = "";
  category.services.forEach((service) => {
    const option = document.createElement("option");
    option.value = service;
    option.textContent = service;
    refs.serviceSelect.append(option);
  });
}

function renderServices(query = "") {
  const cleanQuery = query.trim().toLowerCase();
  refs.servicesList.innerHTML = "";

  poojaCategories
    .map((category) => {
      const services = category.services.filter((service) =>
        `${category.name} ${service}`.toLowerCase().includes(cleanQuery),
      );
      return { ...category, services };
    })
    .filter((category) => category.services.length)
    .forEach((category) => {
      const article = document.createElement("article");
      article.className = "service-category";

      const title = document.createElement("h3");
      title.textContent = category.name;

      const list = document.createElement("ul");
      category.services.forEach((service) => {
        const item = document.createElement("li");
        item.textContent = service;
        list.append(item);
      });

      article.append(title, list);
      refs.servicesList.append(article);
    });
}

function renderCalendar() {
  const year = state.calendarMonth.getFullYear();
  const month = state.calendarMonth.getMonth();
  const start = new Date(year, month, 1);
  const gridStart = new Date(year, month, 1 - start.getDay());
  const formatter = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" });

  refs.calendarTitle.textContent = formatter.format(start);
  refs.calendarGrid.innerHTML = "";

  for (let i = 0; i < 42; i += 1) {
    const date = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i);
    const iso = toISODate(date);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.textContent = String(date.getDate());
    button.setAttribute("role", "gridcell");
    button.setAttribute("aria-label", iso);

    if (date.getMonth() !== month) {
      button.classList.add("other-month");
    }

    if (!isDateAvailable(iso)) {
      button.classList.add("unavailable");
      button.disabled = true;
    }

    if (state.selectedDate === iso) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      state.selectedDate = iso;
      state.selectedSlot = "";
      refs.bookingDate.value = iso;
      renderCalendar();
      renderSlots();
    });

    refs.calendarGrid.append(button);
  }
}

function renderSlots() {
  refs.slotGrid.innerHTML = "";
  const acceptedBookings = state.bookings.filter(
    (booking) => booking.date === state.selectedDate && booking.status === "accepted",
  );

  slots.forEach((slot) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "slot-option";
    button.textContent = formatTime(slot);
    const isBooked = acceptedBookings.some((booking) => booking.time === slot);

    if (!state.selectedDate || isBooked) {
      button.disabled = true;
      button.classList.add("unavailable");
    }

    if (slot === state.selectedSlot) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      state.selectedSlot = slot;
      renderSlots();
    });

    refs.slotGrid.append(button);
  });
}

function handleBookingSubmit(event) {
  event.preventDefault();

  if (!state.selectedDate || !state.selectedSlot) {
    showStatus("Select date and time", "Please choose an available date and time slot.");
    return;
  }

  const formData = new FormData(refs.bookingForm);
  const category = poojaCategories[Number(refs.categorySelect.value)].name;
  const booking = {
    id: createId(),
    createdAt: new Date().toISOString(),
    status: "pending",
    customerName: formData.get("name").trim(),
    customerWhatsapp: normalizePhone(formData.get("whatsapp")),
    category,
    service: formData.get("service"),
    visitArea: formData.get("visitArea"),
    serviceMode: formData.get("serviceMode"),
    date: state.selectedDate,
    time: state.selectedSlot,
    address: formData.get("address").trim(),
    notes: formData.get("notes").trim(),
  };

  state.bookings.unshift(booking);
  save("akps-bookings", state.bookings);
  refs.bookingForm.reset();
  populateServiceSelect();
  state.selectedDate = "";
  state.selectedSlot = "";
  refs.bookingDate.value = "";
  renderCalendar();
  renderSlots();
  renderBookingList();

  const fatherMessage = buildFatherMessage(booking);
  showStatus(
    "Booking request saved",
    "The request is pending priest acceptance. In this prototype, use the Priest Desk below or send the prepared WhatsApp message.",
    [
      {
        label: "Send to Priest WhatsApp",
        href: `https://wa.me/${priest.whatsapp}?text=${encodeURIComponent(fatherMessage)}`,
        kind: "primary",
      },
    ],
  );
}

function renderBookingList() {
  refs.bookingList.innerHTML = "";
  const copy = translations[state.language] || translations.en;

  if (!state.bookings.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy.emptyBookings;
    refs.bookingList.append(empty);
    return;
  }

  state.bookings.forEach((booking) => {
    const template = document.querySelector("#booking-card-template");
    const card = template.content.firstElementChild.cloneNode(true);
    const status = card.querySelector(".status-pill");
    const actions = card.querySelector(".booking-actions");

    card.querySelector(".booking-person").textContent = booking.customerName;
    status.textContent = copy[booking.status];
    status.classList.add(booking.status);
    card.querySelector(".booking-meta").textContent =
      `${booking.service} • ${formatDate(booking.date)} • ${formatTime(booking.time)} • ${booking.visitArea}`;
    card.querySelector(".booking-address").textContent = booking.address;

    actions.append(makeLink("Notify Priest", buildWhatsAppUrl(priest.whatsapp, buildFatherMessage(booking)), "secondary"));

    if (booking.status === "pending") {
      actions.append(makeButton("Accept", () => updateBookingStatus(booking.id, "accepted"), "primary"));
      actions.append(makeButton("Reject", () => updateBookingStatus(booking.id, "rejected"), "secondary"));
    }

    if (booking.customerWhatsapp) {
      const customerText =
        booking.status === "accepted" ? buildCustomerAcceptedMessage(booking) : buildCustomerRejectedMessage(booking);
      actions.append(makeLink("Notify Customer", buildWhatsAppUrl(booking.customerWhatsapp, customerText), "secondary"));
    }

    refs.bookingList.append(card);
  });
}

function updateBookingStatus(id, status) {
  state.bookings = state.bookings.map((booking) =>
    booking.id === id ? { ...booking, status, updatedAt: new Date().toISOString() } : booking,
  );
  save("akps-bookings", state.bookings);
  renderBookingList();
  renderSlots();

  const booking = state.bookings.find((item) => item.id === id);
  if (!booking) return;

  const title = status === "accepted" ? "Booking accepted" : "Booking rejected";
  const message =
    status === "accepted"
      ? "Payment is now due after acceptance. Add the UPI QR image when you have the final UPI details."
      : "The customer can be notified from the booking card.";

  showStatus(title, message, [
    {
      label: "Notify Customer",
      href: buildWhatsAppUrl(
        booking.customerWhatsapp,
        status === "accepted" ? buildCustomerAcceptedMessage(booking) : buildCustomerRejectedMessage(booking),
      ),
      kind: "primary",
    },
  ]);
}

function handleBlockDate(event) {
  event.preventDefault();
  const date = refs.blockDateInput.value;
  if (!date || state.blockedDates.includes(date)) return;

  state.blockedDates.push(date);
  state.blockedDates.sort();
  save("akps-blocked-dates", state.blockedDates);
  refs.blockDateInput.value = "";
  renderBlockedDates();
  renderCalendar();
}

function renderBlockedDates() {
  refs.blockedList.innerHTML = "";
  const copy = translations[state.language] || translations.en;

  if (!state.blockedDates.length) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = copy.emptyBlocked;
    refs.blockedList.append(empty);
    return;
  }

  state.blockedDates.forEach((date) => {
    const pill = document.createElement("span");
    pill.className = "blocked-pill";
    pill.textContent = formatDate(date);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "×";
    remove.setAttribute("aria-label", `Remove ${date}`);
    remove.addEventListener("click", () => {
      state.blockedDates = state.blockedDates.filter((item) => item !== date);
      save("akps-blocked-dates", state.blockedDates);
      renderBlockedDates();
      renderCalendar();
    });

    pill.append(remove);
    refs.blockedList.append(pill);
  });
}

function applyLanguage() {
  const copy = translations[state.language] || translations.en;
  document.documentElement.lang = state.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });
}

function isDateAvailable(iso) {
  const minDays = refs.visitArea.value === "outside" ? 7 : 2;
  const earliest = startOfDay(addDays(new Date(), minDays));
  const date = startOfDay(new Date(`${iso}T00:00:00`));
  return date >= earliest && !state.blockedDates.includes(iso);
}

function showStatus(title, body, actions = []) {
  refs.statusPanel.hidden = false;
  refs.statusPanel.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = title;
  const paragraph = document.createElement("p");
  paragraph.textContent = body;
  const actionRow = document.createElement("div");
  actionRow.className = "hero-actions";

  actions.forEach((action) => {
    actionRow.append(makeLink(action.label, action.href, action.kind || "secondary"));
  });

  refs.statusPanel.append(heading, paragraph);
  if (actions.length) refs.statusPanel.append(actionRow);
  refs.statusPanel.scrollIntoView({ behavior: "smooth", block: "center" });
}

function makeButton(label, onClick, kind) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `button ${kind}`;
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function makeLink(label, href, kind) {
  const link = document.createElement("a");
  link.className = `button ${kind}`;
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function buildWhatsAppUrl(phone, text) {
  const cleanPhone = normalizePhone(phone);
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

function buildFatherMessage(booking) {
  return [
    `New pooja booking request for ${priest.siteName}`,
    `Name: ${booking.customerName}`,
    `WhatsApp: ${booking.customerWhatsapp}`,
    `Service: ${booking.service}`,
    `Category: ${booking.category}`,
    `Date: ${formatDate(booking.date)}`,
    `Time: ${formatTime(booking.time)}`,
    `Area: ${booking.visitArea}`,
    `Mode: ${booking.serviceMode}`,
    `Address: ${booking.address}`,
    booking.notes ? `Notes: ${booking.notes}` : "",
    "Status: Pending acceptance",
  ]
    .filter(Boolean)
    .join("\n");
}

function buildCustomerAcceptedMessage(booking) {
  return [
    `Namaste ${booking.customerName}, your ${booking.service} booking is accepted.`,
    `Date: ${formatDate(booking.date)}`,
    `Time: ${formatTime(booking.time)}`,
    `Priest: ${priest.name}`,
    "Payment can be completed after acceptance using the provided UPI QR.",
    `Location: ${priest.locationUrl}`,
  ].join("\n");
}

function buildCustomerRejectedMessage(booking) {
  return [
    `Namaste ${booking.customerName}, your ${booking.service} request for ${formatDate(booking.date)} at ${formatTime(
      booking.time,
    )} could not be accepted.`,
    "Please contact us to choose another slot.",
  ].join("\n");
}

function normalizePhone(phone) {
  const digits = String(phone || "").replace(/\D/g, "");
  if (digits.length === 10) return `91${digits}`;
  return digits;
}

function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }

  return `booking-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function formatTime(value) {
  const [hour, minute] = value.split(":").map(Number);
  const date = new Date();
  date.setHours(hour, minute, 0, 0);
  return new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true }).format(date);
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(`${value}T00:00:00`));
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function startOfDay(date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
