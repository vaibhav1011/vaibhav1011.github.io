import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FileText, ArrowDown } from 'lucide-react'
import { CONTACT } from '../data'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Soft radial glow behind the name */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #7FFFB0 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Top-left tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-base font-medium text-white sm:text-lg"
        >
          Hey <span className="inline-block">👋</span>, I'm a AI Developer
        </motion.p>

        {/* Massive name — clamp() keeps it dominant but responsive */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold uppercase leading-[0.9] tracking-tight text-mint"
          style={{ fontSize: 'clamp(2.75rem, 13vw, 11rem)' }}
        >
          Vaibhav
          <br />
          Salaklan
        </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href={CONTACT.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            <FileText size={18} /> View Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-mint hover:text-mint"
          >
            See Projects
          </a>
        </motion.div>

        {/* Bottom row: contact left, intro + socials right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex flex-col gap-10 border-t border-white/5 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <div className="text-sm">
            <a href={`mailto:${CONTACT.email}`} className="block text-body hover:text-mint">
              {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phone}`} className="mt-1 block text-body hover:text-mint">
              {CONTACT.phone}
            </a>
          </div>

          <div className="max-w-md md:text-right">
            <p className="text-sm leading-relaxed text-body">
              I build fast, scalable backend systems and full-stack apps — from RAG-powered
              AI agents to real-time platforms.
            </p>
            <div className="mt-4 flex gap-4 md:justify-end">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-2xl text-body transition-colors hover:text-mint"
              >
                <FaLinkedin />
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-2xl text-body transition-colors hover:text-mint"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Vertical SCROLL indicator on the right edge */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        <span
          className="text-xs font-medium uppercase tracking-[0.3em] text-body"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll
        </span>
        <div className="h-20 w-px origin-top animate-scrollline bg-mint" />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} className="text-mint" />
        </motion.div>
      </div>
    </section>
  )
}
