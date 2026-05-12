import PageHero from "@/components/sections/PageHero";

export const metadata = { title: "Contact Us", description: "Contact Travel-Hub for group trips, weekend getaways, corporate trips and couple packages from Delhi and Chandigarh." };

export default function Page() {
  return (
    <main>
      <PageHero title="Tell us where the road should start." text="Share your dates, pickup city, group size and preferred region. Travel-Hub will help you choose the right fixed departure or custom package." image="/photos/jibhi3.jpg" cta="WhatsApp Now" href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20plan%20a%20trip" />
      <section className="bg-ink px-5 py-20 text-white md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          <a className="rounded-3xl border border-white/10 bg-white/[0.05] p-6" href="tel:+917065976631"><b>Call</b><p className="mt-2 text-white/64">+91 70659 76631</p></a>
          <a className="rounded-3xl border border-white/10 bg-white/[0.05] p-6" href="https://wa.me/917065976631"><b>WhatsApp</b><p className="mt-2 text-white/64">Fastest trip planning support</p></a>
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6"><b>Pickup Cities</b><p className="mt-2 text-white/64">Delhi and Chandigarh</p></div>
        </div>
      </section>
    </main>
  );
}
