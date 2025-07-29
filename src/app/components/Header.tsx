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
    <>
      {/* Animated Header Container */}
      <motion.header
        initial={false}
        animate={{
          marginLeft: scrolled ? '60%' : '0%',
          width: scrolled ? '40%' : '100%',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={clsx(
          'sticky top-0 z-50 transition-all duration-300 h-[60px] overflow-x-clip', // <- prevent layout bleed
          'bg-zinc-950 border-b border-blue-600 text-white py-4',
          scrolled ? ' shadow-md rounded-l-full' : ' rounded-none'
        )}
      >
        <div className="flex items-center justify-between px-6 transition-all duration-300">
          {/* oLabs - Animates with background */}
          <motion.div
            animate={{ x: scrolled ? 0 : 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-36 flex-shrink-0"
          >
            <Link
              href="/"
              className="relative font-extrabold text-2xl sm:text-3xl tracking-tight font-sansation group text-blue-500"
            >
              <motion.span
                animate={{ scale: scrolled ? 0.85 : 1 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 inline-block origin-left"
              >
                oLabs
              </motion.span>
              <span
                className="absolute inset-0 text-blue-500 blur-sm opacity-30 group-hover:opacity-60 animate-glow"
                aria-hidden="true"
              >
                oLabs
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {products.map((link) => (
              <Link
                key={link.slug}
                href={link.href}
                className={clsx(
                  'hover:text-blue-400 transition-colors',
                  pathname === link.href ? 'text-blue-500 font-semibold' : 'text-zinc-300'
                )}
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Glow Bar */}
        {!scrolled && (
          <div className="absolute bottom-0 left-0 w-full h-[3px] animated-border rounded-full" />
        )}
      </motion.header>

      {/* Hamburger Button (mobile only, pinned) */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-zinc-300 hover:text-blue-500 transition"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[60px] right-4 z-40 w-56 bg-zinc-900 rounded-md shadow-lg border border-zinc-700 md:hidden"
          >
            <nav className="flex flex-col p-4 space-y-2 text-right">
              {products.map((link) => (
                <Link
                  key={link.slug}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'block py-2 text-lg',
                    pathname === link.href ? 'text-blue-500 font-semibold' : 'text-zinc-300'
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
