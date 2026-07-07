import { motion } from 'framer-motion'

// Reusable section wrapper: consistent spacing + scroll-into-view animation.
export default function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </motion.section>
  )
}

// Section heading in the bold display font with a mint accent bar.
export function Heading({ eyebrow, children }) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-mint">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
        {children}
      </h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-mint" />
    </div>
  )
}
