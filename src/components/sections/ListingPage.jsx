import PageHero from "./PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import PackageGrid from "@/components/packages/PackageGrid";
import { packages } from "@/data/packages";
import { faqs } from "@/data/siteContent";

export default function ListingPage({ title, text, image, filter, eyebrow = "Curated trips" }) {
  const trips = packages.filter((trip) => trip.category.includes(filter) || trip.region.toLowerCase().includes(filter));

  return (
    <main>
      <PageHero title={title} text={text} image={image} />
      <section className="bg-ink px-5 py-20 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow={eyebrow} title={`Best ${title} by Travel-Hub`} text="Every itinerary is built for clear pickup points, realistic travel time, clean stays and a hosted experience that feels premium without becoming stiff." />
          <div className="mt-10"><PackageGrid trips={trips} /></div>
        </div>
      </section>
      <section className="bg-black px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="FAQ" title="Before you book" />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map(([q, a]) => <details key={q} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-sm leading-6 text-white/64">{a}</p></details>)}
          </div>
        </div>
      </section>
    </main>
  );
}
