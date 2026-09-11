/**
 * Homepage unit finder. Autocomplete lands in a later step; the fields are
 * rendered now so the page structure and markup are final.
 */
export function UnitSearch() {
  return (
    <section className="pt-4">
      <h2 className="mb-1.5 text-[10px] tracking-[0.18em] text-mute uppercase">
        Find the units to convert
      </h2>
      <div className="divide-y divide-line border border-line bg-panel ring-1 ring-black/5">
        <input
          type="text"
          placeholder="Type a unit, e.g. pound"
          aria-label="Search units"
          className="w-full bg-transparent px-3 py-2.5 text-[13px] text-ink outline-none placeholder:text-mute"
        />
        <div className="px-3 py-2.5">
          <div className="grid grid-cols-[1fr_auto_1fr] gap-2">
            <label className="sr-only" htmlFor="search-from">
              From unit
            </label>
            <input
              id="search-from"
              type="text"
              placeholder="From unit"
              className="w-full border border-line bg-paper px-2 py-2 text-[12px] text-ink outline-none placeholder:text-mute focus:border-ox"
            />
            <span className="self-center text-xs text-mute">→</span>
            <label className="sr-only" htmlFor="search-to">
              To unit
            </label>
            <input
              id="search-to"
              type="text"
              placeholder="To unit"
              className="w-full border border-line bg-paper px-2 py-2 text-[12px] text-ink outline-none placeholder:text-mute focus:border-ox"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
