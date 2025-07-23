'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export type Product = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export default function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  // Track the scroll progress relative to viewport
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'], // when top enters bottom, and bottom leaves top
  });

  // Smooth opacity and scale based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 1], [0.95, 1, 0.95]);

  return (
    <Link href={`/${product.slug}/`}>
      <motion.div
        ref={ref}
        style={{ opacity, scale }}
        className="relative card-glow rounded-xl overflow-hidden bg-zinc-800/60 border-4 border-zinc-800 shadow-md backdrop-blur-sm transition-transform"
      >
        {/* Glow shimmer with staggered delay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            borderRadius: 'inherit',
            background:
              'linear-gradient(120deg, rgba(0, 255, 255, 0.25), rgba(255, 128, 0, 0.25), rgba(0, 255, 255, 0.25))',
            backgroundSize: '400%',
            animation: `shimmer 6s linear infinite`,
            animationDelay: `${index * 0.3}s`,
            zIndex: 0,
          }}
        />

        {/* Glow border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(255,125,0,0.5)] z-10 pointer-events-none transition-all duration-300" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Inner chroma gradient overlay */}
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-br from-white/10 via-transparent to-white/10 opacity-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-30">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{product.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{product.description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
