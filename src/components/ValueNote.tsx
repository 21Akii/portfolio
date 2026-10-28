// The "added value" statement shown under each project's introduction.
export function ValueNote({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 max-w-2xl border-s-2 border-accent-text ps-4">
      <p className="text-sm font-medium text-accent-text">{label}</p>
      <p className="mt-1 leading-relaxed">{children}</p>
    </div>
  );
}
