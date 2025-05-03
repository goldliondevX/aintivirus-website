import { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/style-utils';

interface TransparentCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const TransparentCard: FC<TransparentCardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
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
