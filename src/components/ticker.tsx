const PLACES = [
  "Bali",
  "Swiss Alps",
  "Machu Picchu",
  "Maldives",
  "Santorini",
  "Kyoto",
  "Patagonia",
  "Dolomites",
  "Zanzibar",
  "Reykjavík",
  "Tulum",
  "Sa Pa",
];

export default function Ticker() {
  return (
    <div className="mt-16 overflow-hidden border-y border-ink/10 bg-ink py-4 text-sand lg:mt-20">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-8" aria-hidden={copy === 1}>
            {PLACES.map((place) => (
              <span key={place} className="flex items-center gap-8">
                <span className="font-display text-lg tracking-tight sm:text-xl">
                  {place}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-clay" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
