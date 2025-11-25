"use client"

import { useState } from "react"
import CandidateCard from "./candidate-card"
import CandidateDetail from "./candidate-detail"

const candidates = [
  {
    id: 1,
    name: "Abelardo de la Espriella",
    party: "Movimiento Defensores de la Patria",
    image: "/abelardo.jpg",
    background: "Abogado del Caribe con destacado perfil en litigios, defensor de políticos y empresarios, conocido por su discurso duro contra el crimen.",
    campaign: {
      title: "Seguridad y Justicia Firme",
      points: [
        "Reinstaurar cadena perpetua y pena de muerte para crímenes graves",
        "Militarización de ciudades y expansión de cárceles",
        "Reformas judiciales para acabar la impunidad",
      ],
    },
  },
  {
    id: 2,
    name: "María Fernanda Cabal",
    party: "Centro Democrático",
    image: "/cabal.jpg",
    background: "Empresaria, politóloga y senadora con posición conservadora y radical en política colombiana.",
    campaign: {
      title: "Conservadurismo y Orden",
      points: [
        "Defensa del derecho a portar armas",
        "Rechazo al acuerdo con las FARC",
        "Fortalecimiento de la seguridad y el orden público",
      ],
    },
  },
  {
    id: 3,
    name: "Daniel Quintero",
    party: "Colombia Humana",
    image: "/quintero.jpg",
    background: "Político joven, exalcalde de Medellín, vinculado a movimientos progresistas y defensa del proceso de paz.",
    campaign: {
      title: "Innovación y Paz",
      points: [
        "Impulso a economía digital y desarrollo sostenible",
        "Apoyo a la paz y reconciliación nacional",
        "Modernización urbana y transparencia",
      ],
    },
  },
  {
    id: 4,
    name: "Gustavo Bolívar",
    party: "Pacto Histórico",
    image: "/bolivar.jpg",
    background: "Escritor, empresario y político de izquierda, senador con enfoque social y defensor de la justicia social.",
    campaign: {
      title: "Justicia Social y Democracia",
      points: [
        "Consulta abierta para elección de candidato",
        "Mejora en derechos sociales y educación",
        "Compromiso con la equidad y democracia participativa",
      ],
    },
  },
  {
    id: 5,
    name: "Paloma Valencia",
    party: "Centro Democrático",
    image: "/paloma.jpg",
    background: "Abogada, filósofa, senadora y líder conservadora con experiencia legislativa y papel destacado en votaciones clave.",
    campaign: {
      title: "Resistencia y Valores",
      points: [
        "Promoción de voto por el No al plebiscito",
        "Defensa de valores tradicionales",
        "Seguridad y fortalecimiento institucional",
      ],
    },
  },
  {
    id: 6,
    name: "Germán Vargas Lleras",
    party: "Cambio Radical",
    image: "/lleras.jpg",
    background: "Político con experiencia como vicepresidente y ministro, enfocado en infraestructura y continuidad de políticas de gobierno anteriores.",
    campaign: {
      title: "Desarrollo y Continuidad",
      points: [
        "Modernización de infraestructura y transporte",
        "Apoyo a políticas económicas estables",
        "Fortalecimiento de la gobernabilidad",
      ],
    },
  },
  {
    id: 7,
    name: "Mauricio Lizcano",
    party: "Independiente",
    image: "/lizcano.jpg",
    background: "Experto en administración pública, ex presidente del Senado con amplia experiencia en el sector público.",
    campaign: {
      title: "Gestión Pública Eficiente",
      points: [
        "Uso de tecnología para mejorar gestión estatal",
        "Transparencia y combate a la corrupción",
        "Desarrollo de políticas públicas basadas en datos",
      ],
    },
  },
  {
    id: 8,
    name: "Juan Daniel Oviedo",
    party: "Movimiento Con Toda por Bogotá",
    image: "/oviedo.jpg",
    background: "Economista y exdirector del DANE, enfocado en la toma de decisiones basadas en datos para la seguridad y desarrollo social.",
    campaign: {
      title: "Decisiones Basadas en Datos",
      points: [
        "Fortalecimiento de seguridad con tecnología",
        "Lucha contra la pobreza y mejora de servicios sociales",
        "Transparencia y gestión eficiente",
      ],
    },
  },
  {
    id: 9,
    name: "Iván Cepeda",
    party: "Polo Democrático",
    image: "/cepeda.jpg",
    background: "Defensor de derechos humanos y político con fuerte enfoque en la justicia social y la memoria histórica.",
    campaign: {
      title: "Justicia y Derechos Humanos",
      points: [
        "Promoción de la memoria histórica",
        "Reparación de víctimas y prevención de violaciones",
        "Fortalecimiento de derechos civiles",
      ],
    },
  },
  {
    id: 10,
    name: "Victoria Dávila",
    party: "Colombia Humana",
    image: "/vicky.jpg",
    background: "Defensora social y política de izquierda, comprometida con la equidad y participación ciudadana.",
    campaign: {
      title: "Equidad y Participación",
      points: [
        "Fortalecimiento de programas sociales",
        "Inclusión de comunidades marginadas",
        "Transparencia y gobierno democrático",
      ],
    },
  },
]

export default function CandidateGallery() {
  const [selectedCandidate, setSelectedCandidate] = useState<(typeof candidates)[0] | null>(null)

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#003366] mb-2 text-center">Candidatos</h2>
        <p className="text-center text-gray-600 mb-12">
          Conoce a los candidatos inscritos. Haz clic en cualquier tarjeta para ver sus propuestas
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onClick={() => setSelectedCandidate(candidate)}
            />
          ))}
        </div>

        {selectedCandidate && (
          <CandidateDetail candidate={selectedCandidate} onClose={() => setSelectedCandidate(null)} />
        )}
      </div>
    </section>
  )
}
