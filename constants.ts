import { ContentData, EventType, Review, FaqCategory } from './types';

const corporateReviews: Review[] = [
  {
    id: '1',
    text: "DJ Miss Haze was such a pleasure to work with... She was very responsive, helped execute our vision for the event and brought amazing positive energy and fun vibes! Everyone was raving about her incredibly curated playlist.",
    author: "Jasmine",
    location: "Chicago, IL",
    role: "Famous Streetwear x Converse Influencer Event"
  },
  {
    id: '2',
    text: "She read the room perfectly, kept the energy high, and had everyone from the interns to the execs dancing like no one was watching. People are still talking about how good the music was.",
    author: "Rilie",
    location: "Kansas City, MO",
    role: "JE Dunn"
  },
  {
    id: '3',
    text: "DJ Miss Haze recently played for a fundraising gala at the Denver Art Museum, and she was incredible at creating an energetic vibe.",
    author: "Wendy",
    location: "Denver, CO",
    role: "Denver Art Museum"
  },
  {
    id: '4',
    text: "DJ Miss Haze has been the DJ for multiple work events and she is AMAZING! She brings such a positive vibe and knows how to keep the party going.",
    author: "Jessi",
    location: "Chicago, IL",
    role: "Event Manager"
  },
  {
    id: '5',
    text: "Everyone had such a great time dancing and celebrating — she really made the party unforgettable. Highly recommend her for any event where you want the vibe to stay fun and upbeat!",
    author: "Anna",
    location: "Denver, CO",
    role: "Karter School"
  },
  {
    id: '6',
    text: "Yasmin listened carefully to what we had in mind, asked thoughtful questions... All communications and setup went totally smoothly. 10/10 would hire again!",
    author: "Nisha",
    location: "Chicago, IL",
    role: "University of Chicago"
  },
  {
    id: '7',
    text: "She was very responsive, allowed us to provide a playlist in advance, and had everyone dancing! Thank you for making it special!",
    author: "Chris",
    location: "Denver, CO",
    role: "Magnolia"
  }
];

const corporateFaqs: FaqCategory[] = [
  {
    title: "DJ & MC Services",
    items: [
      {
        question: "Can you DJ and MC?",
        answer: "Yes, DJ Miss Haze is a professional DJ with live, dynamic music mixing who also MCs her events. She handles all necessary announcements, introductions, and coordinates with your planner to ensure every timeline transition is executed flawlessly."
      },
      {
        question: "How experienced are you with Corporate Events?",
        answer: "Over the past 10 years, DJ Miss Haze has worked over 200 Corporate Events, ranging from medium store events to large Fortune 500 celebrations. She is deeply experienced with PR, branding, and influencer events."
      },
      {
        question: "How do you keep the dance floor going?",
        answer: "She assesses the room's energy in real-time, blending tracks from different eras and genres seamlessly. She does not work with pre-arranged sets, allowing her to cater immediately to energy shifts."
      },
      {
        question: "Can you play multiple genres?",
        answer: "Absolutely. Classics, Country, EDM, Hip Hop, R&B, Latin, Top 40, and culture fusion (Afrobeats, Middle Eastern, Indian, etc.). Being German, she also understands European music markets well."
      },
      {
        question: "How involved can we be in music selection?",
        answer: "As involved as you like. You can provide playlists, do-not-playlists, or let her curate the entire event based on your vision."
      },
      {
        question: "Do you play clean only or also songs with explicit lyrics?",
        answer: "She can do entirely family-friendly/clean, explicit, or a mix. She always complies with client preferences. For corporate, she typically recommends clean or low-end spectrum for elegance."
      }
    ]
  },
  {
    title: "Booking & Logistics",
    items: [
      {
        question: "How far in advance should I book?",
        answer: "2-8 months recommended. Last minute/same-day emergency services available subject to availability."
      },
      {
        question: "What is your minimum booking fee?",
        answer: "Corporate Events start at $1,800. Final pricing determined during consultation."
      },
      {
        question: "Which locations do you service?",
        answer: "Hubs in Chicago, Dallas Fort Worth, and Denver. Available worldwide. Zero travel fees within 100 miles of hubs."
      },
      {
        question: "Are you insured?",
        answer: "Yes, full liability insurance. COI provided upon request."
      }
    ]
  },
  {
    title: "Equipment",
    items: [
      {
        question: "What equipment do you bring?",
        answer: "Professional BOSE speaker system, Shure cordless microphone, and dance floor lighting. All insured and tested."
      },
      {
        question: "Which add-ons do you offer?",
        answer: "Photo Booth, Audio Guestbook, CO2 Cannons, Dancing on the Clouds, Glow Sticks, Smoke Machine, and Yard Games."
      }
    ]
  }
];

