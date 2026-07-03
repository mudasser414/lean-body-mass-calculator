"use client";

import Link from "next/link";
import { useState } from "react";
import { toolPages, guidePages, moneyPage } from "@/lib/pages";
import { site } from "@/lib/site";

const primaryTools = toolPages().slice(0, 5);
const money = moneyPage();

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink-900">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint-500 text-white">L</span>
          {site.name}
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <NavGroup label="Tools" items={primaryTools} />
          <Link href="/guides" className="text-sm font-medium text-ink-700 hover:text-mint-600">
            Guides
          </Link>
          <Link href="/blog" className="text-sm font-medium text-ink-700 hover:text-mint-600">
            Blog
          </Link>
          <Link
            href={money.href}
            className="rounded-lg bg-mint-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-mint-600"
          >
            Calculate LBM
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-xl leading-none">{open ? "×" : "≡"}</span>
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <MobileSection title="Tools" items={primaryTools} onClick={() => setOpen(false)} />
          <Link
            href="/guides"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm font-medium text-ink-700"
          >
            Guides
          </Link>
          <Link
            href="/blog"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm font-medium text-ink-700"
          >
            Blog
          </Link>
          <Link
            href={money.href}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-mint-500 px-4 py-2 text-center text-sm font-semibold text-white"
          >
            Calculate LBM
          </Link>
        </div>
      )}
    </header>
  );
}

function NavGroup({ label, items }: { label: string; items: { href: string; navLabel: string }[] }) {
  return (
    <div className="group relative">
      <button className="text-sm font-medium text-ink-700 hover:text-mint-600">{label}</button>
      <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
        <ul className="rounded-xl border border-slate-100 bg-white p-2 shadow-card">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-mint-50 hover:text-mint-700"
              >
                {item.navLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  items,
  onClick,
}: {
  title: string;
  items: { href: string; navLabel: string }[];
  onClick: () => void;
}) {
  return (
    <div className="mb-2">
      <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">{title}</p>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className="block rounded-lg px-1 py-2 text-sm text-ink-700"
        >
          {item.navLabel}
        </Link>
      ))}
    </div>
  );
}
