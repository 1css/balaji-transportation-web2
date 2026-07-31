// ============================================================
// siteData.js
// Single source of truth for all text/content/image references
// used across the site. Update copy here — components just read
// from this file so content and layout stay decoupled.
// ============================================================

const siteData = {
  brand: {
    name: "Balaji Movers and Siding Pvt Ltd",
    shortName: "BMSPL",
    tagline: "Making cargo transportation safe and fast.",
    logo: "/images/logo-banner.png",
    emblem: "/images/temple-emblem.png",
    phones: ["+91 98862 30850", "+91 94482 75233", "+91 81238 78316"],
    emails: ["balaji.branch@gmail.com", "raghu.gr2015@gmail.com"],
    website: "www.bms-pl.in",
    gstn: "29AAICB6937G2ZA",
    pan: "AAICB6937G"
  },

  nav: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Specifications", href: "#specifications" },
    { label: "Advantages", href: "#advantages" },
    { label: "Gallery", href: "#gallery" },
    { label: "Certifications", href: "#certifications" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    // Buttons are shared across every slide — kept in one place so
    // they don't need to be repeated inside each slide object.
    ctaPrimary: { label: "Explore Our Siding", href: "#specifications" },
    ctaSecondary: { label: "Contact Us", href: "#contact" },

    // The carousel shows these slides in order, then loops back to
    // the first one. Add/remove/reorder slides just by editing this
    // array — Hero.js doesn't need to change.
    slides: [
      {
        eyebrow: "Balaji Movers and Siding Pvt Ltd.",
        title: "Making Cargo Transportation Safe & Fast",
        subtitle:
          "A subsidiary of Balaji Transports, bringing 25+ years of expertise in steel transportation and a purpose-built private railway siding near Bengaluru.",
        image: "/images/hero-train-yard.jpg",
        // Only the first slide shows a founder badge — leave this key
        // out of a slide to hide the badge on that slide.
        founder: {
          name: "G N Ramakrishna",
          role: "Founder",
          photo: "/images/founder-ramakrishna.jpg"
        }
      },
      {
        eyebrow: "50+ Acre Railway Siding · BMCO, Oddarahalli",
        title: "Two 900m Rail Lines, Built for Simultaneous Loading",
        subtitle:
          "Just 40 km from Bangalore and 20 km from Kempe Gowda International Airport — with a 300-meter loop line and 12 acres reserved for warehouse expansion.",
        image: "/images/aerial-siding-land.jpg"
      },
      {
        eyebrow: "300+ Trucks & Trailers · 50+ Cranes",
        title: "7 Warehouses. 30,000 sq.ft. Round-the-Clock Operations.",
        subtitle:
          "Real-time tracking, dedicated security, and scalable warehousing — engineered to move steel and heavy cargo safely across Karnataka.",
        image: "/images/gallery-8.jpg"
      }
    ]
  },

  about: {
    heading: "About",
    highlight: "Us",
    paragraphs: [
      "Balaji Mover and Siding Pvt Ltd. is a key player in the domain of cargo handling, dedicated to revolutionizing the transportation and logistics industry in India.",
      "Our commitment to optimizing cargo movement has propelled us to initiate the railway siding. Our venture is not merely a logistics enterprise but a catalyst for positive change. We believe in minimizing road congestion and providing rural employment opportunities.",
      "By channeling the power of private railway sidings, we are facilitating seamless cargo movement and reducing transportation costs. In response to the dynamic economic environment and rapid urbanization around Bengaluru, we have engineered a transformative approach."
    ],
    image: "/images/route-map.jpg",
    vision: {
      title: "Our Vision",
      text: "Operating around the clock, we ensure a secure environment with dedicated security measures. Our facilities include ample truck parking space, well-equipped drivers' restrooms, and a convenient canteen, catering to the diverse needs of our workforce and visitors."
    },
    mission: {
      title: "Our Mission",
      text: "BMSPL is anticipated to significantly enhance Bangalore's import-export trade by facilitating crucial rail connectivity between the Bangalore, Mangalore, and Chennai ports, thereby providing a substantial boost to the region's economic activities."
    }
  },

  stats: [
    { value: 300, suffix: "+", label: "Trucks & Trailers" },
    { value: 50, suffix: "+", label: "Cranes" },
    { value: 7, suffix: "", label: "Warehouses · 30,000 sq.ft" },
    { value: 25, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Acres Railway Siding" },
    { value: 900, suffix: "m", label: "Full Rake Length" }
  ],

  specifications: {
    heading: "Our",
    highlight: "Specifications",
    items: [
      "BMSPL is a subsidiary unit of Balaji Transports, bringing 25+ years of experience in steel transportation.",
      "BMSPL has established a railway siding (BMCO) that originates near the Oddarahalli Railway station, located near Doddaballapura, covering an expansive area of about 50+ acres.",
      "Our railway siding is strategically located approximately 40 km from Bangalore and just 20 km from Kempe Gowda International Airport, streamlining import and export operations across Karnataka.",
      "The BMCO siding has two rail lines of 900 meters for unloading/loading, enabling simultaneous handling operations, plus a loop line of 300 meters.",
      "The platforms have a full rake length of 900 meters and a width of 25 meters each, equipped with unloading/loading facilities.",
      "12 acres of land are attached to the platform for the development of infrastructure and warehouse buildings.",
      "Our scalable business model aligns with this expanding industry while contributing to employment generation and wealth creation."
    ],
    images: [
      { src: "/images/aerial-siding-land.jpg", alt: "Aerial view of the BMCO railway siding land" },
      { src: "/images/railway-track.jpg", alt: "Newly laid railway track at the siding" },
      { src: "/images/aerial-road-rail.jpg", alt: "Aerial view of road and rail infrastructure" }
    ]
  },

  advantages: {
    heading: "Advantages",
    highlight: "of BMS",
    items: [
      "Our strategic transportation solutions in Bengaluru mitigate traffic congestion, reduce delays, and optimize infrastructure costs.",
      "Efficiently navigating urban transportation challenges, our BMS siding optimizes operations, curbs expenses, and ensures seamless cargo movement.",
      "Infusing cutting-edge technology into every aspect of our operations, including real-time tracking for precise goods movement visibility.",
      "Our strategic outskirts location ensures prompt delivery across Bangalore, streamlining operations and meeting client demands efficiently.",
      "Unlocking value through strategic alliances, we build mutually beneficial partnerships in raw material sourcing and goods import/export.",
      "Evacuating stocks from the plant, especially in consideration of local state sales, provides significant support.",
      "Assessing the feasibility of expansion and constructing warehouses based on specific requirements."
    ]
  },

  gallery: {
    heading: "Operations",
    highlight: "Gallery",
    images: [
      { src: "/images/gallery-1.jpg", alt: "Loaded trailer with steel coils" },
      { src: "/images/gallery-2.jpg", alt: "Steel coil loaded on a trailer" },
      { src: "/images/gallery-3.jpg", alt: "Crane loading steel coils onto a truck" },
      { src: "/images/gallery-4.jpg", alt: "Covered trailer transporting cargo" },
      { src: "/images/gallery-5.jpg", alt: "Trailer carrying tarped cargo" },
      { src: "/images/gallery-6.jpg", alt: "Rail wagons loaded with steel at the siding" },
      { src: "/images/gallery-7.jpg", alt: "Crane unloading steel coils onto a truck" },
      { src: "/images/gallery-8.jpg", alt: "Crane lifting steel wire coils" },
      { src: "/images/gallery-9.jpg", alt: "Rail wagons lined up at the BMCO siding" }
    ]
  },

  certifications: {
    heading: "Certifications",
    highlight: "& Compliance",
    items: [
      {
        title: "Startup India Recognition",
        desc: "Certificate of Recognition issued by the Department for Promotion of Industry and Internal Trade, Government of India (Certificate No. DIPP145841).",
        image: "/images/cert-startup-india.jpg"
      },
      {
        title: "KSPCB Consent for Operation",
        desc: "Consent for Operation (CFO — Air, Water) granted by the Karnataka State Pollution Control Board, valid through 31/12/2037.",
        image: "/images/cert-kspcb-consent.png"
      }
    ]
  },

  letter: {
    heading: "Discover Seamless Logistics for Your Business",
    subheading: "Your Trusted Transportation Partner",
    paragraphs: [
      "Greetings from BMSPL, a subsidiary of Balaji Transports, with over 25 years of expertise in steel transportation. We are excited to present our railway siding (BMCO) near Oddarahalli Railway station, strategically located just 40 km away from Bangalore.",
      "Currently a sprawling 50+ acre railway siding near Oddarahalli, with an additional 12 acres attached for upcoming development and modernization. Our cutting-edge 2-line platforms boast a 900-meter full rake length and a 25-meter width each, plus a 300-meter loop track — ensuring your goods move swiftly and seamlessly.",
      "We're not just about logistics; we're about your success. Our strategic location, a mere 20 km from Kempe Gowda Airport, means your imports and exports will be a breeze. Our scalable model is designed to grow with your business."
    ],
    banner: "/images/truck-lineup-banner.jpg"
  },

  team: {
    heading: "Our",
    highlight: "Team",
    members: [
      { name: "G N Ramakrishna", role: "Founder", photo: "/images/founder-ramakrishna.jpg" },
      { name: "G R. Raghu", role: "Director", photo: "/images/director-raghu.jpg" },
      { name: "G R. Balaji", role: "Director", photo: "/images/director-balaji.jpg" }
    ]
  },

  contact: {
    heading: "Our",
    highlight: "Contact",
    site: {
      label: "Site",
      value: "Oddarahalli-Medahalli, Lakshmidevapura Road, Doddaballapura Kasaba, Bangalore Rural – 561203 (KA)"
    },
    headOffice: {
      label: "Head Office",
      value: "Plot No.19, Sathyamangala Industrial Road, Satyamangala Industrial Area, Tumakuru-572106 (KA)"
    }
  }
};

export default siteData;
