import Section, { Heading } from './Section'

export default function About() {
  return (
    <Section id="about">
      <Heading eyebrow="About">Who I Am</Heading>
      <div className="grid gap-10 md:grid-cols-5">
        <p className="md:col-span-3 text-lg leading-relaxed text-body">
          I'm a 3rd-year B.Tech CSE student at{' '}
          <span className="text-white">Bennett University</span> (CGPA{' '}
          <span className="text-mint">8.0</span>), passionate about backend systems,
          AI/agentic systems, and full-stack development. I like turning messy problems into
          clean, scalable services — whether that's a RAG pipeline, a real-time platform, or
          a well-designed database layer.
        </p>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            { k: '8.0', v: 'CGPA' },
            { k: '3rd', v: 'Year B.Tech CSE' },
            { k: '5+', v: 'Core Languages' },
            { k: '3', v: 'Flagship Projects' },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-white/5 bg-ink2 p-5 transition-colors hover:border-mint/40"
            >
              <div className="font-display text-3xl font-bold text-mint">{s.k}</div>
              <div className="mt-1 text-sm text-body">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
