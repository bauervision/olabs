import clsx from 'clsx';

type MaskedImageProps = {
  src: string;
  alt: string;
  circle?: boolean;
  fill?: boolean;
  zoom?: number; // scale factor (1.0 = normal, 2.0 = 200%)
  positionX?: string; // e.g. 'center', '20%', 'left'
  positionY?: string; // e.g. 'center', '80%', 'top'
  className?: string;
};

export default function MaskedImage({
  src,
  alt,
  circle = false,
  fill = false,
  zoom = 2.0,
  positionX = 'center',
  positionY = '100%',
  className = '',
}: MaskedImageProps) {
  const translate = {
    top: 'translate-y-0',
    center: '-translate-y-1/2',
    bottom: '-translate-y-full',
    left: 'translate-x-0',
    right: '-translate-x-full',
  };

  const translateX = translate[positionX as keyof typeof translate] || '-translate-x-1/2';
  const translateY = translate[positionY as keyof typeof translate] || '-translate-y-1/2';

  return (
    <div
      className={clsx(
        'relative overflow-hidden shadow-xl w-48 h-48 aspect-square',
        circle ? 'rounded-full' : 'rounded-lg',
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        className={clsx(
          'object-cover absolute',
          !fill && 'transition-transform',
          translateX,
          translateY
        )}
        style={{
          width: `${zoom * 100}%`,
          height: `${zoom * 100}%`,
          left: positionX,
          top: positionY,
        }}
      />
    </div>
  );
}
