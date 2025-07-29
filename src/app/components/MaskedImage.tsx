'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type MaskedImageProps = {
  src: string;
  alt: string;
  circle?: boolean;
  fill?: boolean;
  zoom?: number;
  positionX?: string;
  positionY?: string;
  opacity?: number | string;
  width?: number | string; // e.g. 200 or '100%'
  height?: number | string; // optional
  shadow?: boolean;
  className?: string;
};

export default function MaskedImage({
  src,
  alt,
  circle = false,
  fill = false,
  zoom = 1.0,
  positionX = 'center',
  positionY = '100%',
  opacity = 1,
  width = 192,
  height,
  shadow,
  className = '',
}: MaskedImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [autoHeight, setAutoHeight] = useState<number | null>(null);

  const translate = {
    top: 'translate-y-0',
    center: '-translate-y-1/2',
    bottom: '-translate-y-full',
    left: 'translate-x-0',
    right: '-translate-x-full',
  };

  const translateX = translate[positionX as keyof typeof translate] || '-translate-x-1/2';
  const translateY = translate[positionY as keyof typeof translate] || '-translate-y-1/2';

  const parsedOpacity =
    typeof opacity === 'string' && opacity.includes('%')
      ? parseFloat(opacity) / 100
      : typeof opacity === 'number'
        ? opacity
        : 1;

  const parsedWidth = typeof width === 'number' ? width : parseInt(width);
  const parsedHeight =
    height !== undefined ? (typeof height === 'number' ? height : parseInt(height)) : autoHeight;

  const containerStyles: React.CSSProperties = {
    width: '100%',
    maxWidth: typeof width === 'number' ? `${parsedWidth}px` : width,
    height: circle
      ? typeof width === 'number'
        ? `${parsedWidth}px`
        : width
      : parsedHeight
        ? `${parsedHeight}px`
        : 'auto',
    flexShrink: 0,
  };

  // Auto-detect height based on image natural size
  useEffect(() => {
    const img = imgRef.current;
    if (img && !height && !circle) {
      const onLoad = () => {
        const aspect = img.naturalHeight / img.naturalWidth;
        setAutoHeight(parsedWidth * aspect);
      };

      if (img.complete) {
        onLoad();
      } else {
        img.addEventListener('load', onLoad);
        return () => img.removeEventListener('load', onLoad);
      }
    }
  }, [parsedWidth, height, circle]);

  return (
    <div
      className={clsx(
        'relative overflow-hidden',
        shadow !== false && 'shadow-xl',
        circle ? 'rounded-full' : 'rounded-lg',
        className
      )}
      style={containerStyles}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={clsx(
          zoom !== 1 ? 'object-cover absolute' : 'object-contain',
          !fill && 'transition-transform',
          zoom !== 1 && translateX,
          zoom !== 1 && translateY
        )}
        style={{
          width: '100%',
          height: '100%',
          ...(zoom !== 1 && {
            top: positionY,
            left: positionX,
            transform: `scale(${zoom})`,
          }),
          opacity: parsedOpacity,
        }}
      />
    </div>
  );
}
