import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { siteUrl } from "@/data/siteContent";

const hotelsRoot = path.join(process.cwd(), "public", "travel-hub Hotels");

const hotelDetails = [
  {
    name: "Flora Hills View",
    displayName: "Flora Hills View (Riverside Cottages & Resort)",
    folder: "Flora Hills View (Riverside Cottages & Resort)",
    style: "Riverside cottages and resort stay",
    description:
      "A calm cottage-style stay designed for travelers who want Manali's mountain air with a softer, resort-like rhythm. The property works beautifully for groups and couples who prefer open views, warm rooms, and a relaxed evening after sightseeing or a long drive.",
    highlights: ["Riverside resort feel", "Cottage-style rooms", "Good for groups and couples"],
  },
  {
    name: "Hotel Hidimba Palace",
    displayName: "Hotel Hidimba Palace",
    folder: "Hotel Hidimba Palace",
    style: "Classic Manali hotel near the old-town side",
    description:
      "A comfortable Manali stay with a warm hill-hotel character, suited for travelers who want easy access to the town experience while keeping the stay simple, clean, and reliable. It is a practical choice for sightseeing-focused itineraries and hosted Travel-Hub batches.",
    highlights: ["Town-friendly location", "Comfortable rooms", "Ideal for sightseeing stays"],
  },
  {
    name: "Hotel SNO Cottage Manali",
    displayName: "Hotel SNO Cottage Manali",
    folder: "Hotel SNO Cottage Manali",
    style: "Cozy cottage stay for mountain breaks",
    description:
      "A cottage-led Manali property with a homely mountain mood, made for easy mornings, crisp weather, and comfortable nights. It suits small groups, friends, and couples looking for a stay that feels personal without losing essential hotel convenience.",
    highlights: ["Cottage ambience", "Cozy interiors", "Great for relaxed Manali trips"],
  },
  {
    name: "The Avenue Manali",
    displayName: "The Avenue Manali River Side Hotel",
    folder: "The Avenue Manali River side hotel",
    style: "River side hotel experience",
    description:
      "A polished river-side option for guests who like the sound and freshness of Manali's waters close to the stay. The Avenue is a strong fit for premium group departures, couple plans, and travelers who want a scenic base with a more refined hotel feel.",
    highlights: ["River side setting", "Premium stay feel", "Scenic Manali base"],
  },
  {
    name: "Hotel High Q",
    displayName: "Hotel High Q",
    folder: "Hotel High Q",
    style: "Smart, comfortable hotel stay",
    description:
      "A straightforward, well-presented hotel option for guests who value comfort, tidy rooms, and efficient access to the trip plan. Hotel High Q is a dependable stay choice for travelers who want a crisp check-in experience and a quiet place to recharge.",
    highlights: ["Clean hotel comfort", "Efficient trip base", "Good for hosted batches"],
  },
  {
    name: "Apple Bud Chalet",
    displayName: "Apple Bud Chalet",
    folder: "Apple Bud Chalet",
    style: "Chalet-style mountain stay",
    description:
      "A chalet-style stay with a warm, wood-and-mountain personality that fits Manali's slower side. Apple Bud Chalet is suited for guests who want a cozy holiday feel, photogenic corners, and a stay that makes the evenings feel as memorable as the daytime itinerary.",
    highlights: ["Chalet character", "Cozy mountain mood", "Photogenic stay experience"],
  },
];

const imageExtensions = new Set([".avif", ".jpg", ".jpeg", ".png", ".webp"]);
const videoExtensions = new Set([".mp4", ".webm", ".mov"]);
const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

function toPublicUrl(filePath) {
  const relative = path.relative(path.join(process.cwd(), "public"), filePath);
  return `/${relative.split(path.sep).map(encodeURIComponent).join("/")}`;
}

function getMediaForHotel(folder) {
  const directory = path.join(hotelsRoot, folder);
  if (!fs.existsSync(directory)) {
    return { images: [], videos: [] };
  }

  const files = fs
    .readdirSync(directory, { withFileTypes: true })
    .filter((item) => item.isFile())
    .map((item) => path.join(directory, item.name))
    .sort((a, b) => collator.compare(path.basename(a), path.basename(b)));

  return files.reduce(
    (media, file) => {
      const extension = path.extname(file).toLowerCase();
      if (imageExtensions.has(extension)) {
        media.images.push(toPublicUrl(file));
      }
      if (videoExtensions.has(extension)) {
        media.videos.push(toPublicUrl(file));
      }
      return media;
    },
    { images: [], videos: [] }
  );
}

function getHotels() {
  return hotelDetails.map((hotel) => ({
    ...hotel,
    ...getMediaForHotel(hotel.folder),
    id: hotel.folder
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
  }));
}

export const metadata = {
  title: "Cozy Hotels in Manali",
  description:
    "Travel-Hub presents cozy Manali hotels including Flora Hills View, Hotel Hidimba Palace, Hotel SNO Cottage Manali, The Avenue Manali, Hotel High Q and Apple Bud Chalet.",
  alternates: { canonical: "/hotels" },
  openGraph: {
    title: "Travel Hub Presents Cozy Hotels",
    description: "A professional hotel collection for Travel-Hub Manali trips with real hotel photos and stay descriptions.",
    url: `${siteUrl}/hotels`,
    siteName: "Travel-Hub",
    images: [{ url: "/travel-hub%20Hotels/Apple%20Bud%20Chalet/7b44e1a6-da41-4694-b747-20c07114afb3.avif", width: 1200, height: 630, alt: "Apple Bud Chalet Manali" }],
    locale: "en_IN",
    type: "website",
  },
};

