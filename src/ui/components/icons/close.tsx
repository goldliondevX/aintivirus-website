import Svg, { SvgProp } from '@/ui/components/svg';
import { FC } from 'react';

const CloseIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
    >
      <path
        d="M18 6.66821L6 18.6682"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6.66821L18 18.6682"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default CloseIcon;
