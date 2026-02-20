interface SectionHeaderProps {
  title: string;
  action?: string;
}

const SectionHeader = ({ title, action = "See All" }: SectionHeaderProps) => (
  <div className="flex items-center justify-between px-4">
    <h2 className="font-display text-base font-bold tracking-wide">{title}</h2>
    <button className="text-xs font-semibold text-primary transition-colors hover:text-neon-cyan">
      {action}
    </button>
  </div>
);

export default SectionHeader;
