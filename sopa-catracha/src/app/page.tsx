export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 py-10">
      <div className="max-w-3xl w-full text-center">
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
          Sopa Catracha
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Gracias por ser parte de esta aventura catracha 🇭🇳
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          El <strong>Volumen 2</strong> ya se encuentra en construcción.
          Muy pronto llegarán nuevos retos, más cultura hondureña,
          municipios, tradiciones y nuevas sorpresas ocultas.
        </p>

        <div className="bg-gray-100 rounded-3xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Quieres enterarte antes que todos?
          </h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            Guarda esta página y mantente atento a las próximas novedades.
            Aquí anunciaremos el lanzamiento oficial del próximo volumen.
          </p>

          <div className="flex justify-center">
            <a
              href="honorconsultancyservices@gmail.com"
              className="bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium hover:opacity-90 transition"
            >
              Contactar
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 italic leading-relaxed text-lg">
            Conocer nuestras palabras, nuestros pueblos y nuestra cultura
            también es una forma de mantener viva la identidad hondureña.
          </p>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          © 2026 Juan José
        </div>
      </div>
    </div>
  );
}