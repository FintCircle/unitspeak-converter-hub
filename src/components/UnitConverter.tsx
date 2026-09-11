import { useState } from "react";
import {
  convertLength,
  formatResult,
  lengthUnitById,
  unitLabel,
  unitShort,
  type Unit,
} from "@/data/length";

type Props = {
  title: string;
  units: Unit[];
  initialAmount: string;
  initialFrom: string;
  initialTo: string;
  /** Hides the from/to pickers, e.g. on a fixed conversion-pair page. */
  lockUnits?: boolean;
};

export function UnitConverter({
  title,
  units,
  initialAmount,
  initialFrom,
  initialTo,
  lockUnits = false,
}: Props) {
  const [amount, setAmount] = useState(initialAmount);
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);

  const fromUnit = lengthUnitById.get(from);
  const toUnit = lengthUnitById.get(to);
  const parsed = Number(amount.replace(/,/g, ""));
  const valid = amount.trim() !== "" && isFinite(parsed) && !!fromUnit && !!toUnit;
  const result = valid ? convertLength(parsed, from, to) : NaN;
  const ratio = valid ? fromUnit!.factor / toUnit!.factor : NaN;

  return (
    <section className="border border-line bg-panel ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-line px-3 py-1.5">
        <h1 className="text-[13px] font-semibold tracking-wide uppercase">{title}</h1>
        <span className="text-[10px] text-mute">{units.length} units</span>
      </div>

      <div className="px-3 pt-3 pb-4">
        <label
          htmlFor="amount"
          className="mb-1 block text-[10px] tracking-[0.18em] text-mute uppercase"
        >
          Amount
        </label>
        <input
          id="amount"
          type="text"
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-line bg-paper px-3 py-2.5 text-2xl font-medium text-ink outline-none focus:border-ox"
        />

        {!lockUnits && (
          <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-end gap-2">
            <div>
              <label
                htmlFor="from-unit"
                className="mb-1 block text-[10px] tracking-[0.18em] text-mute uppercase"
              >
                From
              </label>
              <select
                id="from-unit"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full border border-line bg-paper px-2 py-2.5 text-[13px] text-ink outline-none focus:border-ox"
              >
                {units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {unitLabel(u)}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              aria-label="Swap units"
              onClick={() => {
                setFrom(to);
                setTo(from);
              }}
              className="pb-2.5 text-xs text-mute hover:text-ox"
            >
              ⇄
            </button>
            <div>
              <label
                htmlFor="to-unit"
                className="mb-1 block text-[10px] tracking-[0.18em] text-mute uppercase"
              >
                To
              </label>
              <select
                id="to-unit"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full border border-line bg-paper px-2 py-2.5 text-[13px] text-ink outline-none focus:border-ox"
              >
                {units.map((u) => (
                  <option key={u.id} value={u.id}>
                    {unitLabel(u)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}


        <div className="mt-4 border-t border-line pt-3">
          <div className="flex items-baseline justify-between">
            <span className="text-[10px] tracking-[0.18em] text-mute uppercase">
              Result
            </span>
            <span className="text-[10px] text-mute">
              {valid ? result.toExponential(6) : ""}
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[42px] leading-none font-semibold tracking-tight">
              {valid ? formatResult(result) : "—"}
            </span>
            <span className="text-sm text-mute">
              {toUnit ? unitShort(toUnit) : ""}
            </span>
          </div>
          <div className="mt-1 text-[11px] text-mute">
            {valid
              ? `${formatResult(parsed)} ${unitShort(fromUnit!)} × ${formatResult(ratio)} = ${formatResult(result)} ${unitShort(toUnit!)}`
              : "Enter a number to convert."}
          </div>
        </div>
      </div>
    </section>
  );
}
