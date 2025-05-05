import { FC, HTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

import { cn } from '@/utils/style-utils';

interface TransparentCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  href?: string;
  className?: string;
}

const TransparentCard: FC<TransparentCardProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  return href ? (
    <Link href={href}>
      <div
        className={cn(
          'bg-gray-900/50 border border-[#1f2d53] shadow-md  p-4 text-white',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </Link>
  ) : (
    <div
      className={cn(
        'bg-gray-900/50 border border-[#1f2d53] shadow-md  p-4 text-white',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default TransparentCard;
