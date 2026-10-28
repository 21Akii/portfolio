export function Chips({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
