'use client';

import clsx from 'clsx';

type QuoteBubbleProps = {
  text: string;
  borderColor?: string;
  fillColor?: string;
  className?: string;
};

export default function QuoteBubble({
  text,
  borderColor = 'border-orange-400',
  fillColor = 'bg-zinc-800/90',
  className = '',
}: QuoteBubbleProps) {
  return (
    <div
      className={clsx(
        'relative max-w-sm p-4 rounded-xl border text-white shadow-xl overflow-hidden',
        borderColor,
        fillColor,
        className
      )}
    >
      {/* Quote text */}
      <p className="text-2xl relative z-10">{text}</p>

      {/* Shimmer sheen */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="animate-shimmer-delay absolute top-0 left-[-150%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>
    </div>
  );
}
