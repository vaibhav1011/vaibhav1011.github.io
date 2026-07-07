import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import Section, { Heading } from './Section'
import { PROJECTS } from '../data'

export default function Projects() {
  return (
    <Section id="projects">
      <Heading eyebrow="Selected Work">Projects</Heading>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col rounded-2xl border border-white/5 bg-ink2 p-7 transition-colors hover:border-mint/40"
          >
            <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-mint/30 bg-mint/5 px-3 py-1 text-xs font-medium text-mint"
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="mt-5 flex-1 text-sm leading-relaxed text-body">{p.description}</p>

            {p.github ? (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-mint hover:text-mint"
              >
                <FaGithub /> View on GitHub
              </a>
            ) : (
              <span className="mt-6 inline-flex w-fit items-center gap-2 text-xs italic text-body/60">
                Repository link coming soon
              </span>
            )}
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
