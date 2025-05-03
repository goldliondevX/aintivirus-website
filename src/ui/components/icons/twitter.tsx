import { FC } from 'react';

import Svg, { SvgProp } from '@/ui/components/svg';

const TwitterIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      {...props}
    >
      <path
        d="M1 21.4856L9.38711 13.0985M9.38711 13.0985L1 1.4856H6.55556L12.6129 9.87271M9.38711 13.0985L15.4444 21.4856H21L12.6129 9.87271M21 1.4856L12.6129 9.87271"
        stroke="white"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default TwitterIcon;
