'use client';

import clsx from 'clsx';
import QuoteBubble from './QuoteBubble';

type FeatureRowProps = {
  body?: string;
  bodySegments?: string[];
  image?: React.ReactNode;
  quoteText?: string;
  reverse?: boolean;
};

export default function FeatureRow({
  body,
  bodySegments,
  image,
  quoteText,
  reverse = false,
}: FeatureRowProps) {
  const hasImage = !!image;
  const hasQuote = !!quoteText;
  const hasBothSides = hasImage && hasQuote;

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
      {/* Left Side: Image or Quote */}
      {hasImage && <div className="w-full sm:w-1/4 flex justify-center">{image}</div>}

      {hasQuote && !hasImage && reverse && (
        <div className="w-full sm:w-1/4 flex justify-center">
          <QuoteBubble text={quoteText} borderColor="border-cyan-400" fillColor="bg-cyan-900/80" />
        </div>
      )}

      {/* Text */}
      <div className="w-full sm:w-1/2 text-center sm:text-left max-w-prose">
        {bodySegments ? (
          bodySegments.map((segment, i) => (
            <p key={i} className="text-white mb-4 last:mb-0">
              {segment}
            </p>
          ))
        ) : (
          <p className="text-white">{body}</p>
        )}
      </div>

      {/* Right Side: Quote */}
      {hasQuote && (hasImage || !reverse) && (
        <div className="w-full sm:w-1/4 flex justify-center">
          <QuoteBubble text={quoteText} borderColor="border-cyan-400" fillColor="bg-cyan-900/80" />
        </div>
      )}
    </div>
  );
}
