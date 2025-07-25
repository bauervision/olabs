'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';

export type Product = {
  title: string;
  slug: string;
  description: string;
  image: string;
  imagePosition?: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const { scrollYProgress } = useScroll({
    target: isClient ? ref : undefined,
    offset: ['start end', 'end start'],
  });

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 1, 0.15]), {
    stiffness: 80,
    damping: 20,
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]), {
    stiffness: 100,
    damping: 18,
  });

  // Initial tilt based on direction
  const initialX = 0.5;
  const initialY = 0.5;

  // Initial neutral position
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Springs
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), {
    stiffness: 100,
    damping: 10,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), {
    stiffness: 100,
    damping: 10,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const xPos = (e.clientX - bounds.left) / bounds.width;
    const yPos = (e.clientY - bounds.top) / bounds.height;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(initialX);
    y.set(initialY);
  };

  return (
    <Link href={`/${product.slug}/`}>
      <motion.div
        ref={ref}
        style={{
          opacity,
          scale,
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-zinc-800/60 border-4 border-zinc-800 rounded-xl overflow-hidden shadow-md backdrop-blur-sm transition-transform"
      >
        {/* Glow border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-500 group-hover:shadow-[0_0_25px_rgba(255,125,0,0.5)] z-10 pointer-events-none transition-all duration-300" />

        {/* Shimmer effect */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Card content */}
        <div className="relative w-full h-48 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            style={{
              objectPosition: product.imagePosition || 'center',
            }}
          />
        </div>

        <div className="p-4 ">
          <div className="text-3xl">
            <span
              className="relative z-10 inset-0 text-orange-400 opacity-0 group-hover:opacity-100 animate-glitch pointer-events-none"
              aria-hidden="true"
            >
              {product.title}
            </span>
          </div>

          <p className="text-sm text-gray-400 mt-2">{product.description}</p>
        </div>
      </motion.div>
    </Link>
  );
}
