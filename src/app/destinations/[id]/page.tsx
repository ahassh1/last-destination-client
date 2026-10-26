import Link from "next/link";
import DestinationDetailsPageOne from "@/components/destination-details-page-one";
import type { Destination } from "@/components/destination-card";
import { ArrowLeft, Compass } from "@/components/icons";

const API_URL = "http://localhost:8000/destination";

async function getDestination(
  id: string,
): Promise<{ destination: Destination | null; failed: boolean }> {
  try {
    const res = await fetch(
      `${API_URL}/${encodeURIComponent(id)}`,
      { cache: "no-store" },
    );
    if (!res.ok) return { destination: null, failed: false };
    // The API answers 200 with an empty body for unknown ids.
    const text = await res.text();
    if (!text.trim()) return { destination: null, failed: false };
    const data = JSON.parse(text);
    // The API has returned both a single record and a one-item array.
    const record = Array.isArray(data) ? data[0] : data;
    return { destination: record?._id ? record : null, failed: false };
  } catch {
    return { destination: null, failed: true };
  }
}

function DestinationUnavailable({ failed }: { failed: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-ink/15 bg-white/60 px-6 py-20 text-center">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream text-clay">
        <Compass className="h-7 w-7" />
      </span>
      <h1 className="mt-5 font-display text-2xl font-semibold text-ink">
        {failed ? "Destination unavailable" : "Destination not found"}
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        {failed
          ? "We couldn't reach the server. Please try again in a moment."
          : "This trip may have been removed, or the link is out of date."}
      </p>
      <Link
        href="/destinations"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold tracking-[0.16em] text-sand uppercase transition-colors hover:bg-clay"
      >
        <ArrowLeft className="h-4 w-4" />
        All destinations
      </Link>
    </div>
  );
}

export default async function DestinationDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { destination, failed } = await getDestination(id);

  if (!destination) {
    return (
      <main className="flex-1 bg-sand">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <DestinationUnavailable failed={failed} />
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <DestinationDetailsPageOne destination={destination} />
      </div>
    </main>
  );
}
