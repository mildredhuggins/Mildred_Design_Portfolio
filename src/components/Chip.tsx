interface ChipProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Chip({ label, active = false, onClick }: ChipProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-pill text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
        active 
          ? "bg-text text-surface" 
          : "bg-transparent border border-border text-muted hover:text-text hover:border-text/30"
      }`}
    >
      {label}
    </button>
  );
}
