"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "./icons";

type Quote = {
  text: string;
  name: string;
  location: string;
  trip: string;
  avatarClass: string;
};

const QUOTES: Quote[] = [
  {
    text: "The Bali trip was absolutely magical. Every detail was perfectly planned — the resorts were luxurious and the cultural experiences unforgettable.",
    name: "Michael Chen",
    location: "Singapore",
    trip: "Bali · 10 days",
    avatarClass: "bg-clay/15 text-clay",
  },
  {
    text: "Our Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable.",
    name: "Sarah Johnson",
    location: "New York, USA",
    trip: "Swiss Alps · 8 days",
    avatarClass: "bg-pine/15 text-pine",
  },
  {
    text: "Second trip booked through Wanderlust and the support team still answers within minutes. Changes to our dates took one email, no fees.",
    name: "Amara Okafor",
    location: "Lagos, Nigeria",
    trip: "Zanzibar · 6 days",
    avatarClass: "bg-gold/30 text-ink",
  },
  {
    text: "We asked for a quiet, off-season route through Patagonia and got an itinerary our friends assumed we had spent months planning.",
    name: "Luca Bianchi",
    location: "Milan, Italy",
    trip: "Patagonia · 12 days",
    avatarClass: "bg-ink/10 text-ink",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  const rail = useRef<HTMLDivElement>(null);

  function scrollByDirection(direction: 1 | -1) {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = (card?.offsetWidth ?? 320) + 20;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  return (
    <section id="reviews" className="scroll-mt-24 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">
              03 — Traveler stories
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-ink">
              What travelers say
            </h2>
            <p className="mt-4 text-base text-ink/60">
              Real experiences from 2,400+ verified reviews.
            </p>
          </div>

          <div className="flex shrink-0 gap-2.5">
            <button
              type="button"
              onClick={() => scrollByDirection(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-sand"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollByDirection(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 text-ink/70 transition-colors hover:border-ink hover:bg-ink hover:text-sand"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={rail}
          data-card-rail
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:-mx-8 sm:px-8"
        >
          {QUOTES.map((quote) => (
            <figure
              key={quote.name}
              data-card
              className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-8 rounded-3xl border border-ink/10 bg-white p-6 shadow-card sm:w-[58%] sm:p-8 lg:w-[calc((100%-2.5rem)/3)]"
            >
              <div>
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} className="h-4 w-4 text-gold" />
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-lg leading-snug text-ink sm:text-xl">
                  “{quote.text}”
                </blockquote>
              </div>

              <figcaption className="flex items-center gap-4 border-t border-ink/10 pt-5">
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-full font-display text-lg ${quote.avatarClass}`}
                >
                  {initials(quote.name)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-ink">
                    {quote.name}
                  </span>
                  <span className="block truncate font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink/50">
                    {quote.location}
                  </span>
                </span>
                <span className="ml-auto hidden shrink-0 rounded-full bg-sand px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ink/60 sm:block">
                  {quote.trip}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
