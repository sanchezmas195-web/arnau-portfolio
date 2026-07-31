"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Moon, SunMedium } from "lucide-react";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    const storedTheme = window.localStorage.getItem("arnau-theme");
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "dark";
  });
  const cursorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("arnau-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_transparent_30%),linear-gradient(135deg,#04070d_0%,#09111f_55%,#04070d_100%)] text-zinc-100 transition-colors duration-500">
      <div ref={cursorRef} className="pointer-events-none fixed left-0 top-0 z-[60] h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/70 bg-cyan-300/20 backdrop-blur-sm transition-transform duration-75" />
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500"
        style={{ scaleX }}
      />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
              A
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-300">Arnau</p>
              <p className="text-[11px] text-zinc-500">Media Manager • Marketing • Creators</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-white/10 bg-white/5 p-2.5 text-zinc-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunMedium size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </header>
      <main className="relative overflow-hidden">{children}</main>
    </div>
  );
}
