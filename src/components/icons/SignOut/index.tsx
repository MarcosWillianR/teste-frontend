import React from 'react';
import { LIGHT_COLOR2 } from '../../../styles/variables';

import { IconProps } from '../types';

const SignOut: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
    >
      <g fill={color || LIGHT_COLOR2}>
        <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 20.050781 28 23.640625 25.988281 25.8125 22.90625 L 24.1875 21.75 C 22.378906 24.320313 19.390625 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 C 19.390625 6 22.375 7.679688 24.1875 10.25 L 25.8125 9.09375 C 23.640625 6.011719 20.050781 4 16 4 Z M 23.34375 11.28125 L 21.90625 12.71875 L 24.1875 15 L 12 15 L 12 17 L 24.1875 17 L 21.90625 19.28125 L 23.34375 20.71875 L 27.34375 16.71875 L 28.03125 16 L 27.34375 15.28125 Z" />
      </g>
    </svg>
  );
};

export default SignOut;
