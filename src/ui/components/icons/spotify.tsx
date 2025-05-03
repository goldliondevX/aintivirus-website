import { FC } from 'react';

import Svg, { SvgProp } from '@/ui/components/svg';

const SpotifyIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="31"
      viewBox="0 0 32 31"
      fill="none"
      {...props}
    >
      <path
        d="M16 29.4856C23.732 29.4856 30 23.2176 30 15.4856C30 7.75361 23.732 1.4856 16 1.4856C8.26801 1.4856 2 7.75361 2 15.4856C2 23.2176 8.26801 29.4856 16 29.4856Z"
        stroke="#DBDCDE"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7 15.5823C11.24 15.0643 12.8864 14.7857 14.6 14.7857C17.4336 14.7857 20.088 15.5515 22.3686 16.8857M24.4 12.6857C21.81 10.9189 18.6768 9.88574 15.3 9.88574C13.0642 9.88574 10.9348 10.3393 9 11.1569M20.3806 21.0857C17.5742 19.6434 14.3303 19.3014 11.2848 20.1267"
        stroke="#DBDCDE"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SpotifyIcon;
