import { Link } from "@tanstack/react-router";
import { ArrowRight, Search } from "lucide-react";
import { useId, useMemo, useState, type KeyboardEvent } from "react";
import { lengthUnits, pairSlug, unitLabel, type Unit } from "@/data/length";

type UnitFieldProps = {
  label: string;
  selected: Unit | null;
  excludedId: string | undefined;
  onSelect: (unit: Unit | null) => void;
};

function UnitField({ label, selected, excludedId, onSelect }: UnitFieldProps) {
  const inputId = useId();
  const listId = `${inputId}-listbox`;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const suggestions = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return lengthUnits
      .filter((unit) => unit.id !== excludedId)
      .filter((unit) => {
        if (!needle) return true;
        return [unit.name, unit.symbol ?? "", unit.id]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      })
      .sort((a, b) => {
        const rank = (unit: Unit) => {
          const values = [unit.name, unit.symbol ?? "", unit.id].map((value) =>
            value.toLowerCase(),
          );
          if (values.includes(needle)) return 0;
          if (values.some((value) => value.startsWith(needle))) return 1;
          return 2;
        };
        return rank(a) - rank(b) || a.name.localeCompare(b.name);
      })
      .slice(0, 8);
  }, [excludedId, query]);

  function choose(unit: Unit) {
    onSelect(unit);
    setQuery(unitLabel(unit));
    setOpen(false);
    setActiveIndex(0);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setOpen(true);
      setActiveIndex((current) => Math.min(current + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((current) => Math.max(current - 1, 0));
    } else if (event.key === "Enter" && open) {
      const active = suggestions[activeIndex];
      if (active) {
        event.preventDefault();
        choose(active);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <div className="relative min-w-0">
      <label className="mb-1 block text-[10px] tracking-[0.18em] text-mute uppercase" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls={listId}
        aria-expanded={open}
        aria-activedescendant={open && suggestions[activeIndex] ? `${inputId}-option-${activeIndex}` : undefined}
        value={query || (selected ? unitLabel(selected) : "")}
        placeholder="Type a unit"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onChange={(event) => {
          setQuery(event.target.value);
          onSelect(null);
          setOpen(true);
          setActiveIndex(0);
        }}
        onKeyDown={handleKeyDown}
        className="w-full border border-line bg-paper px-2 py-2.5 text-[12px] text-ink outline-none placeholder:text-mute focus:border-ox"
      />
      {open && (
        <div
          id={listId}
          role="listbox"
          className="absolute top-full right-0 left-0 z-20 max-h-56 overflow-y-auto border border-t-0 border-line bg-paper shadow-lg"
        >
          {suggestions.length > 0 ? (
            suggestions.map((unit, index) => (
              <button
                id={`${inputId}-option-${index}`}
                key={unit.id}
                type="button"
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => choose(unit)}
                className={`block w-full border-b border-line px-2 py-2 text-left text-[11px] last:border-b-0 ${
                  index === activeIndex ? "bg-panel text-ox" : "text-ink hover:bg-panel"
                }`}
              >
                {unitLabel(unit)}
              </button>
            ))
          ) : (
            <div className="px-2 py-3 text-[11px] text-mute">No matching length units</div>
          )}
        </div>
      )}
    </div>
  );
}

export function UnitSearch() {
  const [from, setFrom] = useState<Unit | null>(null);
  const [to, setTo] = useState<Unit | null>(null);

  return (
    <section className="pt-4">
      <div className="border border-line bg-panel px-3 py-3 ring-1 ring-black/5">
        <h2 className="mb-2 flex items-center gap-1.5 text-[10px] tracking-[0.18em] text-mute uppercase">
          <Search aria-hidden="true" className="size-3.5" strokeWidth={1.75} />
          Find the units to convert
        </h2>
        <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-end gap-2">
          <UnitField label="From" selected={from} excludedId={to?.id} onSelect={setFrom} />
          <ArrowRight aria-hidden="true" className="mb-3 size-3.5 text-mute" strokeWidth={1.75} />
          <UnitField label="To" selected={to} excludedId={from?.id} onSelect={setTo} />
        </div>
        {from && to && (
          <Link
            to="/common-converters/length-converter/$pair"
            params={{ pair: pairSlug(from.id, to.id) }}
            reloadDocument
            className="mt-3 flex w-full items-center justify-between border border-ox px-3 py-2 text-[11px] font-medium text-ox hover:bg-paper"
          >
            Convert {unitLabel(from)} to {unitLabel(to)}
            <ArrowRight aria-hidden="true" className="ml-2 size-3.5 shrink-0" />
          </Link>
        )}
      </div>
    </section>
  );
}
