import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import PackageGrid from "@/components/packages/PackageGrid";
import { packages } from "@/data/packages";
import { categories, destinations, upcomingDepartures } from "@/data/siteContent";

export default function FeaturedToursSection() {
  return (
    <>
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Popular trips" title="Fixed departures people actually want to join." text="High-energy batches from Delhi and Chandigarh, designed for students, working professionals, couples, solo travelers and corporate teams." />
          <div className="mt-10"><PackageGrid trips={packages.slice(0, 6)} /></div>
        </div>
      </section>
      <section className="bg-black px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeader eyebrow="Upcoming group departures" title="Seats are moving on these batches." text="A quick view for Delhi NCR travelers comparing dates, durations and starting prices before messaging the team." />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]">
            {upcomingDepartures.map((item) => (
              <Link key={item.href} href={item.href} className="grid gap-3 border-b border-white/10 p-5 transition last:border-b-0 hover:bg-white/[0.05] md:grid-cols-[1.2fr_.7fr_.7fr_.7fr]">
                <b>{item.name}</b><span className="text-brand-light">{item.date}</span><span className="text-white/64">{item.seats}</span><span className="font-black">{item.price}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Adventure categories" title="Choose the vibe before the destination." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((item) => <Link key={item.href} href={item.href} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 transition hover:-translate-y-1 hover:bg-white/[0.08]"><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p></Link>)}
          </div>
        </div>
      </section>
      <section className="bg-black px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Destinations" title="Three regions. Deep local focus." text="Travel-Hub does not sell foreign packages, flights, visas or cruises. We focus on Himachal Pradesh, Uttarakhand and Rajasthan so the routes stay sharp." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {destinations.map((item) => <Link key={item.href} href={item.href} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><h3 className="text-2xl font-black">{item.title}</h3><p className="mt-3 text-sm leading-6 text-white/64">{item.text}</p></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
