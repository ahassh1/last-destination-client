import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Plane } from "./icons";

const PROMISES = [
  "Free cancellation",
  "No booking fees",
  "Best-price guarantee",
];

export default function Cta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-sand">
      <Image
        src="/image6.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/75 to-ink/95" />

      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-white/20 bg-white/5 backdrop-blur">
          <Plane className="h-6 w-6 text-clay" />
        </span>

        <p className="mt-7 font-mono text-xs uppercase tracking-[0.25em] text-gold">
          Next departure in 14 days
        </p>

        <h2 className="mt-5 font-display text-[clamp(2.1rem,5.4vw,4rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-sand">
          Ready to start your journey?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-sand/70 sm:text-lg">
          Join thousands of travelers who have already found the world with us —
          and lock in this season&apos;s prices before they move.
        </p>

        <Link
          href="#search"
          className="group mt-9 inline-flex items-center gap-3 rounded-full bg-sand px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink shadow-lift transition-colors hover:bg-clay hover:text-white"
        >
          Book your trip today
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {PROMISES.map((promise) => (
            <li
              key={promise}
              className="flex items-center gap-2 text-sm text-sand/65"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-clay/25 text-clay">
                <Check className="h-2.5 w-2.5" />
              </span>
              {promise}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
