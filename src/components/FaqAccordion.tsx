"use client";

import { useState } from "react";

export interface QA {
  q: string;
  a: string;
}

// Accessible FAQ accordion. The same `items` array should be passed to
// faqSchema() so the visible content and structured data match exactly.
export default function FaqAccordion({ items }: { items: QA[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <h3>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="font-medium text-ink-900">{item.q}</span>
                <span
                  className={`grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint-50 text-mint-700 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                  aria-hidden
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={`grid overflow-hidden px-5 text-sm text-ink-500 transition-all ${
                isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0">{item.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
