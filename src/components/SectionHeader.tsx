interface SectionHeaderProps {
  icon: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ icon, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2.5 mb-1">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-sm text-[var(--text-muted)] ml-9">{subtitle}</p>
      )}
    </div>
  );
}
