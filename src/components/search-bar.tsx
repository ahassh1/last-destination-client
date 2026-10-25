"use client";

import { useState, type FormEvent } from "react";
import { Calendar, ChevronDown, MapPin, Search, Users, Wallet } from "./icons";

type FieldProps = {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
};

function Field({ label, icon, children }: FieldProps) {
  return (
    <label className="flex cursor-text items-center gap-3 rounded-2xl bg-sand px-4 py-3 ring-1 ring-ink/10 transition-all hover:ring-ink/25 focus-within:ring-2 focus-within:ring-clay/70">
      <span className="shrink-0 text-clay">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-ink/45">
          {label}
        </span>
        {children}
      </span>
    </label>
  );
}

const controlClass =
  "w-full bg-transparent text-sm font-semibold text-ink outline-none placeholder:font-normal placeholder:text-ink/40";

function SelectIcon() {
  return (
    <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-ink/40">
      <ChevronDown className="h-4 w-4" />
    </span>
  );
}

export default function SearchBar() {
  const [busy, setBusy] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    window.setTimeout(() => setBusy(false), 1400);
  }

  return (
    <form
      id="search"
      onSubmit={onSubmit}
      className="grid scroll-mt-28 gap-2.5 rounded-[1.75rem] border border-ink/10 bg-white p-3 shadow-lift sm:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_0.9fr_auto]"
    >
      <Field label="Location" icon={<MapPin className="h-5 w-5" />}>
        <input
          type="text"
          name="location"
          placeholder="Anywhere"
          className={controlClass}
        />
      </Field>

      <Field label="Dates" icon={<Calendar className="h-5 w-5" />}>
        <div className="relative">
          <select
            name="duration"
            defaultValue=""
            className={`${controlClass} appearance-none pr-6`}
          >
            <option value="" disabled>
              Anytime / 3 days
            </option>
            <option value="3">3 days</option>
            <option value="7">One week</option>
            <option value="14">Two weeks</option>
          </select>
          <SelectIcon />
        </div>
      </Field>

      <Field label="Budget" icon={<Wallet className="h-5 w-5" />}>
        <div className="relative">
          <select
            name="budget"
            defaultValue=""
            className={`${controlClass} appearance-none pr-6`}
          >
            <option value="" disabled>
              $0 – $3000
            </option>
            <option value="1000">Up to $1000</option>
            <option value="2000">$1000 – $2000</option>
            <option value="3000">$2000 – $3000</option>
          </select>
          <SelectIcon />
        </div>
      </Field>

      <Field label="People" icon={<Users className="h-5 w-5" />}>
        <div className="relative">
          <select
            name="people"
            defaultValue=""
            className={`${controlClass} appearance-none pr-6`}
          >
            <option value="" disabled>
              5 – 10
            </option>
            <option value="2">1 – 2</option>
            <option value="4">3 – 4</option>
            <option value="10">5 – 10</option>
            <option value="10+">10+</option>
          </select>
          <SelectIcon />
        </div>
      </Field>

      <button
        type="submit"
        disabled={busy}
        className="flex items-center justify-center gap-2 rounded-2xl bg-clay px-8 py-4 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-clay-dark disabled:opacity-70 sm:col-span-2 xl:col-span-1"
      >
        {busy ? (
          "Searching…"
        ) : (
          <>
            Search
            <Search className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
