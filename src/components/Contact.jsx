import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'
import { CONTACT } from '../data'

export default function Contact() {
  // Formspree handles submission. `state.succeeded` flips true once the message is
  // delivered (the hook also clears the fields for us); `state.submitting` is true
  // in-flight; `state.errors` holds field-level and top-level errors on failure.
  const [state, handleSubmit] = useForm('xeebdrre')

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-mint">Contact</p>
      <h2
        className="font-display font-bold uppercase leading-none tracking-tight text-mint"
        style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}
      >
        Let's Talk
      </h2>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        {/* Contact details */}
        <div className="space-y-5">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-4 text-body transition-colors hover:text-mint"
          >
            <Mail size={20} className="text-mint" /> {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-4 text-body transition-colors hover:text-mint"
          >
            <Phone size={20} className="text-mint" /> {CONTACT.phone}
          </a>
          <div className="flex gap-5 pt-2 text-3xl">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-body transition-colors hover:text-mint"
            >
              <FaLinkedin />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-body transition-colors hover:text-mint"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Form */}
        {state.succeeded ? (
          <p className="text-sm text-mint">Thanks for reaching out! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                id="name"
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-ink2 px-4 py-3 text-sm text-white placeholder-body/50 outline-none transition-colors focus:border-mint"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="mt-1.5 text-xs text-red-400/90"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-ink2 px-4 py-3 text-sm text-white placeholder-body/50 outline-none transition-colors focus:border-mint"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="mt-1.5 text-xs text-red-400/90"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Your message"
                className="w-full resize-none rounded-xl border border-white/10 bg-ink2 px-4 py-3 text-sm text-white placeholder-body/50 outline-none transition-colors focus:border-mint"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="mt-1.5 text-xs text-red-400/90"
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? 'Sending…' : 'Send Message'}
            </button>
            {/* Top-level failure (network / server error) — fields are left intact. */}
            {state.errors && state.errors.getFormErrors().length > 0 && (
              <p className="text-sm text-red-400">
                Something went wrong — please email me directly instead.
              </p>
            )}
          </form>
        )}
      </div>
    </motion.section>
  )
}
