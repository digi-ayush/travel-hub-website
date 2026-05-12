import { packages } from "./packages";

export const siteUrl = "https://travel-hub.in";

export const navLinks = [
  { label: "Group Trips", href: "/group-trips" },
  { label: "Weekend", href: "/weekend-getaways" },
  { label: "Corporate", href: "/corporate-trips" },
  { label: "Couples", href: "/couple-packages" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export const homeStats = [["12k+", "Travelers hosted"], ["90+", "Monthly departures"], ["3", "Operating states"], ["4.8/5", "Average rating"]];

export const reviews = [
  { name: "Aarav", trip: "Manali Kasol", text: "The Manali group trip felt premium but still youthful. Clean stay, clear pickup, and the trip captain kept the whole batch connected." },
  { name: "Isha", trip: "Chopta Tungnath", text: "Perfect weekend reset from Delhi. The sunrise trek was tough, beautiful and completely worth the early wake-up call." },
  { name: "Rohan", trip: "Kedarnath", text: "Kedarnath logistics can be stressful, but Travel-Hub made the route, stay and trek plan very clear for our group." },
  { name: "Meera", trip: "Udaipur", text: "Our couple trip had the right balance of private time and planned sightseeing. The hotel recommendation was excellent." },
];

export const destinations = [
  { title: "Himachal Pradesh", href: "/himachal-trips", image: "/photos/himachal.jpg", text: "Manali, Kasol, Jibhi and Tirthan itineraries for group departures, strangers trips, couples and Himalayan road trips." },
  { title: "Uttarakhand", href: "/uttarakhand-trips", image: "/photos/tungnath2.jpg", text: "Kedarnath, Chopta Tungnath and high-energy weekend treks built around clear pickups and practical stays." },
  { title: "Rajasthan", href: "/rajasthan-trips", image: "/trips/Royal-Rajsthan.jpg", text: "Jaipur, Pushkar, Udaipur and desert-flavored weekend trips for Delhi NCR travelers." },
];

export const categories = [
  { title: "Group Trips", href: "/group-trips", image: "/trips/strangers-trip.jpg", text: "Hosted fixed departures for students, solo travelers and working professionals." },
  { title: "Weekend Getaways", href: "/weekend-getaways", image: "/trips/weekend-trip.jpg", text: "Friday night departures from Delhi for mountains, treks and Rajasthan weekends." },
  { title: "Corporate Trips", href: "/corporate-trips", image: "/photos/manali1.jpg", text: "Offsites, team bonding and reward trips in Himachal, Uttarakhand and Rajasthan." },
  { title: "Couple Trips", href: "/couple-packages", image: "/trips/Romantic-gateways.jpg", text: "Private room stays, relaxed pacing and romantic add-ons for Himachal or Rajasthan." },
];

export const upcomingDepartures = packages.slice(0, 5).map((trip, index) => ({
  name: trip.shortTitle,
  date: ["May 16", "May 17", "May 23", "May 24", "May 30"][index],
  duration: trip.duration,
  seats: ["8 seats", "12 seats", "6 seats", "10 seats", "9 seats"][index],
  price: `From Rs ${trip.price.toLocaleString("en-IN")}`,
  href: `/packages/${trip.slug}`,
}));

export const whyTravelHub = [
  ["Trip captains who host, not just coordinate", "Departures are designed around social energy while keeping safety, timing and comfort visible."],
  ["Delhi and Chandigarh pickups that stay simple", "Clear reporting points and batch updates make the first step predictable."],
  ["Only three focused regions", "Himachal Pradesh, Uttarakhand and Rajasthan are our core routes, which keeps quality tight."],
  ["Premium stays without fake luxury", "We choose clean, well-located properties that suit group travel, couples and teams."],
];

export const faqs = [
  ["Does Travel-Hub operate outside India?", "No. Travel-Hub currently focuses only on Himachal Pradesh, Uttarakhand and Rajasthan."],
  ["Are flights or visa services available?", "No. We do not sell flights, visa services, cruises or foreign destination packages."],
  ["Which cities do group trips start from?", "Most group departures start from Delhi. Select Himachal batches also allow Chandigarh pickup."],
  ["Are strangers trips safe for solo travelers?", "Yes. Batches are hosted by trip captains, room sharing is managed carefully and travelers receive clear guidance."],
];

export const blogPosts = [
  { slug: "manali-group-trip-from-delhi-guide", title: "Manali Group Trip from Delhi: Route, Cost, Best Time and What to Expect", category: "Travel Guides", excerpt: "A practical guide for Delhi NCR travelers planning a hosted Manali Kasol group departure.", image: "/photos/manali3.jpg", minutes: "7 min read" },
  { slug: "kedarnath-tour-package-packing-list", title: "Kedarnath Tour Package Packing List for First-Time Trekkers", category: "Packing Tips", excerpt: "Shoes, rain layers, medicines, ID documents and realistic trek essentials for Kedarnath.", image: "/photos/kedarnath2.jpg", minutes: "6 min read" },
  { slug: "best-weekend-getaways-from-delhi", title: "Best Weekend Getaways from Delhi for Groups, Couples and Solo Travelers", category: "Weekend Travel Ideas", excerpt: "Compare Chopta, Jibhi, Jaipur Pushkar and Manali for budget, travel time and vibe.", image: "/trips/weekend-trip.jpg", minutes: "8 min read" },
  { slug: "rajasthan-weekend-trip-budget-guide", title: "Rajasthan Weekend Trips: Budget Guide for Jaipur, Pushkar and Udaipur", category: "Budget Guides", excerpt: "A clean cost breakdown for Delhi travelers planning short Rajasthan group or couple packages.", image: "/photos/udaipur.png", minutes: "5 min read" },
];
