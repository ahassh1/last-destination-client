"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Compass,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  XLogo,
} from "./icons";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why Wanderlust", href: "#why" },
  { label: "Traveler stories", href: "#reviews" },
];

const SUPPORT = [
  "Help center",
  "Terms of service",
  "Privacy policy",
  "Cancellation policy",
];

const CONTACT = [
  { icon: <Phone className="h-4 w-4" />, label: "+1 786 901 1622" },
  { icon: <Mail className="h-4 w-4" />, label: "info@wanderlust.com" },
  { icon: <MapPin className="h-4 w-4" />, label: "240 Coral Way, Miami FL" },
];

const SOCIALS = [
  { label: "X", icon: <XLogo className="h-4 w-4" /> },
  { label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
];

export default function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="bg-ink text-sand">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.1fr] lg:gap-10">
          {/* Brand + newsletter */}
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-clay text-white">
                <Compass className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl font-semibold tracking-tight">
                Wanderlust
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/55">
              Your gateway to extraordinary travel experiences around the world —
              small groups, local guides, no surprises.
            </p>

            <p className="mt-8 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sand/50">
              Newsletter
            </p>
            <form
              onSubmit={onSubmit}
              className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-5 transition-colors focus-within:border-clay/60"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent text-sm text-sand outline-none placeholder:text-sand/40"
              />
              <button
                type="submit"
                aria-label="Subscribe to the newsletter"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-clay text-white transition-colors hover:bg-clay-dark"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p
              className="mt-2.5 h-4 text-xs text-gold"
              role="status"
              aria-live="polite"
            >
              {subscribed ? "You're on the list — welcome aboard." : ""}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sand/50">
              Quick links
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-sand/70 transition-colors hover:text-clay"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <div>
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sand/50">
              Support
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SUPPORT.map((item) => (
                <li key={item}>
                  <Link
                    href="#top"
                    className="text-sm text-sand/70 transition-colors hover:text-clay"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-sand/50">
              Contact us
            </h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              {CONTACT.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-sm text-sand/70"
                >
                  <span className="mt-0.5 text-clay">{item.icon}</span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-sand/45">
            © 2026 Wanderlust. All rights reserved.
          </p>
          <ul className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a
                  href="#top"
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-sand/70 transition-colors hover:border-clay hover:bg-clay hover:text-white"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
