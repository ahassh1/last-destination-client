import Image from "next/image";
import {
  CalendarCheck,
  Check,
  Compass,
  Headset,
  ShieldCheck,
  Sparkle,
  Tag,
} from "./icons";

type Perk = {
  title: string;
  copy: string;
  icon: React.ReactNode;
  className?: string;
  variant?: "default" | "gold" | "image";
  image?: string;
  alt?: string;
  bullets?: string[];
};

const PERKS: Perk[] = [
  {
    title: "Safe & secure",
    copy: "Every trip is insured end to end, with vetted operators and a real person reachable at any hour of the night.",
    icon: <ShieldCheck className="h-6 w-6" />,
    className: "sm:col-span-2",
    bullets: [
      "Travel insurance included",
      "KYC-verified local partners",
      "24/7 safety hotline",
    ],
  },
  {
    title: "Expert guides",
    copy: "Local experts who bring destinations to life with authentic cultural insight.",
    icon: <Compass className="h-6 w-6" />,
  },
  {
    title: "24/7 support",
    copy: "Round-the-clock service to assist you wherever your journey takes you.",
    icon: <Headset className="h-6 w-6" />,
  },
  {
    title: "Best price",
    copy: "Find it cheaper within 48 hours and we refund the difference.",
    icon: <Tag className="h-6 w-6" />,
    variant: "gold",
  },
  {
    title: "Handpicked stays",
    copy: "We sleep in every hotel before it makes the list — no surprises on arrival.",
    icon: <Sparkle className="h-6 w-6" />,
    className: "sm:col-span-2",
    variant: "image",
    image: "/image4.png",
    alt: "Traveler resting above green mountain peaks",
  },
  {
    title: "Flexible booking",
    copy: "Change your dates up to 30 days out, free of charge.",
    icon: <CalendarCheck className="h-6 w-6" />,
  },
];

function PerkCard({ perk }: { perk: Perk }) {
  const isGold = perk.variant === "gold";
  const isImage = perk.variant === "image";

  return (
    <article
      className={`group relative isolate flex flex-col justify-between gap-6 overflow-hidden rounded-[1.5rem] p-6 transition-all duration-300 sm:p-7 ${
        isGold
          ? "bg-gold text-ink hover:-translate-y-1"
          : isImage
            ? "border border-white/10 bg-ink-soft hover:-translate-y-1"
            : "border border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-clay/50"
      } ${perk.className ?? ""}`}
    >
      {isImage && perk.image && (
        <>
          <Image
            src={perk.image}
            alt={perk.alt ?? ""}
            fill
            sizes="(min-width:1024px) 50vw, 92vw"
            className="-z-10 object-cover opacity-30 transition-opacity duration-500 group-hover:opacity-45"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        </>
      )}

      <div>
        <span
          className={`grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-300 ${
            isGold
              ? "bg-ink/10 text-ink group-hover:bg-ink group-hover:text-gold"
              : "bg-clay/15 text-clay group-hover:bg-clay group-hover:text-white"
          }`}
        >
          {perk.icon}
        </span>

        <h3
          className={`mt-5 font-display text-2xl tracking-tight ${
            isGold ? "text-ink" : "text-sand"
          }`}
        >
          {perk.title}
        </h3>
        <p
          className={`mt-2.5 text-sm leading-relaxed ${
            isGold ? "text-ink/70" : "text-sand/60"
          }`}
        >
          {perk.copy}
        </p>
      </div>

      {perk.bullets && (
        <ul className="flex flex-col gap-2.5 border-t border-white/10 pt-5">
          {perk.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-center gap-2.5 text-sm text-sand/75"
            >
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-clay/20 text-clay">
                <Check className="h-3 w-3" />
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function WhyChoose() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 text-sand sm:py-28">
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-clay/15 blur-3xl" />
      <div className="dot-grid pointer-events-none absolute inset-x-0 bottom-0 h-64 text-white/10 [mask-image:linear-gradient(to_top,black,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-clay">
            02 — Why Wanderlust
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-sand">
            Built for people who
            <br className="hidden sm:block" /> actually go
          </h2>
          <p className="mt-5 text-base leading-relaxed text-sand/60">
            Your trusted partner for exceptional travel — six promises we hold
            ourselves to on every single booking.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERKS.map((perk) => (
            <PerkCard key={perk.title} perk={perk} />
          ))}
        </div>
      </div>
    </section>
  );
}
