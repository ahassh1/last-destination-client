const SKELETON_CARDS = [1, 2, 3, 4, 5, 6];

/** Shown while the destinations fetch is in flight. */
export default function Loading() {
  return (
    <main className="flex-1 bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="h-3 w-28 animate-pulse rounded-full bg-ink/10" />
        <div className="mt-5 h-10 w-64 max-w-full animate-pulse rounded-lg bg-ink/10" />
        <div className="mt-3 h-3.5 w-44 animate-pulse rounded-full bg-ink/10" />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-6">
          {SKELETON_CARDS.map((card) => (
            <div
              key={card}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
            >
              <div className="aspect-[3/2] animate-pulse bg-ink/10" />
              <div className="space-y-3 p-5">
                <div className="h-3.5 w-24 animate-pulse rounded-full bg-ink/10" />
                <div className="h-5 w-3/4 animate-pulse rounded-full bg-ink/10" />
                <div className="h-3.5 w-32 animate-pulse rounded-full bg-ink/10" />
                <div className="h-4 w-24 animate-pulse rounded-full bg-ink/10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
