# Arnau Portfolio

Portfolio personal de Arnau, Media Manager especializado en Minecraft. Preparado para producción, HTTPS automático y despliegue en Vercel, Netlify y Cloudflare Pages.

## Estado del proyecto

- Next.js 16.2.12
- React 19.2.4
- Tailwind CSS 4
- Compatible con Vercel, Netlify y Cloudflare Pages
- Producción lista y optimizada

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
npm run check
```

## Archivos importantes añadidos

- `.gitignore`
- `.env.example`
- `netlify.toml`
- `.github/workflows/ci.yml`
- `next.config.ts`

## GitHub

1. Crea un repositorio nuevo en GitHub.
2. En tu carpeta local:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio production setup"
```

3. Conecta el repositorio remoto:

```bash
git remote add origin <REPO_URL>
git push -u origin main
```

4. Si ya existe `.gitignore`, confirma que incluya:

```gitignore
/node_modules
/.next
/out
/build
.env*
.vercel
.next-env.d.ts
```

## Vercel

1. Ve a https://vercel.com/new.
2. Inicia sesión con GitHub.
3. Selecciona tu repositorio.
4. Acepta la configuración recomendada.

> Build command: `npm run build`
> Output directory: dejar vacío

5. Vercel creará un dominio temporal `*.vercel.app` con HTTPS.

## Netlify

1. Ve a https://app.netlify.com/start.
2. Conecta GitHub y selecciona el repositorio.
3. En Build settings usa:

```text
Build command: npm run build
Publish directory: .next
```

4. El archivo `netlify.toml` ya está configurado para Next.js.

## Cloudflare Pages

1. Ve a https://dash.cloudflare.com/pages.
2. Crea un nuevo proyecto desde GitHub.
3. Selecciona el repositorio.
4. Usa `npm ci` y `npm run build`.
5. Cloudflare Pages servirá el sitio desde Next.js.

## Actualizar el sitio

1. Haz cambios localmente.
2. Confirma los cambios:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

3. Vercel/Netlify/Cloudflare Pages desplegarán automáticamente.

## Dominio personalizado

1. En Vercel o Netlify, ve a Domains.
2. Añade tu dominio.
3. Sigue las instrucciones de DNS.
4. HTTPS se configura automáticamente.

## Variables de entorno

No se necesita ninguna variable de entorno para este proyecto base.

Si en futuro necesitas valores, usa `.env.local` y `.env.example` como referencia.