export default function HotelsPage() {
  const hotels = getHotels();
  const totalPhotos = hotels.reduce((count, hotel) => count + hotel.images.length, 0);
  const heroImages = hotels.map((hotel) => hotel.images[0]).filter(Boolean).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Travel-Hub cozy hotels in Manali",
    itemListElement: hotels.map((hotel, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: hotel.displayName,
      url: `${siteUrl}/hotels#${hotel.id}`,
    })),
  };

  return (
    <main className="bg-[#080908] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="relative overflow-hidden bg-black px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36 lg:px-10">
        <div className="absolute inset-0">
          {heroImages[0] ? <Image src={heroImages[0]} alt="Cozy Manali hotel stay by Travel-Hub" fill priority sizes="100vw" className="object-cover opacity-45" /> : null}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.84)_46%,rgba(5,5,5,.25)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#080908] to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.92fr] lg:items-end">
          <div className="max-w-4xl pt-10">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-light">Travel-Hub Presents</p>
            <h1 className="cinematic-title mt-4 text-5xl font-black leading-none md:text-7xl lg:text-8xl">Cozy Hotels</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              A curated Manali stay collection for Travel-Hub guests, featuring real hotel photos, clear stay positioning, and comfortable options for group trips, couples, and private holidays.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#hotel-list" className="rounded-full bg-white px-6 py-3 text-sm font-black text-black transition hover:bg-brand-light">View Hotels</a>
              <a href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20know%20about%20hotel%20stays" className="rounded-full border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:border-brand-light hover:text-brand-light">Ask on WhatsApp</a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {heroImages.map((image, index) => (
              <div key={image} className={`relative overflow-hidden rounded-[8px] border border-white/12 bg-white/5 ${index === 0 ? "col-span-2 row-span-2 aspect-[1.18/1]" : "aspect-square"}`}>
                <Image src={image} alt={`Travel-Hub hotel preview ${index + 1}`} fill sizes="(min-width: 1024px) 18vw, 30vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#101411] px-5 py-6 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 text-sm font-bold text-white/72 md:grid-cols-3">
          <div><span className="block text-3xl font-black text-white">{hotels.length}</span> curated hotel options</div>
          <div><span className="block text-3xl font-black text-white">{totalPhotos}</span> real hotel photos included</div>
          <div><span className="block text-3xl font-black text-white">Manali</span> stays for Travel-Hub trips</div>
        </div>
      </section>

      <section id="hotel-list" className="bg-[#080908] px-5 py-16 md:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-kicker text-lg text-brand-light">List of Hotel</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">Stay Collection</h2>
            </div>
            <div className="flex max-w-3xl flex-wrap gap-2">
              {hotels.map((hotel) => (
                <a key={hotel.id} href={`#${hotel.id}`} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-black text-white/70 transition hover:border-brand-light hover:text-white">
                  {hotel.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-12">
            {hotels.map((hotel, hotelIndex) => (
              <article key={hotel.id} id={hotel.id} className="scroll-mt-28 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045]">
                <div className={`grid gap-0 lg:grid-cols-2 ${hotelIndex % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}>
                  <div className="relative min-h-[360px] md:min-h-[520px]">
                    {hotel.images[0] ? <Image src={hotel.images[0]} alt={`${hotel.displayName} main view`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /> : null}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-light">{hotel.style}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-10">
                    <div>
                      <p className="text-sm font-black uppercase tracking-[0.22em] text-white/42">Hotel {String(hotelIndex + 1).padStart(2, "0")}</p>
                      <h3 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{hotel.displayName}</h3>
                      <p className="mt-5 text-base leading-8 text-white/68">{hotel.description}</p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {hotel.highlights.map((highlight) => (
                          <span key={highlight} className="rounded-full bg-brand/18 px-4 py-2 text-xs font-black text-brand-light">{highlight}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-sm font-bold text-white/58">
                      <div><span className="block text-2xl font-black text-white">{hotel.images.length}</span> photos</div>
                      <div><span className="block text-2xl font-black text-white">{hotel.videos.length}</span> videos</div>
                      <div><span className="block text-2xl font-black text-white">Cozy</span> stay type</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 p-4 md:p-6">
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
                    {hotel.images.map((image, imageIndex) => (
                      <div key={image} className={`relative overflow-hidden rounded-[8px] bg-white/5 ${imageIndex % 9 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"}`}>
                        <Image src={image} alt={`${hotel.displayName} photo ${imageIndex + 1}`} fill sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw" className="object-cover transition duration-500 hover:scale-105" />
                      </div>
                    ))}
                  </div>

                  {hotel.videos.length ? (
                    <div className="mt-3 grid gap-3 md:grid-cols-2">
                      {hotel.videos.map((video, videoIndex) => (
                        <video key={video} className="aspect-video w-full rounded-[8px] border border-white/10 bg-black object-cover" controls preload="metadata">
                          <source src={video} type="video/mp4" />
                          {`${hotel.displayName} video ${videoIndex + 1}`}
                        </video>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-5 py-16 md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-light">Ready to plan?</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Choose the stay that fits your trip.</h2>
          </div>
          <Link href="/contact-us" className="inline-flex rounded-full bg-brand px-6 py-3 text-sm font-black text-white transition hover:bg-brand-light hover:text-black">
            Contact Travel-Hub
          </Link>
        </div>
      </section>
    </main>
  );
}
