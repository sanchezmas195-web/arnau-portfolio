"use client";

import { BackgroundEffects } from "@/app/components/background-effects";
import { SiteShell } from "@/app/components/site-shell";
import {
  ArrowRight,
  Bot,
  Compass,
  Megaphone,
  Palette,
  Sparkles,
  TrendingUp,
  Users,
  Camera,
  PenTool,
  MessagesSquare,
  PartyPopper,
  CirclePlay,
  BadgeCheck,
  Layers,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const experience = [
  {
    name: "MienFun",
    role: "Ex Staff",
    description:
      "Trabajé en el lado editorial y organizativo del proyecto, apoyando la coordinación del equipo Media, el contenido para redes y la comunicación entre staff y creadores.",
    highlights: [
      "Coordinación de contenido",
      "Organización del equipo Media",
      "Apoyo en campañas y eventos",
    ],
    years: "Experiencia reciente",
  },
];

const capabilities = [
  {
    title: "Gestión de Creadores",
    description: "Reviso postulaciones, contacto con YouTubers, Streamers y TikTokers, y ayudo a ordenar el proceso de selección y aprobación de rangos Media.",
    icon: Users,
  },
  {
    title: "Marketing",
    description: "Diseño campañas de lanzamiento, publicidad, branding y estrategias de crecimiento alineadas con la identidad del servidor.",
    icon: Megaphone,
  },
  {
    title: "Redes Sociales",
    description: "Gestiono contenido para TikTok, Instagram, YouTube, Shorts y Reels con foco en consistencia, narrativa y conversión.",
    icon: CirclePlay,
  },
  {
    title: "Organización",
    description: "Coordino a diseñadores, editores, creadores y staff para que el trabajo de Media se ejecute con claridad y ritmo.",
    icon: Layers,
  },
  {
    title: "Eventos",
    description: "Planeo eventos, grabaciones, clips y piezas de contenido que ayuden a crecer la presencia del proyecto y reforzar su marca.",
    icon: PartyPopper,
  },
  {
    title: "Minecraft",
    description: "Gestiono la parte Media del servidor con foco en rangos, coordinación con creadores, promoción y generación de contenido que impulsa el crecimiento de jugadores.",
    icon: ShieldCheck,
  },
];

const services = [
  {
    title: "Gestión de Creadores",
    description: "Estructuro el equipo, reviso perfiles y ayudo a convertir talento en una máquina de contenido organizada y profesional.",
    icon: Users,
  },
  {
    title: "Estrategias de Marketing",
    description: "Diseño planes de crecimiento, posicionamiento y contenido con una mirada comercial y de comunidad.",
    icon: TrendingUp,
  },
  {
    title: "Organización del Equipo Media",
    description: "Coordino tareas, prioridades y comunicación para que el equipo trabaje con claridad y eficiencia.",
    icon: Layers,
  },
  {
    title: "Gestión de Redes Sociales",
    description: "Ordeno la presencia del proyecto en TikTok, Instagram, YouTube y Discord con una visión consistente.",
    icon: Camera,
  },
  {
    title: "Branding",
    description: "Refuerzo la identidad visual y comunicativa del proyecto para que se perciba como una marca sólida.",
    icon: Palette,
  },
  {
    title: "Campañas Publicitarias",
    description: "Planifico lanzamientos, promociones y contenidos con enfoque en visibilidad y captación de público.",
    icon: Megaphone,
  },
  {
    title: "Eventos",
    description: "Coordinación de eventos, grabaciones, clips y contenido de alto impacto para redes.",
    icon: PartyPopper,
  },
  {
    title: "Gestión Discord",
    description: "Ayudo a que la comunicación del proyecto encaje con su estrategia de marca y crecimiento.",
    icon: MessagesSquare,
  },
  {
    title: "Crecimiento de Comunidades",
    description: "Impulso una visión de comunidad más fuerte, activa y profesional mediante estrategia y contenido.",
    icon: Sparkles,
  },
];

const skills = [
  ["Marketing", 90],
  ["Gestión de Creadores", 90],
  ["Discord", 85],
  ["Organización", 95],
  ["TikTok", 85],
  ["YouTube", 80],
  ["Branding", 80],
  ["Comunicación", 88],
  ["Trabajo en Equipo", 92],
  ["Liderazgo", 86],
];

const stats = [
  { value: "+25", label: "Campañas guiadas" },
  { value: "+100", label: "Piezas de contenido" },
  { value: "+10", label: "Eventos coordinados" },
  { value: "+5", label: "Equipos liderados" },
];

export default function Home() {
  return (
    <SiteShell>
      <main className="relative isolate z-0 px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <BackgroundEffects />

        <section className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-2 pb-20 pt-8 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                <Sparkles size={16} />
                Media Manager especializado en Minecraft
              </div>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl">Arnau</h1>
              <p className="mt-6 max-w-2xl text-2xl leading-9 text-zinc-200 sm:text-3xl">
                Ayudo a servidores y comunidades de Minecraft a crecer con identidad, estrategia y un contenido que realmente aporta valor.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-zinc-300">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5">Branding</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Creadores</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Marketing</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Comunidades</span>
              </div>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                Trabajo en la intersección entre marketing, organización y liderazgo para que cada proyecto se perciba más fuerte, más profesional y más coherente en cada canal.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/15 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/25">
                  Ver enfoque <ArrowRight size={16} />
                </Link>
                <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-medium text-zinc-100 transition hover:border-fuchsia-400/30 hover:bg-white/10">
                  Contactar
                </Link>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/25 bg-fuchsia-500/10 px-6 py-3 font-medium text-fuchsia-200 transition hover:bg-fuchsia-500/20">
                  <Bot size={16} /> Discord
                </a>
              </div>
              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-2.5 text-cyan-300">
                    <Zap size={16} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Enfoque</p>
                    <p className="font-medium text-white">Más claridad, más impacto y mejores decisiones de contenido</p>
                  </div>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Estrategia", "Planificación y crecimiento"],
                    ["Comunicación", "Coordinación con staff y creadores"],
                    ["Contenido", "Piezas con propósito y consistencia"],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-3 text-sm text-zinc-400">
                      <p className="font-medium text-zinc-100">{title}</p>
                      <p className="mt-1">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={false} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.95 }} className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-fuchsia-500/15 to-transparent blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 p-6 shadow-[0_0_100px_rgba(8,15,30,0.8)] backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Especialización</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Estrategia para comunidades de Minecraft</p>
                  </div>
                  <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">
                    <BadgeCheck size={18} />
                  </div>
                </div>
                <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Compass size={16} />
                    <p className="text-sm uppercase tracking-[0.3em]">Áreas clave</p>
                  </div>
                  <div className="mt-4 space-y-3">
                    {[
                      { title: "Branding", desc: "Identidad fuerte y posicionamiento claro", icon: Palette },
                      { title: "Creators", desc: "Gestión de talento y coordinación", icon: Users },
                      { title: "Discord", desc: "Comunicación y comunidad", icon: MessagesSquare },
                      { title: "Growth", desc: "Estrategias de expansión y visibilidad", icon: TrendingUp },
                    ].map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-3">
                          <div className="mt-0.5 rounded-full bg-cyan-400/10 p-2 text-cyan-300">
                            <IconComponent size={16} />
                          </div>
                          <div>
                            <p className="font-medium text-zinc-100">{item.title}</p>
                            <p className="mt-1 text-sm text-zinc-400">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-5 rounded-[1.35rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-fuchsia-500/10 p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Impacto</p>
                    <p className="text-xl font-semibold text-white">+100 piezas</p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">Organización y estrategia para que cada acción del equipo tenga una dirección más clara y profesional.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-2 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Sobre mí</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Media Manager especializado en comunidades de Minecraft.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Soy un profesional que ayuda a proyectos de Minecraft a encontrar claridad, orden y un contenido alineado con su identidad. Mi foco está en procesos útiles para el equipo Media, campañas que respalden la marca y una comunicación que haga que el servidor se perciba más profesional y atractivo.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Gestión de creadores",
                "Procesos para el equipo Media",
                "Campañas con foco en resultados",
                "Eventos y activaciones",
                "Posicionamiento de marca",
                "Comunicación con staff y creadores",
                "Contenidos estratégicos",
                "Coordinación de equipos",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 text-zinc-300 shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    <PenTool size={18} />
                  </div>
                  <p className="font-medium text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-2 py-8 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Experiencia</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Trayectoria orientada a la gestión y el crecimiento</h2>
          </div>
          <motion.article whileHover={{ y: -6, scale: 1.01 }} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-2xl font-semibold text-white">MienFun</p>
                <p className="mt-1 text-sm text-cyan-300">Ex Staff • MienFun</p>
              </div>
              <div className="rounded-full border border-white/10 bg-zinc-950/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-zinc-400">
                Experiencia reciente en Minecraft
              </div>
            </div>
            <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
              Apoyé la coordinación del contenido y la comunicación entre staff y creadores para que el equipo Media trabajara con procesos más claros y resultados más consistentes.
            </p>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {experience[0].highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-zinc-950/70 p-4 text-sm text-zinc-300">
                  {item}
                </div>
              ))}
            </div>
          </motion.article>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl px-2 py-24 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">¿Qué hace un Media Manager?</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Especialización completa para proyectos de Minecraft</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div whileHover={{ y: -6, scale: 1.01 }} key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-2 py-8 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Habilidades</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Capacidad para liderar, comunicar y crecer</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">Combino estrategia de marketing, organización de equipos y una forma de trabajar cercana al branding para que cada proyecto tenga mayor claridad y proyección.</p>
            </div>
            <div className="space-y-6">
              {skills.map(([label, percent]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-zinc-300">
                    <span>{label}</span>
                    <span>{percent}%</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${percent}%` }} viewport={{ once: true }} transition={{ duration: 1 }} className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-2 py-24 lg:px-8">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Servicios</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Soluciones premium para proyectos que buscan crecer</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 backdrop-blur-xl">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">{service.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-2 py-8 lg:px-8">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 sm:grid-cols-2 lg:grid-cols-4 backdrop-blur-xl">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-2 py-24 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-8 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Resultados</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Resultados verificables en proyectos de Minecraft</h2>
            <p className="mt-6 max-w-3xl leading-8 text-zinc-400">
              Más de 100 piezas de contenido coordinadas, 25 campañas guiadas y 10 eventos organizados en proyectos de Minecraft — con foco en crecimiento, coherencia de marca y presencia más profesional.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.25rem] border border-white/10 bg-zinc-950/60 p-6">
                  <p className="text-4xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-2 py-24 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Contacto</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Listo para trabajar en un proyecto serio y con visión</h2>
              <p className="mt-5 text-lg leading-8 text-zinc-400">Si buscas alguien que aporte orden, estrategia y presencia a tu proyecto, podemos hablar.</p>
              <div className="mt-8 space-y-4 text-zinc-300">
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-3 transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <Bot size={18} className="text-cyan-300" /> arnau#0001
                </a>
                <a href="https://github.com/arnau" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-3 transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <Compass size={18} className="text-cyan-300" /> github.com/arnau
                </a>
                <a href="mailto:hello@arnau.dev" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-950/60 p-3 transition hover:border-cyan-400/30 hover:text-cyan-200">
                  <Sparkles size={18} className="text-cyan-300" /> hello@arnau.dev
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-zinc-950/70 p-8 backdrop-blur-xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <a href="mailto:hello@arnau.dev?subject=Proyecto%20Minecraft" className="rounded-full border border-cyan-400/40 bg-cyan-400/15 px-5 py-2.5 text-sm font-medium text-cyan-200 transition hover:bg-cyan-400/25">Escribir por email</a>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-fuchsia-400/30 hover:bg-white/10">Abrir Discord</a>
              </div>
              <form className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label htmlFor="contact-name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                    placeholder="Nombre"
                  />
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                    placeholder="Email"
                  />
                </div>
                <label htmlFor="contact-project" className="sr-only">
                  Servidor o proyecto
                </label>
                <input
                  id="contact-project"
                  name="project"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="Servidor o proyecto"
                />
                <label htmlFor="contact-message" className="sr-only">
                  Mensaje
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                  placeholder="Cuéntame sobre tu idea, comunidad o objetivo de crecimiento..."
                />
                <button className="rounded-full border border-cyan-400/40 bg-cyan-400/15 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/25">
                  Hablemos de tu proyecto
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-2 py-8 text-sm text-zinc-400 sm:flex-row lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">A</div>
            <div>
              <p className="font-semibold text-white">Arnau</p>
              <p>Media Manager especializado en Minecraft</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">Discord</a>
            <a href="https://github.com/arnau" target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">GitHub</a>
            <a href="mailto:hello@arnau.dev" className="transition hover:text-cyan-300">Email</a>
          </div>
        </footer>
      </main>
    </SiteShell>
  );
}
