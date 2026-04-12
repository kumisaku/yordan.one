import type { SocialLink } from "@/lib/data";

interface ContactSectionProps {
  socialLinks: SocialLink[];
}

function PlatformIcon({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "linkedin":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "twitter":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "instagram":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
        </svg>
      );
  }
}

export function ContactSection({ socialLinks }: ContactSectionProps) {
  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* Section header */}
      <div className="flex items-center justify-between mb-2 pb-3 border-b border-[var(--rule)]">
        <span className="font-mono text-xs tracking-widest uppercase text-[var(--text-faint)]">
          contact
        </span>
        <span className="font-mono text-xs text-[var(--text-faint)]">
          appendix
        </span>
      </div>

      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[var(--text)] mt-6 mb-2">
        Get in touch
      </h2>
      <p className="font-sans text-sm text-[var(--text-muted)] mb-2 leading-relaxed max-w-lg">
        Always open to conversations about new ventures, collaboration, or just talking shop with other builders.
      </p>
      <p className="font-sans text-sm text-[var(--text-faint)] mb-10">
        <span className="font-mono text-xs tracking-widest uppercase mr-2">reach</span>
        <a
          href="mailto:hello@yourname.com"
          className="text-[var(--accent)] hover:underline underline-offset-2"
        >
          hello@yourname.com
        </a>
      </p>

      {/* Social link sub-entries */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
        {socialLinks.map((link, i) => (
          <article
            key={link.platform}
            className="py-6 border-b border-[var(--rule)] sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
          >
            {/* Entry number + platform headword */}
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-mono text-xs text-[var(--text-faint)]">
                {i + 1}.
              </span>
              <h3 className="font-serif text-lg font-semibold text-[var(--text)]">
                {link.label}
              </h3>
            </div>

            {/* Handle as "phonetic" */}
            <div className="flex items-center gap-2 ml-5 mb-3">
              <span className="text-[var(--text-faint)]">
                <PlatformIcon icon={link.icon} />
              </span>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.platform}: ${link.handle}`}
                className="font-mono text-xs text-[var(--text-faint)] hover:text-[var(--accent)] transition-colors"
              >
                {link.handle}
              </a>
            </div>

            {/* Description as definition */}
            <p className="font-sans text-xs leading-relaxed text-[var(--text-faint)] ml-5">
              {link.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
