import { motion } from "framer-motion";

interface ThemeFilterProps {
  activeTheme: string | null;
  onThemeChange: (theme: string | null) => void;
}

const themeIcons: Record<string, { icon: JSX.Element; label: string }> = {
  engineering: {
    label: "Engineering & Structural",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 34L20 6L34 34" />
        <path d="M10 26H30" />
        <path d="M13 18H27" />
        <circle cx="20" cy="6" r="2" fill="currentColor" />
      </svg>
    ),
  },
  environmental: {
    label: "Environmental & Science",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 36V18" />
        <path d="M20 18C20 18 12 14 12 8C12 4 16 2 20 6C24 2 28 4 28 8C28 14 20 18 20 18Z" fill="currentColor" opacity="0.15" />
        <path d="M20 18C20 18 12 14 12 8C12 4 16 2 20 6C24 2 28 4 28 8C28 14 20 18 20 18Z" />
        <path d="M14 32C14 32 16 28 20 28C24 28 26 32 26 32" />
      </svg>
    ),
  },
  community: {
    label: "Community & Urban Design",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="16" width="12" height="18" rx="1" />
        <rect x="22" y="10" width="12" height="24" rx="1" />
        <rect x="9" y="20" width="3" height="3" fill="currentColor" opacity="0.3" />
        <rect x="9" y="26" width="3" height="3" fill="currentColor" opacity="0.3" />
        <rect x="25" y="14" width="3" height="3" fill="currentColor" opacity="0.3" />
        <rect x="25" y="20" width="3" height="3" fill="currentColor" opacity="0.3" />
        <rect x="25" y="26" width="3" height="3" fill="currentColor" opacity="0.3" />
        <rect x="28.5" y="14" width="3" height="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
  "digital-media": {
    label: "Art & Digital Media",
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 4L23.5 16.5L36 20L23.5 23.5L20 36L16.5 23.5L4 20L16.5 16.5L20 4Z" fill="currentColor" opacity="0.1" />
        <path d="M20 4L23.5 16.5L36 20L23.5 23.5L20 36L16.5 23.5L4 20L16.5 16.5L20 4Z" />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  },
};

const ThemeFilter = ({ activeTheme, onThemeChange }: ThemeFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={() => onThemeChange(null)}
        className={`px-4 py-2 rounded-md text-xs font-mono-ui uppercase tracking-wider transition-all ${
          activeTheme === null
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-muted-foreground hover:text-foreground"
        }`}
      >
        All Work
      </button>
      {Object.entries(themeIcons).map(([key, { icon, label }]) => (
        <motion.button
          key={key}
          onClick={() => onThemeChange(activeTheme === key ? null : key)}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center gap-2.5 px-4 py-2 rounded-md transition-all border ${
            activeTheme === key
              ? "bg-primary/10 text-primary border-primary/20 shadow-sm"
              : "bg-background text-muted-foreground border-border hover:text-foreground hover:border-foreground/20"
          }`}
        >
          <span className={activeTheme === key ? "text-primary" : "text-muted-foreground"}>
            {icon}
          </span>
          <span className="text-xs font-mono-ui tracking-wide hidden sm:inline">{label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeFilter;
