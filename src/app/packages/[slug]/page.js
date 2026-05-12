import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PackageCard from "@/components/packages/PackageCard";
import { formatPrice, getPackageBySlug, packages } from "@/data/packages";
import { reviews, siteUrl } from "@/data/siteContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return packages.map((trip) => ({ slug: trip.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const trip = getPackageBySlug(slug);
  if (!trip) return {};
  return {
    title: trip.title,
    description: `${trip.title} with ${trip.route}, ${trip.duration}, pickup points, itinerary, inclusions, stay details and WhatsApp booking support by Travel-Hub.`,
    alternates: { canonical: `/packages/${trip.slug}` },
    keywords: trip.keywords,
    openGraph: { title: trip.title, description: trip.overview, url: `${siteUrl}/packages/${trip.slug}`, images: [{ url: trip.image, width: 1200, height: 630, alt: trip.title }] },
  };
}

function DetailBlock({ title, children }) {
  return <section className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><h2 className="text-2xl font-black text-white">{title}</h2><div className="mt-5 text-white/68">{children}</div></section>;
}

export default async function PackageDetailPage({ params }) {
  const { slug } = await params;
  const trip = getPackageBySlug(slug);
  if (!trip) notFound();
  const related = packages.filter((item) => item.slug !== trip.slug && (item.region === trip.region || item.category.some((tag) => trip.category.includes(tag)))).slice(0, 3);
  const jsonLd = { "@context": "https://schema.org", "@type": "TouristTrip", name: trip.title, description: trip.overview, image: `${siteUrl}${trip.image}`, touristType: ["College students", "Working professionals", "Couples", "Solo travelers"], offers: { "@type": "Offer", price: trip.price, priceCurrency: "INR", availability: "https://schema.org/InStock" } };

  return (
    <main className="bg-ink text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <section className="relative min-h-[82vh] overflow-hidden bg-black">
        <Image src={trip.image} alt={trip.title} fill priority sizes="100vw" className="object-cover opacity-58" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-black/62 to-black/18" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-5 pb-14 pt-32 md:px-8 lg:px-10">
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-light">{trip.region} • {trip.batch}</p>
            <h1 className="mt-4 text-5xl font-black leading-none md:text-7xl">{trip.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72">{trip.overview}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {trip.highlights.map((item) => <span key={item} className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold">{item}</span>)}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:px-8 lg:grid-cols-[1fr_360px] lg:px-10">
        <div className="grid gap-6">
          <DetailBlock title="Trip Overview"><p className="leading-7">{trip.overview}</p></DetailBlock>
          <DetailBlock title="Itinerary"><div className="grid gap-4">{trip.itinerary.map(([day, title, text]) => <article key={day} className="rounded-2xl bg-black/35 p-5"><p className="text-brand-light">{day}</p><h3 className="mt-1 font-black text-white">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></article>)}</div></DetailBlock>
          <div className="grid gap-6 md:grid-cols-2">
            <DetailBlock title="Inclusions"><ul className="grid gap-2">{trip.inclusions.map((item) => <li key={item}>• {item}</li>)}</ul></DetailBlock>
            <DetailBlock title="Exclusions"><ul className="grid gap-2">{trip.exclusions.map((item) => <li key={item}>• {item}</li>)}</ul></DetailBlock>
          </div>
          <DetailBlock title="Pickup Points"><div className="flex flex-wrap gap-3">{trip.pickupPoints.map((item) => <span key={item} className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">{item}</span>)}</div></DetailBlock>
          <div className="grid gap-6 md:grid-cols-2"><DetailBlock title="Stay Details"><p className="leading-7">{trip.stay}</p></DetailBlock><DetailBlock title="Transport Details"><p className="leading-7">{trip.transport}</p></DetailBlock></div>
          <DetailBlock title="Gallery"><div className="grid grid-cols-2 gap-3 md:grid-cols-4">{trip.gallery.map((src) => <div key={src} className="relative aspect-square overflow-hidden rounded-2xl"><Image src={src} alt={`${trip.shortTitle} gallery`} fill sizes="25vw" className="object-cover" /></div>)}</div></DetailBlock>
          <DetailBlock title="FAQs"><div className="grid gap-3">{trip.faqs.map(([q, a]) => <details key={q} className="rounded-2xl bg-black/35 p-5"><summary className="cursor-pointer font-black text-white">{q}</summary><p className="mt-3 text-sm leading-6">{a}</p></details>)}</div></DetailBlock>
          <DetailBlock title="Reviews"><div className="grid gap-4 md:grid-cols-3">{reviews.slice(0, 3).map((review) => <article key={review.name} className="rounded-2xl bg-black/35 p-5"><p className="text-amber-300">★★★★★</p><p className="mt-3 text-sm leading-6">{review.text}</p><b className="mt-4 block text-white">{review.name}</b></article>)}</div></DetailBlock>
        </div>
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-white/10 bg-black/70 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm text-white/52">Starting from</p>
            <p className="mt-1 text-4xl font-black">{formatPrice(trip.price)}</p>
            <p className="mt-2 text-sm text-white/60">{trip.duration} • {trip.route}</p>
            <div className="mt-6 grid gap-3">
              <a href={`https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20book%20${encodeURIComponent(trip.title)}`} className="rounded-full bg-brand px-5 py-4 text-center text-sm font-black">WhatsApp CTA</a>
              <Link href="/contact-us" className="rounded-full border border-white/15 px-5 py-4 text-center text-sm font-black">Send Enquiry</Link>
            </div>
          </div>
        </aside>
      </section>
      <section className="px-5 pb-20 md:px-8 lg:px-10"><div className="mx-auto max-w-7xl"><h2 className="text-3xl font-black">Related Trips</h2><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((item) => <PackageCard key={item.slug} trip={item} />)}</div></div></section>
    </main>
  );
}
