'use client';
import { FC, useEffect, useState } from 'react';
import { cn } from '@/utils/style-utils';
import Image from 'next/image';
import useMobile from "@/hooks/use-mobile";

const VISIBLE_COUNT = 5;

interface CarouselProps {
  images: string[];
  visibleCount?: number;
  className?: string;
}

const Carousel: FC<CarouselProps> = ({
  images,
  visibleCount = VISIBLE_COUNT,
  className,
}) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const handleImageClick = (index: number) => {
    setCurrent(index);
  };

  const { isMobile } = useMobile();

  const maxOffset = Math.floor(visibleCount / 2);

  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center py-6 overflow-hidden',
        className
      )}
    >
      <div className="relative w-full h-full">
        {images.map((src, i) => {
          let offset = i - current;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const absOffset = Math.abs(offset);

          if (absOffset > maxOffset) return null;

          const zIndex = 20 - absOffset;
          const opacity = 1 - absOffset * 0.2;
          const scale = 1 - absOffset * 0.1;
          const leftOffset = offset * (isMobile ? 120 : 180);
          const topOffset = absOffset * (isMobile ? 60 : 130);

          return (
            <div
              key={i}
              onClick={() => handleImageClick(i)}
              className={cn(
                'transition-all duration-500 ease-in-out cursor-pointer border-2 border-transparent absolute',
                'lg:left-[32%] left-[25%]',
                offset === 0 &&
                  'bg-black p-1 lg:p-3 rounded-xl border-primary shadow-[0_0_20px_theme(colors.primary)]'
              )}
              style={{
                transform: `translateX(${leftOffset}px) translateY(${topOffset}px) scale(${scale})`,
                opacity,
                zIndex,
                transformOrigin: 'center center',
              }}
            >
              <Image
                src={src}
                alt={`NFT ${i + 1}`}
                width={380}
                height={480}
                className="rounded-xl w-40 lg:w-96 shadow-lg transition-all duration-500 hover:shadow-xl"
                priority={absOffset < 2}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
