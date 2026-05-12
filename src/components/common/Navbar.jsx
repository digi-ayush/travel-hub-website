"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/45 text-white backdrop-blur-xl">
      
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-brand text-xs font-black shadow-lg shadow-brand/25 md:h-10 md:w-10 md:text-sm">TH</span>
          <span className="text-lg font-black md:text-xl">Travel-Hub</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-bold text-white/72 lg:flex">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-white">{link.label}</Link>)}
        </div>
        <a className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-brand-light md:inline-flex" href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20plan%20a%20trip">Plan Trip</a>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden" aria-label="Toggle navigation">
          <span className="text-lg font-black">{open ? "x" : "≡"}</span>
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-black/92 px-4 py-5 backdrop-blur-xl lg:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-bold text-white/78">{link.label}</Link>)}
            <a className="rounded-2xl bg-brand px-4 py-3 text-center text-sm font-black text-white" href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20plan%20a%20trip">Plan on WhatsApp</a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
