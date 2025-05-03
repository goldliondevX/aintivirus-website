import { FC } from 'react';

import Svg, { SvgProp } from '@/ui/components/svg';

const YoutubeIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="23"
      viewBox="0 0 32 23"
      fill="none"
      {...props}
    >
      <path
        d="M18.8 11.4255L13.9 14.2255V8.62549L18.8 11.4255Z"
        fill="#DBDCDE"
        stroke="#DBDCDE"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12.4168V10.4344C2 6.3814 2 4.3542 3.267 3.0508C4.5354 1.746 6.5318 1.69 10.5232 1.5766C12.4132 1.5234 14.3452 1.4856 16 1.4856C17.6548 1.4856 19.5854 1.5234 21.4768 1.5766C25.4682 1.69 27.4646 1.746 28.7316 3.0508C29.9986 4.3556 30 6.3828 30 10.4344V12.4154C30 16.4698 30 18.4956 28.733 19.8004C27.4646 21.1038 25.4696 21.1612 21.4768 21.2732C19.5868 21.3278 17.6548 21.3656 16 21.3656C14.3452 21.3656 12.4146 21.3278 10.5232 21.2732C6.5318 21.1612 4.5354 21.1052 3.267 19.8004C1.9986 18.4956 2 16.4684 2 12.4168Z"
        stroke="#DBDCDE"
        strokeWidth="2.1"
      />
    </Svg>
  );
};

export default YoutubeIcon;
