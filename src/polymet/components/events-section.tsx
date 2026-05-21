import { CalendarIcon, MapPinIcon, UsersIcon } from "lucide-react"
import { SectionWrapper } from "@/polymet/components/section-wrapper"

interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  capacity: string
  status: "upcoming" | "in-progress" | "drafting"
  color: "purple" | "pink" | "teal" | "yellow"
}

const events: Event[] = [
  {
    id: "01",
    title: "DMV Redesign",
    description:
      "Can a service encounter keep its structure while becoming more legible, humane, and participatory?",
    date: "TBA",
    location: "Newspeak House",
    capacity: "TBA",
    status: "drafting",
    color: "purple",
  },
  {
    id: "02",
    title: "Digital Identity",
    description:
      "What does trust-building verification look like when designed with people current identity systems exclude?",
    date: "TBA",
    location: "Online + London",
    capacity: "TBA",
    status: "drafting",
    color: "pink",
  },
  {
    id: "03",
    title: "Synthetic Voice + Consultation",
    description:
      "How should participatory channels adapt when synthetic voice is cheap and feedback can be flooded?",
    date: "TBA",
    location: "Newspeak House",
    capacity: "TBA",
    status: "drafting",
    color: "teal",
  },
  {
    id: "04",
    title: "Liquid Democracy + Hybrid Election",
    description:
      "Where does trust live, in paper or digital channels, and what does delegation feel like when made tangible?",
    date: "TBA",
    location: "TBA",
    capacity: "TBA",
    status: "drafting",
    color: "yellow",
  },
]

const colorClasses = {
  purple: "border-l-purple-500 bg-purple-500/5",
  pink: "border-l-pink-500 bg-pink-500/5",
  teal: "border-l-teal-400 bg-teal-400/5",
  yellow: "border-l-yellow-500 bg-yellow-500/5",
}

const statusColors = {
  upcoming: "text-teal-400",
  "in-progress": "text-teal-300",
  drafting: "text-yellow-400",
}

const statusLabels = {
  upcoming: "UPCOMING",
  "in-progress": "IN PROGRESS",
  drafting: "DRAFTING",
}

const glowClasses = {
  purple: "hover:shadow-[0_0_24px_rgba(168,85,247,0.25)] hover:border-purple-500/50",
  pink: "hover:shadow-[0_0_24px_rgba(236,72,153,0.25)] hover:border-pink-500/50",
  teal: "hover:shadow-[0_0_24px_rgba(45,212,191,0.25)] hover:border-teal-400/50",
  yellow: "hover:shadow-[0_0_24px_rgba(234,179,8,0.25)] hover:border-yellow-500/50",
}

export function EventsSection() {
  return (
    <SectionWrapper id="experiments">
      <div className="py-16">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            EXPERIMENTS
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-teal-400 via-pink-500 to-transparent rounded-full" />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`border-l-4 ${colorClasses[event.color]} ${glowClasses[event.color]} border border-white/15 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:scale-[1.01] cursor-default`}
            >
              {/* Event Number and Status */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-5xl font-black text-white/10">
                  {event.id}
                </span>
                <span
                  className={`${statusColors[event.status]} font-mono text-xs uppercase tracking-wider`}
                >
                  {statusLabels[event.status]}
                </span>
              </div>

              {/* Event Title */}
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide">
                {event.title}
              </h3>

              {/* Event Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {event.description}
              </p>

              {/* Event Details */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white/50">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-mono">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <MapPinIcon className="w-4 h-4" />
                  <span className="font-mono">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50">
                  <UsersIcon className="w-4 h-4" />
                  <span className="font-mono">{event.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="mt-12 text-center">
          <p className="text-white/30 font-mono text-sm">
            More experiments in the pipeline —
            <span className="text-teal-400"> subscribe above to hear first.</span>
          </p>
        </div>
      </div>
    </SectionWrapper>
  )
}
