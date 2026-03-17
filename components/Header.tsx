import type { CVData } from "@/lib/cv";
export default function Header({ data }: { data: CVData }) {
  return (
    <header className="flex justify-between items-end gap-8 px-10 pt-10 pb-8 [border-bottom:1px_solid_var(--border)] max-sm:flex-col max-sm:items-start max-sm:px-5 max-sm:pt-6 max-sm:pb-5">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 w-fit px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-widest uppercase [color:var(--green)] [border:1px_solid_color-mix(in_srgb,var(--green)_25%,transparent)] [background:color-mix(in_srgb,var(--green)_8%,transparent)]">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse [background:var(--green)]" />
          Available for work
        </div>
        <h1 className="text-[clamp(28px,4.5vw,56px)] font-bold leading-none tracking-tight [color:var(--text-main)]">
          {data.name}
        </h1>
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase [color:var(--accent)]">
            {data.title}
          </span>
          <span className="[color:var(--tx3)]">·</span>
          <span className="font-mono text-[11px] px-2.5 py-1 rounded-md [color:var(--text-muted)] [background:var(--bg-secondary)] [border:1px_solid_var(--border)]">
            {data.subtitle}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 flex-shrink-0 max-sm:items-start">
        <div className="flex items-center gap-2 font-mono text-[12px] [color:var(--text-muted)]">
          <LocationIcon /> {data.location}
        </div>
        <a
          href={`mailto:${data.email}`}
          className="flex items-center gap-2 font-mono text-[12px] transition-opacity hover:opacity-70 [color:var(--text-muted)]"
        >
          <MailIcon /> {data.email}
        </a>
        <a
          href={`https://${data.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-[12px] transition-opacity hover:opacity-70 [color:var(--text-muted)]"
        >
          <GithubIcon /> {data.github}
        </a>
      </div>
    </header>
  );
}
const LocationIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MailIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,12 2,6" />
  </svg>
);
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
