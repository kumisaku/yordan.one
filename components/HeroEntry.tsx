import type { BioData } from "@/lib/data";
import { socialLinks } from "@/lib/data";

interface HeroEntryProps {
  bio: BioData;
}

export function HeroEntry({ bio }: HeroEntryProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      {/* Page header strip */}
      <div className="flex items-center justify-between mb-12 pb-3 border-b border-[var(--rule)]">
        <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-faint)]">
          {bio.name.toLowerCase()}
        </span>
        <span className="font-mono text-xs text-[var(--text-faint)]">
          entry {bio.entryNumber}
        </span>
      </div>

      {/* Headword */}
      <h1 className="font-serif text-2xl font-bold text-[var(--text)] leading-tight tracking-tight mb-2">
        {bio.name}
      </h1>

      {/* Part of speech */}
      <p className="font-sans text-sm italic text-[var(--text-faint)] mb-8">
        {bio.partOfSpeech}
      </p>

      {/* Definition — single paragraph */}
      <p className="font-sans text-base leading-relaxed text-[var(--text-muted)] mb-10">
        {bio.definition}
      </p>

      {/* See also + social text links inline */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-faint)]">
          see also
        </span>

        {/* Internal links */}
        {bio.seeAlso.map((ref) => (
          <a
            key={ref.href}
            href={ref.href}
            className="font-sans text-sm text-[var(--accent)] hover:underline underline-offset-2"
          >
            {ref.label}
          </a>
        ))}

        <span className="text-[var(--rule)]" aria-hidden>·</span>

        {/* Social links as text */}
        {socialLinks.map((link, i) => (
          <span key={link.platform} className="flex items-center gap-4">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-[var(--accent)] hover:underline underline-offset-2"
            >
              {link.label}
            </a>
            {i < socialLinks.length - 1 && (
              <span className="text-[var(--rule)]" aria-hidden>·</span>
            )}
          </span>
        ))}
      </div>
    </article>
  );
}
