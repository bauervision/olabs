'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type QuoteBubbleProps = {
  text: string;
  borderColor?: string;
  fillColor?: string;
  className?: string;
  popupContent?: React.ReactNode;
};

export default function QuoteBubble({
  text,
  borderColor = 'border-orange-400',
  fillColor = 'bg-zinc-800/90',
  className = '',
  popupContent,
}: QuoteBubbleProps) {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Allow Esc key to close popup
  useEffect(() => {
    setIsMounted(true); // ensure DOM is ready for portal
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    if (open) document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const modal = open && (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-zinc-900 text-black dark:text-white rounded-2xl p-6 max-w-lg w-full shadow-2xl animate-fade-in border border-amber-600"
      >
        {popupContent}
        <div className="mt-4 text-right">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 rounded bg-orange-500 hover:bg-orange-600 text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        onClick={() => popupContent && setOpen(true)}
        className={clsx(
          'relative max-w-sm p-4 rounded-xl border text-white shadow-xl overflow-hidden cursor-pointer',
          borderColor,
          fillColor,
          className
        )}
      >
        <p className="text-2xl relative z-10">{text}</p>

        {/* Shimmer effect */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="animate-shimmer-delay absolute top-0 left-[-150%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {isMounted && popupContent && createPortal(modal, document.body)}
    </>
  );
}
