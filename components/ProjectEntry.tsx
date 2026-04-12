import type { Project } from "@/lib/data";

interface ProjectEntryProps {
  project: Project;
  index: number;
}

function renderDefinition(
  text: string,
  links?: { text: string; href: string }[]
) {
  if (!links || links.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;

  for (const link of links) {
    const idx = remaining.indexOf(link.text);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(
      <a
        key={link.href}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--accent)] underline underline-offset-2"
      >
        {link.text}
      </a>
    );
    remaining = remaining.slice(idx + link.text.length);
  }
  if (remaining) parts.push(remaining);
  return parts;
}

export function ProjectEntry({ project, index }: ProjectEntryProps) {
  const isActive = project.year.toLowerCase().includes("present");

  return (
    <article
      id={project.id}
      className="py-10 border-b border-[var(--rule)] last:border-0"
    >
      {/* Sub-entry header row */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-[var(--text-faint)]">
              1.{index + 1}
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[var(--text)] leading-tight">
              {project.entryWord}
            </h3>
          </div>
          <p className="font-sans text-xs italic text-[var(--text-faint)] mt-1 ml-6">
            {project.partOfSpeech}
          </p>
        </div>

        {/* Year badge — highlighted if active */}
        <span
          className={`font-mono text-xs px-2 py-1 rounded-sm shrink-0 border ${
            isActive
              ? "text-[var(--accent)] border-[var(--accent)] opacity-80"
              : "text-[var(--text-faint)] border-[var(--rule)]"
          }`}
        >
          {project.year}
        </span>
      </div>

      {/* Definition — single paragraph */}
      <p className="font-sans text-sm leading-relaxed text-[var(--text-muted)] mb-6 ml-6">
        {renderDefinition(project.definition, project.definitionLinks)}
      </p>

      {/* Footer: tags + links */}
      <div className="ml-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs text-[var(--text-faint)] border border-[var(--rule)] px-2 py-0.5 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.seeAlso && project.seeAlso.length > 0 && (
            <span className="font-sans text-xs text-[var(--text-faint)]">
              <span className="font-mono text-xs tracking-widest uppercase mr-1">
                see also
              </span>
              {project.seeAlso.map((ref, i) => (
                <span key={ref.href}>
                  <a
                    href={ref.href}
                    className="text-[var(--accent)] hover:underline underline-offset-2"
                    target={ref.href.startsWith("http") ? "_blank" : undefined}
                    rel={ref.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {ref.label}
                  </a>
                  {project.seeAlso && i < project.seeAlso.length - 1 && (
                    <span className="mx-1 text-[var(--rule)]">·</span>
                  )}
                </span>
              ))}
            </span>
          )}

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.entryWord}`}
              className="font-mono text-xs text-[var(--accent)] hover:underline underline-offset-2 flex items-center gap-1"
            >
              visit
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
