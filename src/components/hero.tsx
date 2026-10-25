import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar";
import { ArrowRight, ArrowUpRight, Plane, Star } from "./icons";

const STATS = [
  { value: "120+", label: "Destinations" },
  { value: "4.9", label: "Traveler rating" },
  { value: "24k", label: "Trips booked" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden scroll-mt-24">
      {/* Ambient shapes */}
      <div className="pointer-events-none absolute -right-40 -top-56 h-[34rem] w-[34rem] rounded-full bg-clay/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-48 top-24 h-96 w-96 rounded-full bg-pine/10 blur-3xl" />
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-72 text-ink/15 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-5">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-white/70 px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ink/65 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-clay" />
              Est. 2016 · small groups, big stories
            </span>

            <h1 className="mt-7 font-display text-[clamp(2.6rem,6.4vw,4.8rem)] font-semibold leading-[0.94] tracking-[-0.02em] text-ink">
              Discover your
              <br />
              next{" "}
              <em className="italic font-normal text-clay">adventure</em>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65 sm:text-lg">
              Skip the endless tabs. We hand-build trips with local guides,
              honest prices and a real human on the other end of the line — from
              cliff-side villas to high-altitude ruins.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#destinations"
                className="group inline-flex items-center gap-2.5 rounded-full bg-clay px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-card transition-colors hover:bg-clay-dark"
              >
                Explore now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#destinations"
                className="inline-flex items-center gap-2.5 rounded-full border border-ink/20 bg-white/60 px-7 py-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink backdrop-blur transition-colors hover:border-ink/50"
              >
                View destinations
              </Link>
            </div>

            {/* Stats */}
            <dl className="mt-12 flex flex-wrap gap-x-8 gap-y-6 border-t border-ink/10 pt-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="min-w-[6.5rem]">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-semibold text-ink">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/50">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Image collage */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-ink/10 shadow-lift sm:aspect-[5/5] lg:aspect-[4/4.4]">
                <Image
                  src="/image5.png"
                  alt="Overwater villas on a turquoise lagoon"
                  fill
                  priority
                  sizes="(min-width:1024px) 46vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/5 to-transparent" />

                {/* On-image caption */}
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-white/70">
                      Featured trip
                    </p>
                    <p className="font-display text-xl text-white sm:text-2xl">
                      Baa Atoll, Maldives
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                    <Star className="h-3.5 w-3.5 text-gold" />
                    4.9
                  </span>
                </div>
              </div>

              {/* Floating rating card */}
              <div className="animate-float absolute -right-2 top-8 hidden rounded-2xl border border-ink/10 bg-white p-4 shadow-card sm:block lg:-right-6">
                <div className="flex items-center gap-2">
                  {["MC", "SJ", "AO"].map((initials, i) => (
                    <span
                      key={initials}
                      className={`grid h-8 w-8 place-items-center rounded-full text-[0.65rem] font-semibold ring-2 ring-white ${
                        [
                          "bg-clay/15 text-clay",
                          "bg-pine/15 text-pine",
                          "bg-gold/30 text-ink",
                        ][i]
                      }`}
                    >
                      {initials}
                    </span>
                  ))}
                  <span className="ml-1 flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((n) => (
                      <Star key={n} className="h-3 w-3 text-gold" />
                    ))}
                  </span>
                </div>
                <p className="mt-2 max-w-[9rem] text-xs leading-snug text-ink/60">
                  2,400 travelers rated us{" "}
                  <span className="font-semibold text-ink">4.9 / 5</span>
                </p>
              </div>

              {/* Floating photo chip */}
              <div className="absolute -left-3 bottom-10 hidden items-center gap-3 rounded-2xl border border-ink/10 bg-white p-2 pr-4 shadow-card sm:flex lg:-left-8">
                <span className="relative block h-12 w-12 overflow-hidden rounded-xl">
                  <Image
                    src="/image2.png"
                    alt="Beach with parasols"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <span>
                  <span className="block font-mono text-[0.55rem] uppercase tracking-[0.18em] text-ink/45">
                    Next departure
                  </span>
                  <span className="block text-sm font-semibold text-ink">
                    Tulum · 14 Mar
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-clay" />
              </div>

              {/* Decorative plane */}
              <span className="absolute -top-6 left-6 hidden h-12 w-12 -rotate-12 place-items-center rounded-full bg-ink text-sand shadow-card lg:grid">
                <Plane className="h-5 w-5" />
              </span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="relative z-10 mt-12 lg:mt-16">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
