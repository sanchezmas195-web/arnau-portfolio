import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_30%),#030712] px-6">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-white/8 p-10 text-center backdrop-blur-xl">
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">Esta página no existe</h1>
        <p className="mt-4 text-lg leading-8 text-zinc-400">El contenido que buscas no está disponible, pero puedes volver al inicio y explorar el portfolio completo.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/15 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-400/25">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
