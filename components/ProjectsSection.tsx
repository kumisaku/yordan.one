import { projects } from "@/lib/data";
import { ProjectEntry } from "./ProjectEntry";

export function ProjectsSection() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Section header */}
      <div className="flex items-center justify-between mb-2 pb-3 border-b border-[var(--rule)]">
        <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-faint)]">
          projects
        </span>
        <span className="font-mono text-xs text-[var(--text-faint)]">
          {projects.length} entries
        </span>
      </div>

      <h2 className="font-serif text-2xl font-semibold text-[var(--text)] mt-6 mb-2">
        work
      </h2>
      <p className="font-sans text-sm italic text-[var(--text-faint)] mb-8">
        a record of things built, shipped, and learned.
      </p>

      {/* Project entries */}
      <div>
        {projects.map((project, i) => (
          <ProjectEntry key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
