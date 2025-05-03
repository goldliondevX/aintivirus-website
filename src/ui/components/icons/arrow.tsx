import Svg, { SvgProp } from '@/ui/components/svg';
import { FC } from 'react';

export const ArrowRightIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        d="M17.6454 10H4.31207"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4789 14.1666C13.4789 14.1666 17.6455 11.098 17.6455 9.99998C17.6455 8.90198 13.4788 5.83331 13.4788 5.83331"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
