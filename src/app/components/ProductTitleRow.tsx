'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useViewMode } from '../context/ViewModeContext';

type Props = {
  productName: string;
};

export function ProductTitleRow({ productName }: Props) {
  const { mode } = useViewMode();
  const getLabel = () => (mode === 'basic' ? 'High-Level Overview' : 'Technical Deep Dive');

  return (
    <div className="w-full flex justify-center py-8 relative overflow-hidden">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 text-center sm:text-left">
        {/* Left side: Product Name */}
        <div className="relative w-max">
          <AnimatePresence mode="wait">
            <motion.h1
              key={productName + mode} // use viewMode in key to trigger re-anim
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -150, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-cyan-400 whitespace-nowrap"
            >
              {productName}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Right side: Context Label */}
        <div className="relative w-max">
          <AnimatePresence mode="wait">
            <motion.h2
              key={mode}
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 150, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl font-semibold text-orange-400 whitespace-nowrap"
            >
              {getLabel()}
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
