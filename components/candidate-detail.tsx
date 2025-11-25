"use client"

import { X } from "lucide-react"

interface Campaign {
  title: string
  points: string[]
}

interface Candidate {
  id: number
  name: string
  party: string
  image: string
  background: string
  campaign: Campaign
}

interface CandidateDetailProps {
  candidate: Candidate
  onClose: () => void
}

export default function CandidateDetail({ candidate, onClose }: CandidateDetailProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#003366] text-white p-6 flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold mb-1">{candidate.name}</h2>
            <p className="text-blue-100">{candidate.party}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-[#001f4d] rounded-lg transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={candidate.image || "/placeholder.svg"}
              alt={candidate.name}
              className="w-48 h-48 rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Background */}
          <div>
            <h3 className="text-xl font-bold text-[#003366] mb-3">Perfil</h3>
            <p className="text-gray-700 leading-relaxed">{candidate.background}</p>
          </div>

          {/* Campaign */}
          <div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4">{candidate.campaign.title}</h3>
            <ul className="space-y-3">
              {candidate.campaign.points.map((point, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <div className="w-2 h-2 bg-[#FFCC33] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#001f4d] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  )
}
