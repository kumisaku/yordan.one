import { Navbar } from "@/components/Navbar";
import { HeroEntry } from "@/components/HeroEntry";
import { ProjectsSection } from "@/components/ProjectsSection";
import { bioData } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--bg)] focus:border focus:border-[var(--rule)] focus:font-mono focus:text-xs focus:rounded-sm"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        {/* About */}
        <section id="about" className="min-h-[calc(100vh-64px)]">
          <HeroEntry bio={bioData} />
        </section>

        {/* Divider */}
        <div className="max-w-3xl mx-auto px-6">
          <hr className="border-[var(--rule)]" />
        </div>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-24">
          <ProjectsSection />
        </section>

        {/* Footer */}
        <footer className="max-w-3xl mx-auto px-6 py-8 mt-4 border-t border-[var(--rule)]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-[var(--text-faint)]">
              © {new Date().getFullYear()} jordan alvin
            </span>
            <span className="font-mono text-xs text-[var(--text-faint)]">
              made with care
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
