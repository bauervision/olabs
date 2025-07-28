'use client';

import clsx from 'clsx';
import QuoteBubble from './QuoteBubble';

type FeatureRowProps = {
  body?: string;
  bodySegments?: string[];
  image?: React.ReactNode;
  quoteText?: string;
  reverse?: boolean;
  children?: React.ReactNode; // NEW
};

export default function FeatureRow({
  body,
  bodySegments,
  image,
  quoteText,
  reverse = false,
  children,
}: FeatureRowProps) {
  const hasImage = !!image;
  const hasQuote = !!quoteText;
  const hasBothSides = hasImage && (hasQuote || children);
  const flexDirection = reverse ? 'flex-col-reverse sm:flex-row-reverse' : 'flex-col sm:flex-row';

  return (
    <div
      className={clsx(
        'w-full flex',
        flexDirection,
        'items-center gap-8',
        hasBothSides ? 'justify-between' : 'justify-center'
      )}
    >
      {/* Left Side: Image (if present) */}
      {hasImage && <div className="w-full sm:w-1/4 flex justify-center">{image}</div>}

      {/* Center: Text or children */}
      <div className="w-full sm:w-1/2 text-center sm:text-left max-w-prose">
        {children ? (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {children}
          </div>
        ) : bodySegments ? (
          bodySegments.map((segment, i) => (
            <p key={i} className="text-white mb-4 last:mb-0">
              {segment}
            </p>
          ))
        ) : body ? (
          <p className="text-white">{body}</p>
        ) : null}
      </div>

      {/* Right Side: Quote (if not using children) */}
      {!children && hasQuote && (
        <div className="w-full sm:w-1/4 flex justify-center">
          <QuoteBubble text={quoteText} borderColor="border-cyan-400" fillColor="bg-cyan-900/80" />
        </div>
      )}
    </div>
  );
}
