import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata = { title: "About Us", description: "Travel-Hub is a premium India-focused travel company operating group trips in Himachal Pradesh, Uttarakhand and Rajasthan." };

export default function Page() {
  return (
    <main>
      <PageHero title="Built for the new Indian traveler." text="Travel-Hub creates hosted group trips, daily departures, weekend getaways, corporate offsites and couple packages across Himachal Pradesh, Uttarakhand and Rajasthan." image="/assets/hero-bg.jpg" />
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="About Travel-Hub" title="Focused routes. Better trips." text="We do not chase every destination on the map. Our focus is sharp: mountain routes in Himachal and Uttarakhand, plus heritage weekends in Rajasthan. That focus helps us build better vendor relationships, better batch handling and cleaner travel experiences." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {["Community-driven batches", "Premium practical stays", "Delhi and Chandigarh pickup clarity"].map((item) => <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-xl font-black">{item}</div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
