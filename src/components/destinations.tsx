import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "./icons";

type Trip = {
  image: string;
  alt: string;
  place: string;
  country: string;
  nights: string;
  price: string;
  rating: string;
  /** Bento placement on large screens. */
  className?: string;
  sizes: string;
};

const TRIPS: Trip[] = [
  {
    image: "/image5.png",
    alt: "Overwater bungalows on a turquoise lagoon",
    place: "Baa Atoll",
    country: "Maldives",
    nights: "7 nights · half board",
    price: "1,890",
    rating: "4.9",
    className: "sm:col-span-2 lg:row-span-2",
    sizes: "(min-width:1024px) 50vw, (min-width:640px) 92vw, 92vw",
  },
  {
    image: "/image3.png",
    alt: "Traveler photographing Machu Picchu",
    place: "Machu Picchu",
    country: "Peru",
    nights: "9 nights · guided",
    price: "1,450",
    rating: "4.8",
    sizes: "(min-width:1024px) 25vw, (min-width:640px) 46vw, 92vw",
  },
  {
    image: "/image2.png",
    alt: "Aerial view of a beach with parasols",
    place: "Tulum Coast",
    country: "Mexico",
    nights: "5 nights · beachfront",
    price: "980",
    rating: "4.7",
    sizes: "(min-width:1024px) 25vw, (min-width:640px) 46vw, 92vw",
  },
  {
    image: "/image4.png",
    alt: "Traveler on a net above green mountain peaks",
    place: "Sa Pa",
    country: "Vietnam",
    nights: "8 nights · trekking",
    price: "1,120",
    rating: "4.9",
    sizes: "(min-width:1024px) 25vw, (min-width:640px) 46vw, 92vw",
  },
  {
    image: "/image1.png",
    alt: "Desert lake at sunset with cacti",
    place: "Lake Powell",
    country: "United States",
    nights: "6 nights · road trip",
    price: "860",
    rating: "4.6",
    sizes: "(min-width:1024px) 25vw, (min-width:640px) 46vw, 92vw",
  },
];

function TripCard({ trip }: { trip: Trip }) {
  return (
    <article
      className={`group relative isolate flex min-h-[19rem] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-ink/10 ${trip.className ?? ""}`}
    >
      <Image
        src={trip.image}
        alt={trip.alt}
        fill
        sizes={trip.sizes}
        className="-z-10 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />

      <span className="absolute right-5 top-5 z-10 grid h-10 w-10 -rotate-45 place-items-center rounded-full bg-white text-ink opacity-0 shadow-card transition-all duration-300 group-hover:rotate-0 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </span>

      <div className="relative z-10 flex items-end justify-between gap-4 p-5 sm:p-6">
        <div>
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/60">
            {trip.country}
          </p>
          <h3 className="mt-1 font-display text-2xl leading-tight text-white sm:text-[1.7rem]">
            {trip.place}
          </h3>
          <p className="mt-1.5 text-sm text-white/70">
            {trip.nights} ·{" "}
            <span className="font-semibold text-white">from ${trip.price}</span>
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
          <Star className="h-3.5 w-3.5 text-gold" />
          {trip.rating}
        </span>
      </div>
    </article>
  );
}

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="scroll-mt-24 bg-sand py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">
              01 — Curated destinations
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-ink">
              Handpicked escapes,
              <br className="hidden sm:block" /> priced without the guesswork
            </h2>
          </div>
          <Link
            href="#search"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink/20 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink/60 hover:bg-ink hover:text-sand sm:self-auto"
          >
            All 120 trips
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {TRIPS.map((trip) => (
            <TripCard key={trip.place} trip={trip} />
          ))}
        </div>
      </div>
    </section>
  );
}
