import Svg, { SvgProp } from '@/ui/components/svg';
import { FC } from 'react';

const NextIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
    >
      <path
        d="M1 13L7 7L1 1"
        stroke="#00001F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default NextIcon;
