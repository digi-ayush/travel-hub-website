"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/siteContent";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/55 text-white backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-black">TH</span>
          <span className="text-xl font-black">Travel-Hub</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-bold text-white/72 lg:flex">
          {navLinks.map((link) => <Link key={link.href} href={link.href} className="transition hover:text-white">{link.label}</Link>)}
        </div>
        <a className="hidden rounded-full bg-white px-5 py-3 text-sm font-black text-black transition hover:bg-brand-light md:inline-flex" href="https://wa.me/917065976631?text=Hi%20Travel-Hub,%20I%20want%20to%20plan%20a%20trip">Plan Trip</a>
        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 lg:hidden" aria-label="Toggle navigation">
          <span className="text-xl">{open ? "x" : "="}</span>
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-black px-5 py-5 lg:hidden">
          <div className="grid gap-4">
            {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-bold text-white/78">{link.label}</Link>)}
          </div>
        </div>
      ) : null}
    </header>
  );
}
