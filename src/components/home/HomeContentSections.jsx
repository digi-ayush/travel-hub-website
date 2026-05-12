import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import { blogPosts, faqs, reviews, whyTravelHub } from "@/data/siteContent";

export default function HomeContentSections() {
  return (
    <>
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeader eyebrow="Why Travel-Hub" title="Premium planning with a community pulse." text="The site is designed for people who want more than a cab and hotel. They want a clean trip plan, a trusted host and a batch they can feel comfortable joining." />
          <div className="grid gap-4">
            {whyTravelHub.map(([title, text], index) => <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><span className="text-brand-light">0{index + 1}</span><h3 className="mt-2 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-white/64">{text}</p></article>)}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-black px-5 py-20 text-white md:px-8 lg:px-10">
        <Image src="/photos/manali1.jpg" alt="Corporate trip in Himachal with Travel-Hub" fill sizes="100vw" className="object-cover opacity-28" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl"><SectionHeader eyebrow="Corporate trips" title="Offsites your team will talk about after Monday." text="Plan team bonding in Himachal, Uttarakhand or Rajasthan with private transport, reliable stays, hosted activities and clean invoicing support." /></div>
          <Link href="/corporate-trips" className="rounded-full bg-white px-6 py-4 text-sm font-black text-black">Build an Offsite</Link>
        </div>
      </section>
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Traveler stories" title="Real trips. Real batch energy." align="center" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((item) => <article key={item.name} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><p className="text-amber-300">★★★★★</p><p className="mt-4 text-sm leading-6 text-white/68">{item.text}</p><b className="mt-5 block">{item.name}</b><span className="text-sm text-brand-light">{item.trip}</span></article>)}
          </div>
        </div>
      </section>
      <section className="bg-black px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Instagram style gallery" title="Mountain mornings, fort evenings, batch memories." />
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["/photos/manali2.jpg", "/photos/kedarnath1.jpg", "/photos/tungnath1.jpg", "/photos/jibhi3.jpg", "/photos/UdaipurR1.jpg", "/photos/udaipur.png", "/trips/strangers-trip.jpg", "/trips/weekend-trip.jpg"].map((src) => <div key={src} className="relative aspect-square overflow-hidden rounded-2xl"><Image src={src} alt="Travel-Hub trip gallery" fill sizes="25vw" className="object-cover" /></div>)}
          </div>
        </div>
      </section>
      <section id="faq" className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeader eyebrow="FAQ" title="Clear answers before you pack." />
          <div className="grid gap-4">
            {faqs.map(([q, a]) => <details key={q} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5"><summary className="cursor-pointer font-black">{q}</summary><p className="mt-3 text-sm leading-6 text-white/64">{a}</p></details>)}
          </div>
        </div>
      </section>
      <section className="bg-brand px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">Your next group trip can start with one message.</h2>
          <a href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20plan%20a%20trip" className="rounded-full bg-white px-7 py-4 text-sm font-black text-black">WhatsApp Travel-Hub</a>
        </div>
      </section>
      <section className="bg-black px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Blog" title="SEO travel guides for smarter short trips." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-brand-light">{post.category}</p><h3 className="mt-3 text-xl font-black">{post.title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{post.excerpt}</p></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
