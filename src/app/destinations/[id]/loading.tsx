/** Shown while the destination fetch is in flight. */
export default function Loading() {
  return (
    <main className="flex-1 bg-sand">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="h-3 w-40 animate-pulse rounded-full bg-ink/10" />

        <div className="mt-5 aspect-[4/3] animate-pulse rounded-[1.75rem] bg-ink/10 sm:aspect-[16/9] sm:mt-6 lg:aspect-[2/1]" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-12">
          <div className="min-w-0">
            <div className="h-3.5 w-28 animate-pulse rounded-full bg-ink/10" />
            <div className="mt-3 h-10 w-3/4 max-w-full animate-pulse rounded-lg bg-ink/10" />
            <div className="mt-5 flex flex-wrap gap-2.5">
              <div className="h-9 w-36 animate-pulse rounded-full bg-ink/10" />
              <div className="h-9 w-32 animate-pulse rounded-full bg-ink/10" />
              <div className="h-9 w-44 animate-pulse rounded-full bg-ink/10" />
            </div>
            <div className="mt-8 rounded-[1.75rem] border border-ink/10 bg-white p-6 sm:p-8">
              <div className="h-6 w-44 animate-pulse rounded-full bg-ink/10" />
              <div className="mt-5 space-y-3">
                <div className="h-3.5 w-full animate-pulse rounded-full bg-ink/10" />
                <div className="h-3.5 w-11/12 animate-pulse rounded-full bg-ink/10" />
                <div className="h-3.5 w-4/5 animate-pulse rounded-full bg-ink/10" />
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="h-28 animate-pulse rounded-2xl bg-ink/10" />
              <div className="h-28 animate-pulse rounded-2xl bg-ink/10" />
              <div className="h-28 animate-pulse rounded-2xl bg-ink/10" />
            </div>
          </div>

          <div className="h-80 animate-pulse rounded-[1.75rem] bg-ink/10 lg:sticky lg:top-28 lg:self-start" />
        </div>
      </div>
    </main>
  );
}
