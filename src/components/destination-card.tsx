"use client";

/* The API serves arbitrary user-provided image URLs, which next/image cannot
   optimize without hardcoding every remote host — a plain <img> is used instead. */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Star } from "./icons";

export type Destination = {
  _id: string;
  name: string;
  country: string;
  category?: string;
  price: string;
  duration?: string;
  departureDate?: string;
  imageUrl?: string;
  description?: string;
  rating?: string | number;
};

/** Local images shown when the API image URL is missing or fails to load. */
const FALLBACK_IMAGES = [
  "/image1.png",
  "/image2.png",
  "/image3.png",
  "/image4.png",
  "/image5.png",
];

function formatPrice(price?: string) {
  const raw = price?.trim();
  if (!raw) return null;
  // Tolerate values stored as "$2,700", "1,450" or "1450 USD".
  const value = Number(raw.replace(/[$,\s]/g, ""));
  return Number.isNaN(value) ? null : value.toLocaleString("en-US");
}

export default function DestinationCard({
  destination,
  fallbackIndex = 0,
}: {
  destination: Destination;
  fallbackIndex?: number;
}) {
  const fallback =
    FALLBACK_IMAGES[Math.abs(fallbackIndex) % FALLBACK_IMAGES.length];
  const [imageSrc, setImageSrc] = useState(
    destination.imageUrl?.trim() || fallback,
  );

  const price = formatPrice(destination.price);
  const rating = destination.rating ?? "4.5";
  const duration = destination.duration?.trim() || "Flexible dates";

  return (
    <article
      id={destination._id}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      {/* Image + rating badge */}
      <div className="relative aspect-[3/2] overflow-hidden bg-cream">
        <img
          src={imageSrc}
          alt={`${destination.name} — ${destination.country}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          onError={() => setImageSrc(fallback)}
        />
        <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-sm font-semibold text-ink shadow-card">
          {rating}
          <Star className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4 sm:p-5">
        <p className="flex items-center gap-1.5 text-sm text-ink/60">
          <MapPin className="h-4 w-4 shrink-0 text-ink/40" />
          {destination.country}
        </p>

        <div className="flex items-baseline justify-between gap-3">
          <h2 className="min-w-0 truncate font-display text-lg font-semibold text-ink sm:text-xl">
            {destination.name}
          </h2>
          {price ? (
            <p className="shrink-0 text-ink">
              <span className="text-lg font-bold sm:text-xl">${price}</span>
              <span className="text-xs font-medium text-ink/50">/Person</span>
            </p>
          ) : (
            <p className="shrink-0 text-xs font-medium text-ink/50">
              Price on request
            </p>
          )}
        </div>

        <p className="flex items-center gap-1.5 text-sm text-ink/60">
          <Calendar className="h-4 w-4 shrink-0 text-ink/40" />
          {duration}
        </p>

        <Link
          href={`/destinations#${destination._id}`}
          className="mt-auto inline-flex w-fit items-center gap-1 pt-1 text-sm font-bold tracking-[0.08em] text-[#00A8E8] uppercase"
        >
          Book now
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
