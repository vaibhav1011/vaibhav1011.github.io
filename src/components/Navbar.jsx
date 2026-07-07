import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { NAV_LINKS } from '../data'
import useScrollSpy from '../hooks/useScrollSpy'

const ids = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useScrollSpy(ids)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">
          VS<span className="text-mint">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`group relative text-sm font-medium transition-colors ${
                  active === link.id ? 'text-mint' : 'text-body hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-mint transition-all duration-300 ${
                    active === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-ink px-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="border-b border-white/5 last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-sm font-medium ${
                    active === link.id ? 'text-mint' : 'text-body'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
