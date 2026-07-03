"use client";

import { useMemo, useState } from "react";
import {
  calculateLbm,
  feetInchesToCm,
  inToCm,
  kgToLb,
  lbToKg,
  isPlausible,
  FORMULA_META,
  type Formula,
  type Sex,
} from "@/lib/lbm";

type WeightUnit = "kg" | "lb";
type HeightMode = "cm" | "ft";

// Optional default sex lets the men/women variant pages preselect a value.
export default function Calculator({ defaultSex = "male" }: { defaultSex?: Sex }) {
  const [sex, setSex] = useState<Sex>(defaultSex);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [heightMode, setHeightMode] = useState<HeightMode>("cm");
  const [formula, setFormula] = useState<Formula>("boer");

  const [weight, setWeight] = useState("");
  const [heightCmInput, setHeightCmInput] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");

  const parsed = useMemo(() => {
    const w = parseFloat(weight);
    const weightKg = weightUnit === "kg" ? w : lbToKg(w);

    let heightCm = NaN;
    if (heightMode === "cm") {
      heightCm = parseFloat(heightCmInput);
    } else {
      const ft = parseFloat(feet);
      const inch = parseFloat(inches || "0");
      if (Number.isFinite(ft)) heightCm = feetInchesToCm(ft, Number.isFinite(inch) ? inch : 0);
    }
    return { weightKg, heightCm };
  }, [weight, weightUnit, heightMode, heightCmInput, feet, inches]);

  const valid = isPlausible(parsed.weightKg, parsed.heightCm);

  const result = useMemo(() => {
    if (!valid) return null;
    return calculateLbm({
      sex,
      weightKg: parsed.weightKg,
      heightCm: parsed.heightCm,
      formula,
    });
  }, [valid, sex, parsed.weightKg, parsed.heightCm, formula]);

  const display = (kg: number) =>
    weightUnit === "kg" ? `${kg.toFixed(1)} kg` : `${kgToLb(kg).toFixed(1)} lb`;

  return (
    <div className="grid gap-6 rounded-2xl border border-slate-100 bg-white p-5 shadow-card md:grid-cols-2 md:p-7">
      {/* ── Inputs ── */}
      <div className="space-y-5">
        <Field label="Sex">
          <div className="grid grid-cols-2 gap-2">
            {(["male", "female"] as Sex[]).map((s) => (
              <Toggle key={s} active={sex === s} onClick={() => setSex(s)}>
                {s === "male" ? "Male" : "Female"}
              </Toggle>
            ))}
          </div>
        </Field>

        <Field label="Weight">
          <div className="flex gap-2">
            <input
              inputMode="decimal"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder={weightUnit === "kg" ? "e.g. 72" : "e.g. 160"}
              className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-ink-900 outline-none focus:border-mint-500 focus:ring-2 focus:ring-mint-100"
            />
            <UnitSwitch
              options={["kg", "lb"]}
              value={weightUnit}
              onChange={(v) => setWeightUnit(v as WeightUnit)}
            />
          </div>
        </Field>

        <Field label="Height">
          <div className="flex gap-2">
            {heightMode === "cm" ? (
              <input
                inputMode="decimal"
                value={heightCmInput}
                onChange={(e) => setHeightCmInput(e.target.value)}
                placeholder="e.g. 178"
                className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-ink-900 outline-none focus:border-mint-500 focus:ring-2 focus:ring-mint-100"
              />
            ) : (
              <div className="flex w-full gap-2">
                <input
                  inputMode="numeric"
                  value={feet}
                  onChange={(e) => setFeet(e.target.value)}
                  placeholder="ft"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-ink-900 outline-none focus:border-mint-500 focus:ring-2 focus:ring-mint-100"
                />
                <input
                  inputMode="numeric"
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  placeholder="in"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-ink-900 outline-none focus:border-mint-500 focus:ring-2 focus:ring-mint-100"
                />
              </div>
            )}
            <UnitSwitch
              options={["cm", "ft"]}
              value={heightMode}
              onChange={(v) => setHeightMode(v as HeightMode)}
            />
          </div>
        </Field>

        <Field label="Formula">
          <select
            value={formula}
            onChange={(e) => setFormula(e.target.value as Formula)}
            className="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-ink-900 outline-none focus:border-mint-500 focus:ring-2 focus:ring-mint-100"
          >
            {(Object.keys(FORMULA_META) as Formula[]).map((f) => (
              <option key={f} value={f}>
                {FORMULA_META[f].label}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-ink-500">{FORMULA_META[formula].note}</p>
        </Field>
      </div>

      {/* ── Result (instant, no reload) ── */}
      <div className="flex flex-col justify-center rounded-xl bg-gradient-to-br from-mint-50 to-aqua-50 p-6">
        {result ? (
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-ink-500">Lean Body Mass</p>
              <p className="font-display text-4xl font-extrabold text-mint-700">
                {display(result.lbmKg)}
              </p>
              <p className="text-sm text-ink-500">{result.lbmPercent}% of total weight</p>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/60 pt-4">
              <Stat label="Fat Mass" value={display(result.fatMassKg)} />
              <Stat label="Body Fat %" value={`${result.bodyFatPercent}%`} />
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-white text-mint-600 shadow-sm">
              ⚖︎
            </div>
            <p className="text-sm text-ink-500">
              Enter your weight and height to see your lean body mass, fat mass, and body-fat
              percentage instantly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ── UI atoms ─────────────────────────────────────────────────────────────────
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-semibold text-ink-700">{label}</label>
      {children}
    </div>
  );
}

function Toggle({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition ${
        active
          ? "border-mint-500 bg-mint-50 text-mint-700"
          : "border-slate-200 text-ink-700 hover:border-slate-300"
      }`}
    >
      {children}
    </button>
  );
}

function UnitSwitch({
  options,
  value,
  onChange,
}: {
  options: [string, string];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex shrink-0 rounded-lg border border-slate-200 p-0.5">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-md px-2.5 py-2 text-sm font-medium transition ${
            value === opt ? "bg-mint-500 text-white" : "text-ink-500"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-500">{label}</p>
      <p className="font-display text-lg font-bold text-ink-900">{value}</p>
    </div>
  );
}

// Keep unused import tree-shakeable but referenced for clarity.
void inToCm;
