"use client";
import { useState } from "react";
import React from 'react';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

// ══════════════════════════════════════════════
// CONFIGURA AQUÍ TUS DATOS — solo edita esta sección
// ══════════════════════════════════════════════
const CONFIG = {
  amazonURL: "https://www.amazon.com/dp/B0HNRP5X6N",       // URL de tu libro en Amazon
  formspreeID: "mkoevelz",                                    // Tu ID de Formspree (ya lo tienes)
  instagramURL: "https://www.instagram.com/j_boreal",
  facebookURL:  "https://www.facebook.com/juanjose.perezalvarez.5",
  youtubeURL:   "https://www.youtube.com/@dancingninja",
  tiktokURL:    "https://www.tiktok.com/@j_boreal",
  // Imágenes — coloca tus archivos en /public/ y pon el nombre aquí
  heroBookImage:  "/libro-vol1.jpg",       // portada del libro recortada (sin fondo)
  heroBackground: "/hero-bg.jpg",          // fondo del hero (paisaje de Honduras)
  authorPhoto:    "/juan-jose.jpg",        // tu foto
  logoSopa:       "/logo-sopa.jpg",        // logo de Sopa Catracha
  BackVol2:       "/BackVol2.png",        // cover  volumen 2
  rutaSecreta:    "/ruta-secreta-bg.jpg",        // fondo de la ruta secreta
  // Interior del libro — 4 imágenes de muestra
  interiorImg1: "/interior-1.jpg",
  interiorImg2: "/interior-2.jpg",
  interiorImg3: "/interior-3.jpg",
  interiorImg4: "/interior-4.jpg",
};
// ══════════════════════════════════════════════

// Íconos de redes sociales — SVG de Simple Icons (licencia CC0), sin dependencias
const ICON_PATHS = {
  facebook:  "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  instagram: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
  youtube:   "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  tiktok:    "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
};

polyfillCountryFlagEmojis();

