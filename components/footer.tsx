export default function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div id="about">
            <h4 className="text-xl font-bold mb-4 text-[#FFCC33]">Sobre Nosotros</h4>
            <p className="text-blue-100 leading-relaxed">
              Decide Informado es una plataforma no partidista diseñada para facilitar el acceso a información clara y
              verificada sobre candidatos electorales. Nuestro objetivo es fortalecer la democracia participativa
              mediante decisiones electorales informadas.
            </p>
          </div>

          {/* Sources Section */}
          <div id="sources">
            <h4 className="text-xl font-bold mb-4 text-[#FFCC33]">Fuentes</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>
                <a href="https://colombiaone.com/2025/08/22/colombia-abelardo-de-la-espriella-2026-presidential-elections/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Abelardo De La Espriella (ColombiaOne)
                </a>
              </li>
              <li>
                <a href="https://es.wikipedia.org/wiki/Mar%C3%ADa_Fernanda_Cabal" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de María Fernanda Cabal (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Daniel_Quintero" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Daniel Quintero (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://es.wikipedia.org/wiki/Gustavo_Bol%C3%ADvar" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Gustavo Bolívar (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://congresovisible.uniandes.edu.co/congresistas/perfil/paloma-susana-valencia-laserna/9535/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Paloma Valencia (Congreso Visible)
                </a>
              </li>
              <li>
                <a href="https://es.wikipedia.org/wiki/Germ%C3%A1n_Vargas_Lleras" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Germán Vargas Lleras (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://co.linkedin.com/in/mauricio-lizcano-4527b8199" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Mauricio Lizcano (LinkedIn)
                </a>
              </li>
              <li>
                <a href="https://es.wikipedia.org/wiki/Juan_Daniel_Oviedo" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Juan Daniel Oviedo (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://es.wikipedia.org/wiki/Iv%C3%A1n_Cepeda_Castro" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil de Iván Cepeda (Wikipedia)
                </a>
              </li>
              <li>
                <a href="https://twitter.com/VickyDavilaH" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFCC33] transition-colors">
                  Perfil público de Victoria Dávila (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-[#FFCC33]">Contacto</h4>
            <p className="text-blue-100 mb-2">Elaborado por: Luisa Fernanda Villate Bustos</p>
            <p className="text-blue-100 text-sm">
              Esta plataforma es administrada de manera independiente y no representa a ningún partido político.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8 text-center text-blue-200">
          <p className="text-sm">
            © 2025 Decide Informado. Todos los derechos reservados. | Plataforma para Decisiones Electorales Informadas
          </p>
        </div>
      </div>
    </footer>
  )
}