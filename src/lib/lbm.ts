// ── Lean Body Mass calculation core ──────────────────────────────────────────
// Pure functions, fully unit-tested-friendly. No React, no side effects.

export type Sex = "male" | "female";
export type WeightUnit = "kg" | "lb";
export type HeightUnit = "cm" | "ft";
export type Formula = "boer" | "james" | "hume";

export interface LbmInput {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  formula: Formula;
}

export interface LbmResult {
  lbmKg: number;
  fatMassKg: number;
  bodyFatPercent: number;
  lbmPercent: number;
}

// ── Unit helpers ─────────────────────────────────────────────────────────────
export const LB_PER_KG = 2.2046226218;
export const CM_PER_INCH = 2.54;

export const lbToKg = (lb: number) => lb / LB_PER_KG;
export const kgToLb = (kg: number) => kg * LB_PER_KG;
export const inToCm = (inches: number) => inches * CM_PER_INCH;
export const cmToIn = (cm: number) => cm / CM_PER_INCH;
export const feetInchesToCm = (ft: number, inch: number) => inToCm(ft * 12 + inch);

// ── Formulas ─────────────────────────────────────────────────────────────────
// Each returns Lean Body Mass in kilograms.

// Boer (1984) — the most widely used clinical estimate.
export function boer(sex: Sex, weightKg: number, heightCm: number): number {
  return sex === "male"
    ? 0.407 * weightKg + 0.267 * heightCm - 19.2
    : 0.252 * weightKg + 0.473 * heightCm - 48.3;
}

// James (1976)
export function james(sex: Sex, weightKg: number, heightCm: number): number {
  return sex === "male"
    ? 1.1 * weightKg - 128 * (weightKg / heightCm) ** 2
    : 1.07 * weightKg - 148 * (weightKg / heightCm) ** 2;
}

// Hume (1966)
export function hume(sex: Sex, weightKg: number, heightCm: number): number {
  return sex === "male"
    ? 0.3281 * weightKg + 0.33929 * heightCm - 29.5336
    : 0.29569 * weightKg + 0.41813 * heightCm - 43.2933;
}

const FORMULAS: Record<Formula, (s: Sex, w: number, h: number) => number> = {
  boer,
  james,
  hume,
};

export const FORMULA_META: Record<Formula, { label: string; note: string }> = {
  boer: { label: "Boer", note: "Best general-purpose estimate (1984)." },
  james: { label: "James", note: "Weight-and-height ratio model (1976)." },
  hume: { label: "Hume", note: "Classic clinical formula (1966)." },
};

const round1 = (n: number) => Math.round(n * 10) / 10;

export function calculateLbm(input: LbmInput): LbmResult {
  const { sex, weightKg, heightCm, formula } = input;
  const raw = FORMULAS[formula](sex, weightKg, heightCm);
  const lbmKg = Math.max(0, raw);
  const fatMassKg = Math.max(0, weightKg - lbmKg);

  return {
    lbmKg: round1(lbmKg),
    fatMassKg: round1(fatMassKg),
    bodyFatPercent: round1((fatMassKg / weightKg) * 100),
    lbmPercent: round1((lbmKg / weightKg) * 100),
  };
}

// Basic sanity guard for UI validation.
export function isPlausible(weightKg: number, heightCm: number): boolean {
  return (
    Number.isFinite(weightKg) &&
    Number.isFinite(heightCm) &&
    weightKg >= 20 &&
    weightKg <= 400 &&
    heightCm >= 100 &&
    heightCm <= 250
  );
}
