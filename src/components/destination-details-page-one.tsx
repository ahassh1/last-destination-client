"use client";

/* API image URLs are arbitrary user input; a plain <img> avoids next/image
   remote-host errors and lets us swap to a related fallback on load error. */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import type { Destination } from "./destination-card";
import { fallbackImageFor, isValidImageUrl } from "@/lib/destination-images";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  CalendarCheck,
  MapPin,
  Star,
  Tag,
  Wallet,
} from "./icons";

function formatPrice(price?: string) {
  const raw = price?.trim();
  if (!raw) return null;
  const value = Number(raw.replace(/[$,\s]/g, ""));
  return Number.isNaN(value) ? null : value.toLocaleString("en-US");
}

function formatDate(value?: string) {
  const raw = value?.trim();
  if (!raw) return null;
  const dayOnly = /^\d{4}-\d{2}-\d{2}$/.test(raw);
  const date = new Date(dayOnly ? `${raw}T00:00:00` : raw);
  if (Number.isNaN(date.getTime())) return raw;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function DestinationDetailsPageOne({
  destination,
}: {
  destination: Destination;
}) {
  const related = fallbackImageFor({
    category: destination.category,
    index: 0,
  });
  const [imageSrc, setImageSrc] = useState(
    isValidImageUrl(destination.imageUrl) ? destination.imageUrl!.trim() : related,
  );

  const price = formatPrice(destination.price);
  const rating = destination.rating ?? "4.5";
  const duration = destination.duration?.trim() || "Flexible dates";
  const departure = formatDate(destination.departureDate);
  const description =
    destination.description?.trim() ||
    "Full details for this trip will be published soon. Reach out and our team will happily walk you through the itinerary.";

  const bookHref =
    `mailto:info@wanderlust.com?subject=${encodeURIComponent(`Booking inquiry — ${destination.name}`)}` +
    (price ? `&body=${encodeURIComponent(`${destination.name} (${destination.country}) — $${price} per person`)}` : "");

  return (
    <div>
      {/* Back to all destinations */}
    <div className="flex items-center justify-between gap-4">
  <Link
    href="/destinations"
    className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold tracking-[0.16em] text-sand uppercase transition-colors hover:bg-clay"
  >
    <ArrowLeft className="h-4 w-4" />
    All destinations
  </Link>

  <div className="flex gap-3">
    <button className="cursor-pointer rounded-full bg-blue-600 px-5 py-3 text-sm text-white hover:bg-blue-700">
      Edit
    </button>

    <button className="cursor-pointer rounded-full bg-red-600 px-5 py-3 text-sm text-white hover:bg-red-700">
      Cancel
    </button>
  </div>
</div>

      {/* Hero image with rating badge + category chip */}
      <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream sm:aspect-[16/9] sm:mt-6 lg:aspect-[2/1]">
        <img
          src={imageSrc}
          alt={`${destination.name} — ${destination.country}`}
          decoding="async"
          className="h-full w-full object-cover"
          onError={() => setImageSrc(related)}
        />
        <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-ink shadow-card sm:top-5 sm:right-5 sm:text-base">
          {rating}
          <Star className="h-4 w-4" />
        </span>
        {destination.category ? (
          <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3.5 py-1.5 font-mono text-[0.65rem] tracking-[0.18em] text-ink uppercase shadow-card backdrop-blur sm:bottom-5 sm:left-5">
            {destination.category}
          </span>
        ) : null}
      </div>

      {/* Details + booking rail */}
      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-12">
        <div className="min-w-0">
          {destination.country ? (
            <p className="flex items-center gap-1.5 text-sm text-ink/60">
              <MapPin className="h-4 w-4 shrink-0 text-ink/40" />
              {destination.country}
            </p>
          ) : null}

          <h1 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-semibold tracking-[-0.015em] text-ink">
            {destination.name}
          </h1>

          {/* Meta pills */}
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-sm text-ink/70">
              <Calendar className="h-4 w-4 text-ink/40" />
              {duration}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-sm text-ink/70">
              <Star className="h-3.5 w-3.5 text-gold" />
              {rating} rating
            </span>
            {departure ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-3.5 py-2 text-sm text-ink/70">
                <CalendarCheck className="h-4 w-4 text-ink/40" />
                Departs {departure}
              </span>
            ) : null}
          </div>

          {/* About */}
          <section className="mt-8 rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-ink">
              About this trip
            </h2>
            <p className="mt-4 leading-relaxed whitespace-pre-line text-ink/70">
              {description}
            </p>
          </section>

          {/* Quick facts */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {destination.category ? (
              <FactCard
                icon={<Tag className="h-4.5 w-4.5" />}
                label="Category"
                value={destination.category}
              />
            ) : null}
            {price ? (
              <FactCard
                icon={<Wallet className="h-4.5 w-4.5" />}
                label="Price per person"
                value={`$${price}`}
              />
            ) : null}
            {departure ? (
              <FactCard
                icon={<CalendarCheck className="h-4.5 w-4.5" />}
                label="Departure date"
                value={departure}
              />
            ) : null}
          </div>
        </div>

        {/* Booking card */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.75rem] border border-ink/10 bg-white p-6 shadow-card sm:p-7">
            <p className="font-mono text-[0.65rem] tracking-[0.2em] text-ink/40 uppercase">
              Price per person
            </p>
            <p className="mt-2 font-display text-4xl font-semibold text-ink">
              {price ? (
                <>
                  ${price}
                  <span className="ml-1 font-sans text-sm font-medium text-ink/50">
                    /Person
                  </span>
                </>
              ) : (
                <span className="font-sans text-lg font-medium text-ink/50">
                  Price on request
                </span>
              )}
            </p>

            <dl className="mt-5 space-y-3 border-t border-ink/10 pt-5 text-sm">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-ink/50">Duration</dt>
                <dd className="font-medium text-ink">{duration}</dd>
              </div>
              {departure ? (
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink/50">Departure</dt>
                  <dd className="font-medium text-ink">{departure}</dd>
                </div>
              ) : null}
              {destination.country ? (
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-ink/50">Destination</dt>
                  <dd className="font-medium text-ink">
                    {destination.country}
                  </dd>
                </div>
              ) : null}
            </dl>

            <Link
              href={bookHref}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#00A8E8] px-6 py-4 text-sm font-bold tracking-[0.1em] text-white uppercase transition-colors hover:bg-[#0095d1]"
            >
              Book now
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <p className="mt-4 text-center text-xs text-ink/50">
              Questions? Email{" "}
              <a
                href="mailto:info@wanderlust.com"
                className="text-ink/70 underline decoration-ink/20 underline-offset-2 transition-colors hover:text-clay"
              >
                info@wanderlust.com
              </a>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

function FactCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-4 shadow-card sm:p-5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-cream text-clay">
        {icon}
      </span>
      <p className="mt-3 font-mono text-[0.6rem] tracking-[0.16em] text-ink/40 uppercase">
        {label}
      </p>
      <p className="mt-1 truncate text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}
