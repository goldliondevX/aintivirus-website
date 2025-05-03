import { FC, SVGAttributes } from 'react';

import { cn } from '@/utils/style-utils';

export interface SvgProp extends SVGAttributes<SVGElement> {
  className?: string;
}

const Svg: FC<SVGAttributes<SVGElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <svg
      className={cn('shrink-0', className)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
};

export default Svg;
