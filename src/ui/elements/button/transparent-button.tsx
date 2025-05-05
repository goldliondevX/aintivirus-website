import { FC, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/utils/style-utils';

interface TransparentCardProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const TransparentButton: FC<TransparentCardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        'bg-gray-900/50 border border-[#1f2d53] shadow-md flex items-center justify-center text-white p-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default TransparentButton;
