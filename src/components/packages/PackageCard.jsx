import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/packages";

export default function PackageCard({ trip }) {
  return (
    <article className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur">
      <Link href={`/packages/${trip.slug}`} className="block">
        <div className="relative aspect-[4/4.7] overflow-hidden sm:aspect-[4/5]">
          <Image
            src={trip.image}
            alt={trip.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-black text-white backdrop-blur">
            {trip.region}
          </div>
          <div className="absolute bottom-0 p-4 md:p-5">
            <p className="text-xs font-bold text-brand-light md:text-sm">
              {trip.duration} • {trip.route}
            </p>
            <h3 className="mt-2 text-2xl font-black leading-tight text-white md:text-3xl">
              {trip.shortTitle}
            </h3>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/48">
                Starting from
              </p>
              <p className="mt-1 text-2xl font-black text-white">
                {formatPrice(trip.price)}
              </p>
            </div>
            <p className="rounded-full bg-white px-3 py-1 text-xs font-black text-black">
              {trip.rating} star
            </p>
          </div>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/64">
            {trip.overview}
          </p>
        </div>
      </Link>
    </article>
  );
}
