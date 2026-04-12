import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { label: "about", href: "#about" },
  { label: "projects", href: "#projects" },
];

export function Navbar() {
  return (
    <header
      className="sticky top-0 z-50 h-16 border-b border-[var(--rule)] bg-[var(--bg)]"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-3xl mx-auto h-full px-6 flex items-center justify-between"
      >
        {/* Monogram / site identity */}
        <a
          href="#about"
          className="font-serif text-sm font-semibold tracking-widest uppercase text-[var(--text-faint)] hover:text-[var(--text)] transition-colors"
          aria-label="Back to top"
        >
          AJ
        </a>

        {/* Navigation links + theme toggle */}
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wider text-[var(--text-faint)] hover:text-[var(--text)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
