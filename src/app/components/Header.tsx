'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { products } from '../data/products';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        marginLeft: scrolled ? '60%' : '0%',
        width: scrolled ? '40%' : '100%',
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={clsx(
        'sticky top-0 z-50 transition-all duration-300',
        'bg-zinc-950 border-b border-amber-600 text-white',
        scrolled ? 'py-2 shadow-md rounded-l-full' : 'py-4 rounded-none'
      )}
    >
      <div className="flex items-center justify-between px-6 transition-all duration-300">
        {/* oLabs - Fixed width, animates position */}
        <motion.div
          animate={{
            x: scrolled ? 0 : 0,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="w-36 flex-shrink-0" // keep space reserved
        >
          <Link
            href="/"
            className="relative font-extrabold text-2xl sm:text-3xl tracking-tight font-sansation group text-orange-500"
          >
            <motion.span
              animate={{ scale: scrolled ? 0.85 : 1 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 inline-block origin-left"
            >
              oLabs
            </motion.span>
            <span
              className="absolute inset-0 text-orange-500 blur-sm opacity-30 group-hover:opacity-60 animate-glow"
              aria-hidden="true"
            >
              oLabs
            </span>
          </Link>
        </motion.div>

        {/* Desktop Nav Links - Always on right */}
        <nav className="hidden md:flex items-center gap-6">
          {products.map((link) => (
            <Link
              key={link.slug}
              href={link.href}
              className={clsx(
                'hover:text-orange-400 transition-colors',
                pathname === link.href ? 'text-orange-500 font-semibold' : 'text-zinc-300'
              )}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle - Always far right */}
        <div className="ml-4 md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-zinc-300 hover:text-orange-500 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
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
              {products.map((link) => (
                <Link
                  key={link.slug}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'block py-2 text-right text-lg',
                    pathname === link.href ? 'text-orange-500 font-semibold' : 'text-zinc-300'
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {!scrolled && (
        <div className="absolute bottom-0 left-0 w-full h-[3px] animated-border rounded-full" />
      )}
    </motion.header>
  );
}
