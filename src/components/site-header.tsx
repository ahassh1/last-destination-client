"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Close, Compass, Menu } from "./icons";

const NAV = [
  { label: "Home", href: "#top" },
  { label: "Destinations", href: "#destinations" },
  { label: "Why us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        {/* Brand */}
        <Link href="#top" className="group flex shrink-0 items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-clay text-white transition-transform duration-300 group-hover:-rotate-12">
            <Compass className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Wanderlust
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                i === 0
                  ? "text-clay"
                  : "text-ink/70 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="#top"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:text-clay sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="#top"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-sand transition-colors hover:bg-clay sm:inline-flex"
          >
            Sign up
            <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl border border-ink/15 text-ink transition-colors hover:border-clay hover:text-clay lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-ink/10 bg-sand lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/10 py-3.5 font-display text-lg text-ink transition-colors hover:text-clay"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-3 pt-5">
              <Link
                href="#top"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full border border-ink/20 px-5 py-3 text-center text-sm font-semibold text-ink transition-colors hover:border-ink/50"
              >
                Log in
              </Link>
              <Link
                href="#top"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-full bg-clay px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-clay-dark"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
