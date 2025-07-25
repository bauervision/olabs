'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import clsx from 'clsx';

type Props = {
  topLeftAngle?: number;
  topRightAngle?: number;
  bottomLeftAngle?: number;
  bottomRightAngle?: number;
  bgColor?: string;
  background?: string; // new
  contentPosition?: 'left' | 'center' | 'right';
  children: React.ReactNode;
};

export default function MaskedSection({
  topLeftAngle = 0,
  topRightAngle = 0,
  bottomLeftAngle = 0,
  bottomRightAngle = 0,
  bgColor = 'bg-zinc-900/80',
  background,
  contentPosition = 'center',
  children,
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const alignment = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  return (
    <section
      ref={ref}
      className={clsx(
        'w-full py-24 px-6 sm:px-12 overflow-hidden',
        !background && bgColor,
        'relative flex justify-center',
        alignment[contentPosition]
      )}
      style={{
        clipPath: `polygon(
          0% ${topLeftAngle}px,
          100% ${topRightAngle}px,
          100% calc(100% - ${bottomRightAngle}px),
          0% calc(100% - ${bottomLeftAngle}px)
        )`,
        backgroundImage: background ? `url(${background})` : undefined,
        backgroundSize: background ? 'cover' : undefined,
        backgroundPosition: background ? 'center' : undefined,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-screen-xl px-4 sm:px-8 lg:px-12 xl:px-16"
      >
        {children}
      </motion.div>
    </section>
  );
}
