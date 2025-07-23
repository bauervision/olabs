'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'CX-Edge', href: '/cx-edge' },
    { name: 'Hatteras', href: '/hatteras' },
    { name: 'Semantic-Edge', href: '/semantic-edge' },
    { name: 'Sentinel', href: '/sentinel' },
    { name: 'Mixed Reality', href: '/mixed-reality' },
  ];

  return (
    <header className="relative bg-zinc-950 border-b border-amber-600 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link
          href="/"
          className="relative font-extrabold text-3xl tracking-tight font-sansation group text-orange-500"
        >
          <span className="relative z-10">oLabs</span>
          <span
            className="absolute inset-0 text-orange-500 blur-sm opacity-30 group-hover:opacity-60 animate-glow"
            aria-hidden="true"
          >
            oLabs
          </span>
          <span
            className="absolute inset-0 text-orange-400 opacity-0 group-hover:opacity-100 animate-glitch pointer-events-none"
            aria-hidden="true"
          >
            oLabs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'hover:text-orange-400 transition-colors',
                pathname === link.href ? 'text-orange-500 font-semibold' : 'text-zinc-300'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-zinc-300 hover:text-orange-500 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full right-4 z-40 w-48 bg-zinc-900 rounded-md shadow-lg border border-zinc-700"
          >
            <nav className="flex flex-col p-4 space-y-2 text-right">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'block py-2 text-right text-lg',
                    pathname === link.href ? 'text-orange-500 font-semibold' : 'text-zinc-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