export default function RutaCatrachaLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(`https://formspree.io/f/${CONFIG.formspreeID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      alert("Ocurrió un error. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">

      {/* ── NAVBAR ─────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#0d1e4a] text-white flex items-center justify-between px-6 py-3 shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src={CONFIG.logoSopa}
              alt="Sopa Catracha logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="font-bold text-amber-400 text-sm leading-tight">SOPA CATRACHA</div>
            <div className="text-[10px] text-gray-300 leading-tight">HONDURAS EN PALABRAS</div>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm text-gray-200">
          <a href="#inicio"      className="hover:text-amber-400 transition">Inicio</a>
          <a href="#libros"      className="hover:text-amber-400 transition">Libros</a>
          <a href="#autor"       className="hover:text-amber-400 transition">Sobre el autor</a>
          <a href="#ruta-secreta" className="hover:text-amber-400 transition">Ruta Secreta</a>
          <a href="#newsletter"  className="hover:text-amber-400 transition">Novedades</a>
          <a href="#contacto"    className="hover:text-amber-400 transition">Contacto</a>
        </div>
        <a
          href={CONFIG.amazonURL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-amber-400 text-[#0d1e4a] font-bold text-sm px-4 py-2 rounded-lg hover:bg-amber-300 transition flex items-center gap-2"
        >
          {/* Amazon icon placeholder */}
          COMPRAR EN AMAZON
        </a>
      </nav>

      {/* ── HERO ───────────────────────────────── */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-20"
        style={{
          backgroundImage: `url(${CONFIG.heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-[#0d1e4a]/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
          {/* Libro */}
          <div className="flex justify-center">
            <img
              src={CONFIG.heroBookImage}
              alt="Sopa Catracha Vol. 1"
              className="w-72 md:w-96 drop-shadow-2xl"
            />
          </div>

          {/* Texto */}
          <div className="text-white">
            <h1 className="text-amber-400 font-bold text-4xl md:text-5xl mb-4 leading-tight">
              DESCUBRE HONDURAS<br />
              <span className="text-amber-400">DE UNA FORMA DIVERTIDA</span>
            </h1>
            <p className="text-gray-200 text-lg mb-6 leading-relaxed">
              50 sopas de letras con temas de geografía y maravillas de Honduras.
            </p>

            {/* Iconos de categorías */}
            <div className="grid grid-cols-3 gap-4 mb-8 text-center text-sm text-gray-200">
              {[
                { icon: "⊞", label: "50 Sopas\nde letras" },
                { icon: "📍", label: "Departamentos\ny municipios" },
                { icon: "🌊", label: "Ríos" },
                { icon: "⛰️", label: "Montañas" },
                { icon: "🧠", label: "Ejercita tu\nmente" },
                { icon: "🗺", label: "Ruta Secreta\nCatracha" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs whitespace-pre-line leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href={CONFIG.amazonURL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-[#0d1e4a] font-bold px-6 py-3 rounded-xl hover:bg-amber-300 transition flex items-center gap-2 text-sm"
              >
                COMPRAR EN AMAZON
              </a>
              <a
                href="#interior"
                className="border border-white text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/10 transition text-sm"
              >
                VER AVANCE DEL LIBRO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERIOR DEL LIBRO ─────────────────── */}
      <section id="interior" className="py-20 bg-[#f5f0e8]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-2xl font-bold text-[#0d1e4a] mb-2 tracking-widest uppercase">
            ✦ Explora el interior ✦
          </h2>
          <p className="text-center text-gray-500 mb-10 text-sm">
            Una muestra de lo que encontrarás dentro del libro
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: CONFIG.interiorImg1, label: "Instrucciones" },
              { img: CONFIG.interiorImg2, label: "Retos entretenidos para todos" },
              { img: CONFIG.interiorImg3, label: "Encuentra la palabra secreta en cada puzzle" },
              { img: CONFIG.interiorImg4, label: "Soluciones incluidas al final del libro" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="bg-white rounded-xl shadow overflow-hidden mb-3 aspect-[3/4]">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs text-gray-600 leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLECCIÓN ──────────────────────────── */}
      <section id="libros" className="py-20 bg-[#0d1e4a] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl font-bold mb-2 tracking-widest uppercase text-amber-400">
            ✦ Libros de la colección ✦
          </h2>
          <p className="text-center text-gray-300 mb-12 text-sm">
            Serie Honduras en Palabras
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vol 1 */}
            <div className="bg-[#1a2f5e] rounded-2xl p-6 flex gap-5 items-start">
              <img
                src={CONFIG.heroBookImage}
                alt="Vol 1"
                className="w-28 rounded-lg shadow-lg flex-shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-amber-400 mb-1">Volumen 1</div>
                <div className="font-bold text-lg mb-1">Honduras en Palabras</div>
                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full font-semibold">
                  DISPONIBLE
                </span>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  El primer libro de la serie. 50 sopas de letras para conocer más sobre nuestra tierra.
                </p>
                <a
                  href={CONFIG.amazonURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 bg-amber-400 text-[#0d1e4a] font-bold text-sm px-4 py-2 rounded-lg hover:bg-amber-300 transition"
                >
                  COMPRAR EN AMAZON
                </a>
              </div>
            </div>

            {/* Vol 2 */}
            <div className="bg-[#1a2f5e] rounded-2xl p-6 flex gap-5 items-start opacity-80">
              <img
                src={CONFIG.BackVol2}
                alt="Vol 2"
                className="w-28 rounded-lg shadow-lg flex-shrink-0"
              />
              <div>
                <div className="text-xs font-bold text-amber-400 mb-1">Volumen 2</div>
                <div className="font-bold text-lg mb-1">En desarrollo</div>
                <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full font-semibold">
                  EN DESARROLLO
                </span>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed">
                  Más retos, más cultura y nuevas sorpresas. Próximamente disponible.
                </p>
                <button
                  onClick={() => document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" })}
                  className="mt-4 inline-flex items-center gap-2 border border-amber-400 text-amber-400 font-bold text-sm px-4 py-2 rounded-lg hover:bg-amber-400/10 transition"
                >
                  Avísame cuando salga
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTOR ──────────────────────────────── */}
      <section id="autor" className="py-20 bg-[#f5f0e8]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-xl font-bold text-[#0d1e4a] mb-4 uppercase tracking-wider">
              Sobre el autor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soy Juan José, hondureño de corazón y convencido de que conocer nuestro país es el primer paso para amarlo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sopa Catracha nació de una pregunta simple: ¿por qué no existe un libro de puzzles que 
              celebre todo lo que Honduras es? Departamentos, ríos, montañas, historia, 
              cultura, lenguas indígenas — todo eso merece estar en manos de niños, 
              familias y catrachos en cualquier rincón del mundo.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este proyecto es un acto de orgullo nacional. Uno letra a la vez.
            </p>
            <p className="text-gray-600 text-sm italic mb-6">Con el apoyo incondicional de Victoria A.</p>
            <div className="font-serif text-2xl text-[#0d1e4a] italic">Juan José P. A.</div>
          </div>
          <div className="flex justify-center">
            <img
              src={CONFIG.authorPhoto}
              alt="Juan José Pérez Álvarez"
              className="w-56 h-56 rounded-full object-cover shadow-xl border-4 border-amber-400"
            />
          </div>
        </div>
      </section>

      {/* ── RUTA SECRETA ───────────────────────── */}
      <section
        id="ruta-secreta"
        className="py-20 text-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${CONFIG.rutaSecreta})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="absolute inset-0 bg-[#1a0e05]/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 grid md:grid-cols-3 gap-4 items-center">
          <div className="text-center text-8xl">🧭</div>
          <div>
            <h2 className="text-amber-400 font-bold text-2xl uppercase tracking-wider mb-4">
              Ruta Secreta Catracha
            </h2>
            <p className="text-gray-200 leading-relaxed mb-4">
              Cada sopa de letras contiene una palabra oculta. Al completar los 50 puzzles
              descubrirás un mensaje especial dedicado a Honduras.
            </p>
            <p className="text-amber-300 font-semibold italic">
              ¿Estás listo para descubrirlo?
            </p>
          </div>
          <div className="md:col-span-1 hidden md:flex justify-end">
            <div className="bg-amber-900/40 border border-amber-700 rounded-2xl p-6 text-right max-w-xs">
              <p className="text-amber-200 italic text-lg leading-relaxed">
                "Todo eso, escondido en<br />50 sopas de letras.<br />
                <strong>Encuéntralo.</strong>"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ─────────────────────────── */}
      <section id="newsletter" className="py-20 bg-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0d1e4a] mb-2">
            No te pierdas ninguna novedad
          </h2>
          <p className="text-gray-500 mb-8">
            Déjanos tu correo y te avisaremos cuando el próximo volumen esté listo.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="text-4xl mb-3">🇭🇳</div>
              <p className="text-green-700 font-semibold text-lg">¡Gracias! Te avisaremos pronto.</p>
              <p className="text-green-600 text-sm mt-1">Ya eres parte de la familia catracha.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-amber-400 text-[#0d1e4a] font-bold px-6 py-3 rounded-xl hover:bg-amber-300 transition text-sm disabled:opacity-60"
              >
                {loading ? "Enviando..." : "QUIERO ENTERARME"}
              </button>
            </form>
          )}
          <p className="text-xs text-gray-400 mt-3">🔒 Tu información está segura con nosotros.</p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <footer id="contacto" className="bg-[#0d1e4a] text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* Redes */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Síguenos</h3>
            <div className="flex gap-4">
              {[
                { label: "Facebook",  href: CONFIG.facebookURL,  path: ICON_PATHS.facebook },
                { label: "Instagram", href: CONFIG.instagramURL, path: ICON_PATHS.instagram },
                { label: "YouTube",   href: CONFIG.youtubeURL,   path: ICON_PATHS.youtube },
                { label: "TikTok",    href: CONFIG.tiktokURL,    path: ICON_PATHS.tiktok },
              ].map(({ label, href, path }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="hover:text-amber-400 transition">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Enlaces</h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              {["Inicio","Libros","Sobre el autor","Ruta Secreta","Novedades","Contacto"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(/ /g,"-")}`} className="hover:text-amber-400 transition py-0.5">
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Sello */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-3xl mb-2" style={{ fontFamily: '"Twemoji Country Flags", sans-serif' }}>🇭🇳</div>
            <p className="text-sm font-semibold text-white">HECHO CON ORGULLO EN HONDURAS</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 mt-8 pt-6 border-t border-gray-700 flex flex-col md:flex-row justify-between text-xs text-gray-500 gap-2">
          <span>© 2026 Juan José. Todos los derechos reservados.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Política de privacidad</a>
            <a href="#" className="hover:text-gray-300">Términos y condiciones</a>
          </div>
        </div>
      </footer>

    </div>
  );
}