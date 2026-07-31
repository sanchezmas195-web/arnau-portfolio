"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";

export function BackgroundEffects() {
  const containerRef = useRef<HTMLDivElement>(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 13) % 100}%`,
        size: 4 + (index % 6),
        delay: index * 0.08,
      })),
    []
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const handlePointerMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      node.style.setProperty("--mx", `${x}%`);
      node.style.setProperty("--my", `${y}%`);
    };
    node.addEventListener("pointermove", handlePointerMove);
    return () => node.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{
        "--mx": "50%",
        "--my": "50%",
      } as React.CSSProperties}
    >
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at var(--mx, 50%) var(--my, 50%), transparent 0%, rgba(99,102,241,0.18) 20%, transparent 45%)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.16),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.14),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.12),transparent_40%)]" />
      <div className="absolute inset-0 backdrop-blur-[80px]" />
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/95 shadow-[0_0_20px_rgba(255,255,255,0.45)]"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
          animate={{ y: [0, -18, 0], opacity: [0.35, 0.95, 0.35] }}
          transition={{ duration: 5 + (p.id % 4), repeat: Infinity, delay: p.delay }}
        />
      ))}
    </div>
  );
}
