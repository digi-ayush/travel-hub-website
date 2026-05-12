"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { homeStats, reviews } from "@/data/siteContent";
import "swiper/css";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image src="/assets/hero-bg.jpg" alt="Himalayan road trip with Travel-Hub" fill priority sizes="100vw" className="object-cover opacity-58" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,.82)_42%,rgba(3,3,3,.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(69,129,104,.24),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1.08fr_.92fr] lg:px-10">
        <div className="motion-rise">
          <p className="text-xs font-black uppercase tracking-[0.26em] text-brand-light">Delhi and Chandigarh departures</p>
          <h1 className="cinematic-title mt-5 max-w-4xl text-5xl font-black leading-none md:text-7xl lg:text-8xl">
            Premium group trips for the wild-hearted.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            Travel-Hub runs cinematic fixed departures, weekend getaways, corporate offsites and couple trips across Himachal Pradesh, Uttarakhand and Rajasthan.
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 rounded-3xl border border-white/12 bg-white/10 p-3 backdrop-blur md:grid-cols-[1fr_auto]">
            <input className="h-13 rounded-full border border-white/12 bg-black/40 px-5 text-sm font-bold text-white outline-none placeholder:text-white/44" placeholder="Search Manali, Kedarnath, Chopta, Jibhi, Jaipur" />
            <Link href="/group-trips" className="inline-flex h-13 items-center justify-center rounded-full bg-brand px-7 text-sm font-black text-white">Find Trips</Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/weekend-getaways" className="rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-black">Weekend Getaways</Link>
            <Link href="/corporate-trips" className="rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-black">Corporate Trips</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="ml-auto h-[500px] max-w-md rounded-3xl border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
            <Swiper direction="vertical" slidesPerView={3} spaceBetween={16} loop speed={1800} autoplay={{ delay: 900, disableOnInteraction: false }} modules={[Autoplay]} className="h-full">
              {reviews.map((review) => (
                <SwiperSlide key={review.name}>
                  <div className="h-full rounded-2xl border border-white/10 bg-black/45 p-5">
                    <div className="flex items-center justify-between">
                      <div><p className="font-black">{review.name}</p><p className="text-xs text-brand-light">{review.trip}</p></div>
                      <p className="text-amber-300">★★★★★</p>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-white/72">{review.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="absolute inset-x-5 bottom-6 mx-auto grid max-w-7xl grid-cols-2 gap-3 md:inset-x-8 md:grid-cols-4 lg:inset-x-10">
          {homeStats.map(([value, label]) => <div key={label} className="glass rounded-2xl p-4"><p className="text-2xl font-black">{value}</p><p className="mt-1 text-xs font-bold text-white/58">{label}</p></div>)}
        </div>
      </div>
    </section>
  );
}
