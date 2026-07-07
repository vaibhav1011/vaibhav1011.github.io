import Section, { Heading } from './Section'
import { SKILLS } from '../data'

export default function Skills() {
  return (
    <Section id="skills">
      <Heading eyebrow="Toolbox">Skills</Heading>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((cat) => (
          <div
            key={cat.group}
            className="rounded-2xl border border-white/5 bg-ink2 p-6 transition-colors hover:border-mint/40"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-mint">
              {cat.group}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm font-medium text-white transition-colors hover:border-mint hover:text-mint"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
