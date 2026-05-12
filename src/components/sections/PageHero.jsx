import Image from "next/image";
import ButtonLink from "@/components/ui/ButtonLink";

export default function PageHero({ title, text, image = "/assets/hero-bg.jpg", cta = "Explore Packages", href = "/group-trips" }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-black text-white">
      <Image src={image} alt={title} fill priority sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,.82)_38%,rgba(5,5,5,.3)_100%)]" />
      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl items-end px-5 pb-20 pt-32 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-light">Travel-Hub</p>
          <h1 className="mt-4 text-5xl font-black leading-none md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{text}</p>
          <ButtonLink href={href} className="mt-8">{cta}</ButtonLink>
        </div>
      </div>
    </section>
  );
}
