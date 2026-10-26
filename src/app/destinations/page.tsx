import Link from "next/link";
import DestinationCard, {
  type Destination,
} from "@/components/destination-card";
import { Compass } from "@/components/icons";

const API_URL = "http://localhost:8000/destinations";

async function getDestinations(): Promise<{
  destinations: Destination[];
  failed: boolean;
}> {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    const data = await res.json();
    return { destinations: Array.isArray(data) ? data : [], failed: false };
  } catch {
    return { destinations: [], failed: true };
  }
}

function EmptyState({ failed }: { failed: boolean }) {
  return (
    <div className="mt-10 flex flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-ink/15 bg-white/60 px-6 py-16 text-center sm:mt-14">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream text-clay">
        <Compass className="h-7 w-7" />
      </span>
      <h2 className="mt-5 font-display text-2xl font-semibold text-ink">
        {failed ? "Destinations are taking off" : "No destinations yet"}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        {failed
          ? "We couldn't reach the server. Please try again in a moment."
          : "Once travel packages are added, they will show up here."}
      </p>
      <Link
        href="/add-destination"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-mono text-xs font-semibold tracking-[0.16em] text-sand uppercase transition-colors hover:bg-clay"
      >
        Add destination
      </Link>
    </div>
  );
}

export default async function AllDestinationPage() {
  const { destinations, failed } = await getDestinations();
  const count = destinations.length;

  return (
    <main className="flex-1 bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        {/* Page heading */}
        <p className="font-mono text-xs tracking-[0.25em] text-clay uppercase">
          02 — Explore
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.015em] text-ink">
          All destinations
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          {failed
            ? "We couldn't load the latest trips."
            : `Showing ${count} destination${count === 1 ? "" : "s"}`}
        </p>

        {count > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard
                key={destination._id}
                destination={destination}
                fallbackIndex={index}
              />
            ))}
          </div>
        ) : (
          <EmptyState failed={failed} />
        )}
      </div>
    </main>
  );
}
