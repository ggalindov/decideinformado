"use client"

import { useState } from "react"

type Candidate = {
  id: number
  name: string
  party: string
  ideology: "left" | "center" | "right"
  key_proposals: string[]
}

const candidates: Candidate[] = [
  {
    id: 1,
    name: "Abelardo de la Espriella",
    party: "Movimiento Defensores de la Patria",
    ideology: "right",
    key_proposals: ["Cadena perpetua", "Militarización de ciudades", "Reformas judiciales"],
  },
  {
    id: 2,
    name: "María Fernanda Cabal",
    party: "Centro Democrático",
    ideology: "right",
    key_proposals: ["Derecho a portar armas", "Rechazo acuerdo FARC", "Seguridad pública"],
  },
  {
    id: 3,
    name: "Paloma Valencia",
    party: "Centro Democrático",
    ideology: "right",
    key_proposals: ["Voto por el No", "Valores tradicionales", "Fortalecimiento institucional"],
  },
  {
    id: 4,
    name: "Germán Vargas Lleras",
    party: "Cambio Radical",
    ideology: "center",
    key_proposals: ["Infraestructura moderna", "Políticas económicas estables", "Gobernabilidad"],
  },
  {
    id: 5,
    name: "Mauricio Lizcano",
    party: "Independiente",
    ideology: "center",
    key_proposals: ["Tecnología en gestión", "Transparencia", "Combate a corrupción"],
  },
  {
    id: 6,
    name: "Juan Daniel Oviedo",
    party: "Movimiento Con Toda por Bogotá",
    ideology: "center",
    key_proposals: ["Seguridad tecnológica", "Lucha contra pobreza", "Gestión eficiente"],
  },
  {
    id: 7,
    name: "Daniel Quintero",
    party: "Colombia Humana",
    ideology: "left",
    key_proposals: ["Economía digital", "Paz y reconciliación", "Modernización urbana"],
  },
  {
    id: 8,
    name: "Gustavo Bolívar",
    party: "Pacto Histórico",
    ideology: "left",
    key_proposals: ["Justicia social", "Derechos sociales", "Democracia participativa"],
  },
  {
    id: 9,
    name: "Iván Cepeda",
    party: "Polo Democrático",
    ideology: "left",
    key_proposals: ["Memoria histórica", "Reparación de víctimas", "Derechos civiles"],
  },
  {
    id: 10,
    name: "Victoria Dávila",
    party: "Colombia Humana",
    ideology: "right",
    key_proposals: ["Programas sociales", "Inclusión comunitaria", "Gobierno democrático"],
  },
]

interface IdeologyGroup {
  label: string
  color: string
  bg_light: string
  candidates: Candidate[]
}

export default function ComparisonGrid() {
  const [expandedCandidate, setExpandedCandidate] = useState<number | null>(null)

  const ideologyGroups: IdeologyGroup[] = [
    {
      label: "IZQUIERDA",
      color: "bg-red-600",
      bg_light: "bg-red-50",
      candidates: candidates.filter((c) => c.ideology === "left"),
    },
    {
      label: "CENTRO",
      color: "bg-[#FFCC33]",
      bg_light: "bg-yellow-50",
      candidates: candidates.filter((c) => c.ideology === "center"),
    },
    {
      label: "DERECHA",
      color: "bg-blue-600",
      bg_light: "bg-blue-50",
      candidates: candidates.filter((c) => c.ideology === "right"),
    },
  ]

  return (
    <section className="py-16 px-4 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#003366] mb-3 text-center">Cuadro Comparativo</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Comparativa de candidatos por ideología política y propuestas clave
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ideologyGroups.map((group) => (
            <div key={group.label} className="flex flex-col">
              {/* Header with ideology label */}
              <div className={`${group.color} rounded-t-lg p-4 text-white font-bold text-lg`}>{group.label}</div>

              {/* Candidates list */}
              <div className={`${group.bg_light} rounded-b-lg p-4 space-y-3 min-h-96`}>
                {group.candidates.map((candidate) => (
                  <div
                    key={candidate.id}
                    className="bg-white rounded-lg border border-gray-200 p-3 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setExpandedCandidate(expandedCandidate === candidate.id ? null : candidate.id)}
                  >
                    {/* Candidate name */}
                    <div className="font-semibold text-[#003366] text-sm">{candidate.name}</div>
                    <div className="text-xs text-gray-500 mb-2">{candidate.party}</div>

                    {/* Expandable proposals section */}
                    {expandedCandidate === candidate.id && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-700 mb-2">Propuestas clave:</div>
                        <ul className="space-y-1">
                          {candidate.key_proposals.map((proposal, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                              <span
                                className={`${group.color} text-white rounded-full w-4 h-4 flex items-center justify-center flex-shrink-0 text-xs font-bold`}
                              >
                                ✓
                              </span>
                              <span>{proposal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 bg-red-600 rounded"></div>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Izquierda:</strong> Enfoque en justicia social
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 bg-[#FFCC33] rounded"></div>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Centro:</strong> Enfoque equilibrado
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded"></div>
              <p className="text-sm font-semibold text-gray-700">
                <strong>Derecha:</strong> Enfoque en seguridad y tradición
              </p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            💡 Haz clic en cada candidato para ver sus propuestas clave
          </p>
        </div>
      </div>
    </section>
  )
}