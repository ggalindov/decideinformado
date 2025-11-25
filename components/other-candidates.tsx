export default function OtherCandidates() {
  const otherCandidates = [
    "Alberto Lizarazo - Independiente",
    "Álvaro Pardo - Independiente",
    "Ángel Custodio Cabrera - Independiente",
    "Andrés Guerra - Centro Democrático",
    "Aníbal Gaviria - Independiente",
    "Armando Villegas - Independiente",
    "Camilo Romero - Coalición Frente Amplio",
    "Carlos Caicedo - Fuerza Ciudadana",
    "Carolina Corcho - Polo Democrático Alternativo",
    "César Augusto Pinzón - Independiente",
    "Claudia López - Partido Verde",
    "Dagoberto Santoya - Independiente",
    "Daniel Palacios - Independiente",
    "David Luna - Cambio Radical",
    "Enrique Peñalosa - Independiente",
    "Ernesto Sánchez - Independiente",
    "Felipe Córdoba - Independiente",
    "Francisco Barbosa - Independiente",
    "Héctor Olimpo Espinosa - Independiente",
    "Jaime Araujo Rentería - Independiente",
    "Jaime Pumarejo - Partido Liberal",
    "Jhon Jair Segura - Partido Verde",
    "John Mosquera - Independiente",
    "Jorge Enrique Rojas - Independiente",
    "Jose Gamba - Independiente",
    "José Vargas - Independiente",
    "Josue Martínez - Independiente",
    "Jota Pe. Hernández - Partido Verde",
    "Juan Carlos Cárdenas - Alianza Verde",
    "Juan Carlos Saldarriaga - Independiente",
    "Juan G. Zuluaga - Independiente",
    "Juan Gómez - Independiente",
    "Juan Manuel Galán - Nuevo Liberalismo",
    "Leonardo Huerta - Independiente",
    "Luis Carlos Reyes - Independiente",
    "Luis Gilberto Murillo - Independiente",
    "Luz María Zapata - Independiente",
    "María Carolina Lacouture - Independiente",
    "María José Pizarro - Pacto Histórico",
    "Martha Bernal - Independiente",
    "Maurice Armitage - Independiente",
    "Mauricio Cárdenas - Independiente",
    "Miguel Uribe Turbay - Centro Democrático",
    "Miguel Pretel - Independiente",
    "Mihaly Flandorffer - Independiente",
    "Neys Santana - Independiente",
    "Paola Holguín - Centro Democrático",
    "Pedro Díaz - Independiente",
    "Pierre Onzaga - Independiente",
    "Ricardo Pérez - Independiente",
    "Roy Barreras - Fuerza de la Paz",
    "Rubén Darío Lizarralde - Independiente",
    "Santiago Botero - Independiente",
    "Sergio Fajardo - Dignidad y Compromiso",
    "Sondra Macollins - Independiente",
    "Susana Muhamad - Pacto Histórico",
    "Wilson R. Orejuela - Independiente"
  ]

  return (
    <section className="py-12 px-4 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-[#003366] mb-6">Otros Candidatos Inscritos y Preinscritos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {otherCandidates.map((candidate, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#3399FF] transition-colors"
            >
              <div className="w-2 h-2 bg-[#FFCC33] rounded-full flex-shrink-0" />
              <span className="text-gray-700">{candidate}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-4">
          Información basada en reportes oficiales y publicaciones de precandidatos[web:78][web:80][web:82][web:99].
        </p>
      </div>
    </section>
  )
}
