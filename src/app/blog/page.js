import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import { blogPosts } from "@/data/siteContent";

export const metadata = { title: "Travel Blog", description: "SEO-focused travel guides, packing tips, best time to visit articles, budget guides and weekend travel ideas by Travel-Hub." };

export default function Page() {
  return (
    <main>
      <PageHero title="Travel guides for better short trips." text="Packing tips, budget guides, route explainers and weekend travel ideas for Himachal, Uttarakhand and Rajasthan." image="/trips/weekend-trip.jpg" />
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => <Link key={post.slug} href="/blog" className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05]"><div className="relative aspect-[4/3]"><Image src={post.image} alt={post.title} fill sizes="25vw" className="object-cover" /></div><div className="p-5"><p className="text-xs font-black uppercase tracking-[0.18em] text-brand-light">{post.category}</p><h2 className="mt-3 text-xl font-black">{post.title}</h2><p className="mt-3 text-sm leading-6 text-white/62">{post.excerpt}</p><p className="mt-4 text-sm text-white/45">{post.minutes}</p></div></Link>)}
        </div>
      </section>
    </main>
  );
}
