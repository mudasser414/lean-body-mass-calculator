import Link from "next/link";
import { moneyPage } from "@/lib/pages";

export default function NotFound() {
  const money = moneyPage();
  return (
    <div className="mx-auto max-w-lg px-4 py-24 text-center">
      <p className="font-display text-6xl font-extrabold text-mint-500">404</p>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink-900">Page not found</h1>
      <p className="mt-2 text-ink-500">
        That page doesn&apos;t exist. Let&apos;s get you back to something useful.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link href="/" className="rounded-lg border border-slate-200 px-5 py-2.5 font-semibold text-ink-700">
          Home
        </Link>
        <Link href={money.href} className="rounded-lg bg-mint-500 px-5 py-2.5 font-semibold text-white">
          Open calculator
        </Link>
      </div>
    </div>
  );
}
