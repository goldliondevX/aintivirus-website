import { FC } from 'react';

import Svg, { SvgProp } from '@/ui/components/svg';

const SolanaIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      {...props}
    >
      <path
        d="M8.9514 2.38022C8.8933 2.4335 8.81762 2.46351 8.7388 2.46454H1.27844C1.01359 2.46454 0.880128 2.16191 1.06325 1.98447L2.28871 0.80294C2.34565 0.747782 2.42153 0.716502 2.5008 0.715515H9.9896C10.257 0.715515 10.3879 1.02073 10.2017 1.1992L8.9514 2.38022Z"
        fill="url(#paint0_linear_55_12653)"
      />
      <path
        d="M8.9514 8.203C8.89292 8.25534 8.81728 8.28442 8.7388 8.28473H1.27844C1.01359 8.28473 0.880128 7.9847 1.06325 7.80726L2.28871 6.62262C2.34613 6.5686 2.42196 6.53845 2.5008 6.5383H9.9896C10.257 6.5383 10.3879 6.84144 10.2017 7.01836L8.9514 8.203Z"
        fill="url(#paint1_linear_55_12653)"
      />
      <path
        d="M8.9514 3.70963C8.89292 3.65729 8.81728 3.62821 8.7388 3.6279H1.27844C1.01359 3.6279 0.880128 3.92794 1.06325 4.10538L2.28871 5.29001C2.34613 5.3433 2.42165 5.37278 2.5008 5.37433H9.9896C10.257 5.37433 10.3879 5.07119 10.2017 4.89427L8.9514 3.70963Z"
        fill="url(#paint2_linear_55_12653)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_55_12653"
          x1="0.978931"
          y1="26.7656"
          x2="10.5271"
          y2="26.6777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#599DB0" />
          <stop offset="1" stopColor="#47F8C3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_55_12653"
          x1="0.978931"
          y1="3.03508"
          x2="10.466"
          y2="2.96215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C44FE2" />
          <stop offset="1" stopColor="#73B0D0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_55_12653"
          x1="1.51433"
          y1="4.50112"
          x2="9.92908"
          y2="4.50112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#778CBF" />
          <stop offset="1" stopColor="#5DCDC9" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default SolanaIcon;