export const CONTENT: Record<EventType, ContentData> = {
  [EventType.CORPORATE]: {
    themeColor: '#1833B5',
    heroTitle: "DJ Miss Haze",
    heroSubtitle: "Corporate Event DJ & MC Services",
    heroLocations: "Chicago • Dallas • Denver",
    quote: "DJ Miss Haze delivers a premium experience that aligns with your brand and engages your audience.",
    bannerTags: ["HIGH-ENERGY", "BOLD & ECLECTIC", "SOPHISTICATED", "FUN & INCLUSIVE"],
    reviews: corporateReviews,
    whyChoose: {
      title: "Why Companies Choose DJ Miss Haze",
      description: "Corporate clients choose DJ Miss Haze for her ability to balance energy, professionalism, and brand sensitivity—without compromising on vibe.",
      points: [
        "A collaborative planning process",
        "Clear communication and responsiveness",
        "Experience working with diverse corporate audiences",
        "A modern, polished aesthetic aligned with professional brands",
        "A DJ who understands timing, flow, and executive-level expectations"
      ],
      summary: "This is not a “wedding DJ crossover” or club-only approach—it’s a corporate-ready DJ experience built for business environments."
    },
    faqs: corporateFaqs
  },
  // Placeholders for other types to demonstrate architecture
  [EventType.PRIVATE]: {
    themeColor: '#8B5CF6',
    heroTitle: "DJ Miss Haze",
    heroSubtitle: "Exclusive Private Parties",
    heroLocations: "Chicago • Dallas • Denver",
    quote: "Creating intimate, high-energy atmospheres for your most exclusive gatherings.",
    bannerTags: ["EXCLUSIVE", "INTIMATE", "HIGH-ENERGY", "MEMORABLE"],
    reviews: [],
    whyChoose: {
      title: "Why Choose Us for Private Events",
      description: "Tailored vibes for birthdays, anniversaries, and VIP gatherings.",
      points: ["Personalized Playlists", "Discrete Professionalism"],
      summary: "Select Private Events from the menu to see more (Coming Soon)."
    },
    faqs: []
  },
  [EventType.WEDDING]: {
    themeColor: '#EC4899',
    heroTitle: "DJ Miss Haze",
    heroSubtitle: "Modern Wedding Entertainment",
    heroLocations: "Chicago • Dallas • Denver",
    quote: "Your love story, soundtracked perfectly.",
    bannerTags: ["ROMANTIC", "FUN", "ELEGANT", "TIMELESS"],
    reviews: [],
    whyChoose: {
      title: "Modern Weddings",
      description: "Forget the cheesy wedding DJ tropes.",
      points: ["No Cheesy Jokes", "packed Dance Floors"],
      summary: "Select Wedding from the menu to see more (Coming Soon)."
    },
    faqs: []
  },
  [EventType.OTHER]: {
    themeColor: '#10B981',
    heroTitle: "DJ Miss Haze",
    heroSubtitle: "Festivals & Special Projects",
    heroLocations: "Nationwide",
    quote: "Versatility meets technical excellence.",
    bannerTags: ["CREATIVE", "ADAPTIVE", "PROFESSIONAL", "UNIQUE"],
    reviews: [],
    whyChoose: {
      title: "Special Projects",
      description: "For everything that breaks the mold.",
      points: ["Custom Setups", "Unique Needs"],
      summary: "Select Other from the menu to see more (Coming Soon)."
    },
    faqs: []
  }
};