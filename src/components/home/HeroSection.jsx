"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { homeStats, reviews } from "@/data/siteContent";
import "swiper/css";

const quickLinks = [
  ["Manali", "/packages/manali-kasol"],
  ["Kedarnath", "/packages/kedarnath"],
  ["Chopta", "/packages/chopta-tungnath"],
  ["Jibhi", "/packages/jibhi-tirthan"],
];

export default function HeroSection() {
  return (
    <section className="mobile-safe-hero relative overflow-hidden bg-black text-white">
      <Image
        src="/assets/hero-bg.jpg"
        alt="Cinematic Himalayan group road trip by Travel-Hub"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] opacity-70 md:object-center md:opacity-58"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.34)_0%,rgba(0,0,0,.58)_38%,#050505_100%)] md:bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,.82)_42%,rgba(3,3,3,.3)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(246,177,95,.2),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(69,129,104,.3),transparent_32%)]" />
      <div className="pointer-events-none absolute -right-16 top-28 hidden rotate-90 text-8xl font-black uppercase leading-none tracking-normal md:block lg:text-9xl">
        <span className="hero-wordmark">Himalayan</span>
      </div>

      <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-end gap-8 px-4 pb-5 pt-24 sm:px-5 md:px-8 md:pb-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pt-28">
        <div className="motion-rise pb-36 md:pb-28 lg:pb-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-black/34 px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-sand backdrop-blur">
            Delhi NCR batches
            <span className="h-1.5 w-1.5 rounded-full bg-brand-light" />
            Chandigarh pickup
          </div>

          <h1 className="cinematic-title mt-5 max-w-[760px] text-[2.55rem] font-black uppercase leading-[0.82] sm:text-7xl md:text-8xl lg:text-[6.4rem] leading-none">
            Trips that feel like a movie.

          </h1>

          <p className="editorial-kicker mt-4 text-2xl text-sand/95 md:text-4xl">
            not a checklist.
          </p>

          <p className="mt-5 max-w-xl text-[15px] font-semibold leading-7 text-white/74 md:text-lg md:leading-8">
            Premium group departures, weekend getaways, couple escapes and corporate offsites across Himachal, Uttarakhand and Rajasthan.
          </p>

          <div className="mt-6 grid gap-3 rounded-[1.6rem] border border-white/12 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl sm:max-w-xl sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="trip-search">Search trips</label>
            <input
              id="trip-search"
              className="h-13 min-w-0 rounded-full border border-white/10 bg-black/42 px-5 text-[13px] font-bold text-white outline-none placeholder:text-white/42"
              placeholder="Search Manali, Kedarnath, Chopta..."
            />
            <Link href="/group-trips" className="inline-flex h-13 items-center justify-center rounded-full bg-brand px-7 text-sm font-black text-white shadow-lg shadow-brand/25 transition hover:bg-[#579b7e]">
              Find Trips
            </Link>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap">
            {quickLinks.map(([label, href]) => (
              <Link key={label} href={href} className="shrink-0 rounded-full border border-white/14 bg-black/34 px-4 py-2 text-xs font-black text-white/86 backdrop-blur transition hover:bg-white hover:text-black">
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-5 grid max-w-xl grid-cols-2 gap-2 sm:flex sm:flex-wrap">
            <Link href="/weekend-getaways" className="rounded-2xl bg-white px-4 py-3 text-center text-sm font-black text-black shadow-xl shadow-black/20">
              Weekend Trips
            </Link>
            <a href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20plan%20a%20trip" className="rounded-2xl border border-white/16 bg-white/10 px-4 py-3 text-center text-sm font-black text-white backdrop-blur">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="ml-auto max-w-md rounded-[2rem] border border-white/12 bg-white/8 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-4 flex items-center justify-between px-2">
              <p className="text-sm font-black text-sand">Live traveler notes</p>
              <p className="rounded-full bg-brand-light px-3 py-1 text-xs font-black text-black">4.8 rated</p>
            </div>
            <Swiper direction="vertical" slidesPerView={3} spaceBetween={16} loop speed={1800} autoplay={{ delay: 900, disableOnInteraction: false }} modules={[Autoplay]} className="h-[476px]">
              {reviews.map((review) => (
                <SwiperSlide key={review.name}>
                  <div className="h-full rounded-3xl border border-white/10 bg-black/48 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-black">{review.name}</p>
                        <p className="text-xs text-brand-light">{review.trip}</p>
                      </div>
                      <p className="text-sm text-ember">5 star</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/72">{review.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="absolute inset-x-4 bottom-5 mx-auto max-w-7xl sm:inset-x-5 md:inset-x-8 lg:inset-x-10 lg:bottom-8">
          <div className="grid grid-cols-4 gap-2 rounded-[1.4rem] border border-white/10 bg-black/38 p-2 backdrop-blur-xl md:gap-3 md:bg-transparent md:p-0 md:backdrop-blur-0">
            {homeStats.map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.08] p-3 backdrop-blur md:p-4">
                <p className="text-lg font-black leading-none md:text-2xl">{value}</p>
                <p className="mt-1 text-[10px] font-bold leading-tight text-white/58 md:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
