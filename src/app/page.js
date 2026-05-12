import HeroSection from "@/components/home/HeroSection";
import FeaturedToursSection from "@/components/home/FeaturedToursSection";
import HomeContentSections from "@/components/home/HomeContentSections";
import { faqs, siteUrl } from "@/data/siteContent";
import { packages } from "@/data/packages";

export const metadata = {
  title: "Travel-Hub | Group Trips, Weekend Getaways and Corporate Trips",
  description: "Premium group departures from Delhi and Chandigarh for Himachal Pradesh, Uttarakhand and Rajasthan. Explore Manali, Kedarnath, Chopta, Jibhi, Jaipur and Udaipur packages.",
  alternates: { canonical: "/" },
  keywords: ["Manali Group Trip from Delhi", "Kedarnath Tour Package", "Himachal Group Tours", "Uttarakhand Trips", "Rajasthan Weekend Trips", "Corporate Trip Packages", "Weekend Getaways from Delhi"],
  openGraph: { title: "Travel-Hub | Premium Group Trips from Delhi", description: "Hosted group trips, weekend getaways, corporate offsites and couple packages across Himachal, Uttarakhand and Rajasthan.", url: siteUrl, siteName: "Travel-Hub", images: [{ url: "/assets/hero-bg.jpg", width: 1200, height: 630, alt: "Travel-Hub Himalayan group trip" }], locale: "en_IN", type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "TravelAgency", "@id": `${siteUrl}/#agency`, name: "Travel-Hub", url: siteUrl, telephone: "+91-7065976631", areaServed: ["Himachal Pradesh", "Uttarakhand", "Rajasthan"], description: "Travel-Hub plans group trips, weekend getaways, corporate trips and couple packages across Himachal Pradesh, Uttarakhand and Rajasthan." },
    { "@type": "ItemList", name: "Travel-Hub group departure trips", itemListElement: packages.map((trip, index) => ({ "@type": "ListItem", position: index + 1, url: `${siteUrl}/packages/${trip.slug}`, name: trip.title })) },
    { "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <HeroSection />
      <FeaturedToursSection />
      <HomeContentSections />
    </main>
  );
}
