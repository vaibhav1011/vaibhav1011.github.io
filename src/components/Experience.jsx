import Section, { Heading } from './Section'
import { EXPERIENCE } from '../data'

export default function Experience() {
  return (
    <Section id="experience">
      <Heading eyebrow="Career">Work Experience</Heading>
      <div className="relative border-l border-white/10 pl-8">
        {EXPERIENCE.map((job) => (
          <div key={job.company} className="relative pb-4">
            {/* Timeline node */}
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-mint bg-ink" />
            <div className="rounded-2xl border border-white/5 bg-ink2 p-6 transition-colors hover:border-mint/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-white">{job.role}</h3>
                <span className="text-sm font-medium text-mint">{job.period}</span>
              </div>
              <p className="mt-1 text-sm text-body">{job.company}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-body">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
