import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { unitLabel, type Unit } from "@/data/length";

type Props = {
  id: string;
  label: string;
  units: Unit[];
  value: string;
  onChange: (unitId: string) => void;
};

export function UnitCombobox({ id, label, units, value, onChange }: Props) {
  const listId = `${id}-listbox`;
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const selected = useMemo(
    () => units.find((u) => u.id === value) ?? null,
    [units, value],
  );

  const suggestions = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const matches = units.filter((unit) => {
      if (!needle) return true;
      return [unit.name, unit.symbol ?? "", unit.id]
        .join(" ")
        .toLowerCase()
        .includes(needle);
    });
    if (!needle) return matches;
    return matches.sort((a, b) => {
      const rank = (unit: Unit) => {
        const values = [unit.name, unit.symbol ?? "", unit.id].map((v) =>
          v.toLowerCase(),
        );
        if (values.includes(needle)) return 0;
        if (values.some((v) => v.startsWith(needle))) return 1;
        return 2;
      };
      return rank(a) - rank(b) || a.name.localeCompare(b.name);
    });
  }, [units, query]);

  useEffect(() => {
    if (!open) return;
    function onDocPointerDown(event: MouseEvent | TouchEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onDocPointerDown);
    document.addEventListener("touchstart", onDocPointerDown);
    return () => {
      document.removeEventListener("mousedown", onDocPointerDown);
      document.removeEventListener("touchstart", onDocPointerDown);
    };
  }, [open]);

  function choose(unit: Unit) {
    onChange(unit.id);
    setQuery("");
    setOpen(false);
    setActiveIndex(0);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        setActiveIndex(0);
        return;
      }
      setActiveIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (event.key === "Enter") {
      const active = suggestions[activeIndex];
      if (open && active) {
        event.preventDefault();
        choose(active);
      }
    } else if (event.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  }

  return (
    <div className="relative min-w-0" ref={wrapRef}>
      <label
        htmlFor={id}
        className="mb-1 block text-[10px] tracking-[0.18em] text-mute uppercase"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        role="combobox"
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls={listId}
        aria-expanded={open}
        aria-activedescendant={
          open && suggestions[activeIndex] ? `${id}-option-${activeIndex}` : undefined
        }
        value={open ? query : selected ? unitLabel(selected) : ""}
        placeholder="Search units"
        onFocus={() => {
          setOpen(true);
          setQuery("");
          setActiveIndex(0);
        }}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
          setActiveIndex(0);
        }}
        onKeyDown={handleKeyDown}
        className="w-full border border-line bg-paper px-2 py-2.5 text-[13px] text-ink outline-none placeholder:text-mute focus:border-ox"
      />
      {open && (
        <div
          id={listId}
          role="listbox"
          className="absolute top-full right-0 left-0 z-20 max-h-52 overflow-y-auto border border-t-0 border-line bg-paper shadow-lg"
        >
          {suggestions.length > 0 ? (
            suggestions.slice(0, 40).map((unit, index) => (
              <button
                id={`${id}-option-${index}`}
                key={unit.id}
                type="button"
                role="option"
                aria-selected={unit.id === value}
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
            <div className="px-2 py-3 text-[11px] text-mute">No matching units</div>
          )}
        </div>
      )}
    </div>
  );
}
