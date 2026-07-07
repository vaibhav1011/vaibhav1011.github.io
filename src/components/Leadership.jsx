import { Award, Lightbulb } from 'lucide-react'
import Section, { Heading } from './Section'
import { CERTIFICATIONS } from '../data'

export default function Leadership() {
  return (
    <Section id="leadership">
      <Heading eyebrow="Beyond Code">Leadership & Achievements</Heading>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Certifications */}
        <div className="rounded-2xl border border-white/5 bg-ink2 p-7">
          <div className="mb-5 flex items-center gap-3">
            <Award className="text-mint" size={22} />
            <h3 className="font-display text-xl font-bold text-white">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {CERTIFICATIONS.map((c) => (
              <li key={c} className="flex gap-3 text-sm leading-relaxed text-body">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                {c}
              </li>
            ))}
          </ul>
        </div>

        {/* Ideathon */}
        <div className="rounded-2xl border border-white/5 bg-ink2 p-7">
          <div className="mb-5 flex items-center gap-3">
            <Lightbulb className="text-mint" size={22} />
            <h3 className="font-display text-xl font-bold text-white">Competitions</h3>
          </div>
          <div className="rounded-xl border border-mint/20 bg-mint/5 p-5">
            <h4 className="font-semibold text-white">Bennovate 3.0 Ideathon</h4>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Presented an entrepreneurial solution for travel agency management under Wizar,
              pitching the concept and business approach to a panel.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
