"use client";
import { cvData } from "@/lib/cv";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
export default function Page() {
  const { currentTheme, setCurrentTheme } = useTheme();
  const isDark = currentTheme === "dark";
  return (
    <div className="min-h-screen flex items-start justify-center px-4 py-8 pb-14 [background:var(--bg-main)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
        className={`w-full max-w-[1080px] rounded-xl overflow-hidden [background:var(--bg-card)] [border:1px_solid_var(--border)] ${isDark ? "[box-shadow:0_0_0_1px_rgba(255,255,255,0.03),0_24px_48px_rgba(0,0,0,0.8)]" : "[box-shadow:0_4px_24px_rgba(0,0,0,0.08)]"}`}
      >
        <div className="flex items-center h-10 px-3 [background:var(--bg-main)] [border-bottom:1px_solid_var(--border)]">
          <div className="relative flex items-center gap-2 h-10 px-3 font-mono text-[11px] [color:var(--text-muted)] [background:var(--bg-card)] [border-right:1px_solid_var(--border)]">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse [background:var(--green)]" />
            adnan-al-omari.cv
            <span className="absolute bottom-0 left-0 right-0 h-px [background:var(--accent)]" />
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2 pr-1">
            <button
              onClick={() => setCurrentTheme(isDark ? "light" : "dark")}
              className="w-8 h-8 flex items-center justify-center rounded-lg transition-all hover:opacity-70 [color:var(--text-muted)] [border:1px_solid_var(--border)]"
              title={isDark ? "Switch to light" : "Switch to dark"}
            >
              {isDark ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <a
              href={`mailto:${cvData.email}`}
              className="flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg transition-all hover:opacity-70 [color:var(--text-muted)] [border:1px_solid_var(--border)]"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,12 2,6" />
              </svg>
              Hire me
            </a>
          </div>
        </div>
        <Header data={cvData} />
        <div className="grid grid-cols-[260px_1fr] max-[860px]:grid-cols-1">
          <Sidebar data={cvData} />
          <MainContent data={cvData} />
        </div>
        <footer className="flex justify-between items-center h-7 px-4 [background:var(--accent)]">
          <span className="font-mono text-[10px] tracking-wide text-white/90">
            ⎇ main · Frontend Developer & UI/UX Designer · Poland
          </span>
          <span className="font-mono text-[10px] text-white/60 max-sm:hidden">
            React · Next.js · TypeScript · Node.js
          </span>
        </footer>
      </motion.div>
    </div>
  );
}
