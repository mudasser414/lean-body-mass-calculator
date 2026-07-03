// Consistent long-form typography for guides, tool explainers, and blog posts.
export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose-lbm space-y-4 text-[15px] leading-relaxed text-ink-700">{children}</div>
  );
}

export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="pt-6 font-display text-2xl font-bold text-ink-900">{children}</h2>;
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-2 font-display text-lg font-semibold text-ink-900">{children}</h3>;
}

export function Lead({ children }: { children: React.ReactNode }) {
  return <p className="text-lg text-ink-500">{children}</p>;
}
