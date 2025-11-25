"use client"

interface Candidate {
  id: number
  name: string
  party: string
  image: string
}

interface CandidateCardProps {
  candidate: Candidate
  onClick: () => void
}

export default function CandidateCard({ candidate, onClick }: CandidateCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="relative w-full aspect-square bg-gray-100 overflow-hidden rounded-lg">
        <img
          src={candidate.image || "/placeholder.svg"}
          alt={candidate.name}
          className="w-full h-full object-cover group-hover:brightness-90 transition-all duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#003366] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-bold text-lg text-balance">{candidate.name}</h3>
        <p className="text-sm text-blue-100">{candidate.party}</p>
      </div>
      <div className="p-4 text-left">
        <h3 className="font-bold text-sm text-[#003366] group-hover:text-[#FFCC33] transition-colors">
          {candidate.name}
        </h3>
        <p className="text-xs text-gray-600 truncate">{candidate.party}</p>
      </div>
    </button>
  )
}
