"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CVData } from "@/lib/cv";
const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];
function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 font-mono text-[9px] font-medium tracking-[0.2em] uppercase [color:var(--tx3)]">
      <span>{children}</span>
      <div className="flex-1 h-px [background:var(--border)]" />
    </div>
  );
}
type Experience = CVData["experience"][number];
type Project = CVData["projects"][number];
function ExpCard({
  role,
  company,
  period,
  description,
  items,
  duties,
  index,
}: Experience & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08, ease }}
      className="group relative flex flex-col gap-3 p-5 rounded-xl border transition-colors duration-150 cursor-default [background:var(--bg-secondary)] [border-color:var(--border)] hover:[background:var(--bg-main)]"
    >
      <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-r opacity-0 group-hover:opacity-100 transition-opacity [background:var(--accent)]" />
      <div className="flex justify-between items-start gap-3">
        <div className="flex flex-col gap-1">
          <div className="text-[14px] font-semibold leading-tight [color:var(--text-main)]">
            {role}
          </div>
          <div className="font-mono text-[11px] font-medium tracking-wide [color:var(--accent)]">
            {company}
          </div>
        </div>
        <div className="font-mono text-[10px] px-2 py-1 rounded-md flex-shrink-0 [color:var(--tx3)] [background:var(--bg-main)] [border:1px_solid_var(--border)]">
          {period}
        </div>
      </div>
      {description && (
        <p className="font-mono text-[11px] italic [color:var(--tx3)]">
          {description}
        </p>
      )}
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-[12.5px] leading-[1.55] [color:var(--text-muted)]"
          >
            <span className="w-1 h-1 rounded-full flex-shrink-0 mt-[6px] opacity-60 [background:var(--accent)]" />
            {item}
          </li>
        ))}
      </ul>
      {duties && (
        <div className="flex flex-col gap-2 pt-3 [border-top:1px_solid_var(--border)]">
          <div className="font-mono text-[8px] tracking-[0.2em] uppercase [color:var(--tx3)]">
            Responsibilities
          </div>
          <div className="flex flex-wrap gap-1.5">
            {duties.map((d) => (
              <span
                key={d}
                className="font-mono text-[10px] px-2.5 py-0.5 rounded-full [color:var(--accent)] [background:var(--accent-dim)] [border:1px_solid_color-mix(in_srgb,var(--accent)_20%,transparent)]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
function ProjectCard({
  name,
  tags,
  items,
  isOpen,
  onToggle,
  index,
}: Project & { isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, delay: index * 0.04, ease }}
      className={`flex flex-col rounded-xl overflow-hidden border transition-colors duration-150 [background:var(--bg-secondary)] ${isOpen ? "[border-color:color-mix(in_srgb,var(--accent)_30%,var(--border))]" : "[border-color:var(--border)]"}`}
    >
      <button
        onClick={onToggle}
        className={`flex items-center justify-between gap-3 px-4 py-3 text-left w-full transition-colors duration-150 hover:[background:var(--bg-main)] ${isOpen ? "[background:var(--bg-main)]" : "bg-transparent"}`}
      >
        <span className="text-[13px] font-semibold leading-snug [color:var(--text-main)]">
          {name}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`flex-shrink-0 transition-transform duration-200 [color:var(--tx3)] ${isOpen ? "rotate-180" : "rotate-0"}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex flex-col gap-3 px-4 pb-4 pt-1 [border-top:1px_solid_var(--border)]">
              <div className="flex flex-wrap gap-1 pt-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] tracking-wide px-2 py-0.5 rounded-md [color:var(--purple)] [background:color-mix(in_srgb,var(--purple)_10%,transparent)] [border:1px_solid_color-mix(in_srgb,var(--purple)_22%,transparent)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-1.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[12px] leading-[1.5] [color:var(--text-muted)]"
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 mt-[5px] opacity-70 [background:var(--purple)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
export default function MainContent({ data }: { data: CVData }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [allOpen, setAllOpen] = useState(false);
  const handleToggle = (i: number) => {
    if (allOpen) {
      setAllOpen(false);
      setOpenIndex(i);
    } else setOpenIndex((prev) => (prev === i ? null : i));
  };
  return (
    <main className="flex flex-col gap-8 p-8">
      <section className="flex flex-col gap-3">
        <Label>Experience</Label>
        <div className="flex flex-col gap-2.5">
          {data.experience.map((exp, i) => (
            <ExpCard key={i} {...exp} index={i} />
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-[9px] font-medium tracking-[0.2em] uppercase [color:var(--tx3)]">
          <span>Projects</span>
          <div className="flex-1 h-px [background:var(--border)]" />
          <button
            onClick={() => {
              setAllOpen((o) => !o);
              setOpenIndex(null);
            }}
            className="h-7 font-mono text-[9px] tracking-[0.12em] uppercase px-2 rounded flex items-center transition-colors [color:var(--accent)] [border:1px_solid_color-mix(in_srgb,var(--accent)_25%,transparent)] [background:var(--accent-dim)]"
          >
            {allOpen ? "collapse all" : "expand all"}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {data.projects.map((proj, i) => (
            <ProjectCard
              key={proj.name}
              {...proj}
              isOpen={allOpen || openIndex === i}
              onToggle={() => handleToggle(i)}
              index={i}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
