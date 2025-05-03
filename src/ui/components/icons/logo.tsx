import Svg, { SvgProp } from '@/ui/components/svg';
import { FC } from 'react';

const LogoIcon: FC<SvgProp> = ({ ...props }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="37"
      viewBox="0 0 32 37"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.098 0.844933L0.625626 7.98219V36.3815L16.098 29.2442L31.5329 36.3815V7.99467L16.098 0.844933ZM25.2067 12.0374V26.4991L16.1105 22.2941L6.96431 26.4991V12.0374L16.1105 7.83246L25.2067 12.0374Z"
        fill="#00D3FF"
      />
    </Svg>
  );
};

export default LogoIcon;
