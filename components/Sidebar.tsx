import type { CVData } from "@/lib/cv";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[9px] font-medium tracking-[0.2em] uppercase [color:var(--tx3)]">
      <span>{children}</span>
      <div className="flex-1 h-px [background:var(--border)]" />
    </div>
  );
}

export default function Sidebar({ data }: { data: CVData }) {
  return (
    <aside className="flex flex-col gap-6 p-6 [background:var(--bg-main)] [border-right:1px_solid_var(--border)]">
      <section className="flex flex-col gap-2.5">
        <Label>About</Label>
        <p className="text-[12px] leading-[1.8] [color:var(--text-muted)]">
          {data.about}
        </p>
      </section>
      <section className="flex flex-col gap-2.5">
        <Label>Skills</Label>
        <div className="flex flex-col gap-3">
          {data.skills.map((group) => (
            <div key={group.category} className="flex flex-col gap-1.5">
              <div className="text-[9px] font-bold tracking-[0.15em] uppercase [color:var(--purple)]">
                {group.category}
              </div>
              <div className="flex flex-wrap gap-1">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] px-2 py-0.5 rounded-md cursor-default [color:var(--text-muted)] [background:var(--bg-secondary)] [border:1px_solid_var(--border)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2.5">
        <Label>Languages</Label>
        <div className="flex flex-col gap-2">
          {data.languages.map(({ lang, level }) => (
            <div key={lang} className="flex justify-between items-baseline">
              <span className="text-[12px] font-semibold [color:var(--text-main)]">
                {lang}
              </span>
              <span className="font-mono text-[10px] [color:var(--tx3)]">
                {level}
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-2.5">
        <Label>Strengths</Label>
        <ul className="flex flex-col gap-1.5">
          {data.strengths.map((s) => (
            <li
              key={s}
              className="flex items-baseline gap-2 text-[12px] leading-[1.5] [color:var(--text-muted)]"
            >
              <span className="font-mono text-[9px] flex-shrink-0 [color:var(--accent)]">
                →
              </span>
              {s}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col gap-2.5">
        <Label>Education</Label>
        <p className="font-mono text-[11px] leading-[1.7] [color:var(--text-muted)]">
          {data.education}
        </p>
      </section>
    </aside>
  );
}
