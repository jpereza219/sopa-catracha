export default function HondurasPuzzleLandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 py-10">
      <div className="max-w-3xl w-full text-center">

        {/* HEADER */}
        <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-4">
          Ruta Secreta Catracha
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Gracias por ser parte de esta aventura catracha 🇭🇳
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          El <strong>Volumen 2</strong> ya se encuentra en construcción.
          Muy pronto llegarán nuevos retos, municipios, cultura hondureña
          y nuevas sorpresas ocultas.
        </p>

        {/* COUNTDOWN */}
        <div className="bg-gray-100 rounded-3xl p-8 shadow-sm mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Volumen 2 en construcción
          </h2>

          <p className="text-gray-700 mb-4">
            Estamos trabajando en nuevos puzzles y contenido inspirado
            en la riqueza cultural y natural de Honduras.
          </p>

          <div className="text-4xl font-bold mb-2">
            Próximamente
          </div>

          <p className="text-sm text-gray-500">
            Mantente atento para futuras novedades.
          </p>
        </div>

        {/* EMAIL FORM */}
        <div className="bg-black text-white rounded-3xl p-8 mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            ¿Quieres enterarte primero?
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            Déjanos tu correo y te avisaremos cuando el próximo volumen esté listo.
          </p>

          <form
            action="https://formspree.io/f/mkoevelz"
            method="POST"
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Tu correo electrónico"
              className="px-4 py-4 rounded-2xl text-black w-full md:w-96"
            />

            <button
              type="submit"
              className="bg-white text-black px-6 py-4 rounded-2xl font-medium hover:opacity-90 transition"
            >
              Avisarme
            </button>
          </form>
        </div>

        {/* QUOTE */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-600 italic leading-relaxed text-lg">
            “Conocer nuestras palabras, nuestros pueblos y nuestra cultura
            también es una forma de mantener viva la identidad hondureña.”
          </p>
        </div>

        {/* FOOTER */}
        <div className="mt-12 text-sm text-gray-500">
          © 2026 Juan José
        </div>
      </div>
    </div>
  )
}
