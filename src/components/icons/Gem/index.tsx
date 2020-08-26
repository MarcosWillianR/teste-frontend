import React from 'react';
import { LIGHT_COLOR2 } from '../../../styles/variables';

import { IconProps } from '../types';

const Gem: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
    >
      <g fill={color || LIGHT_COLOR2}>
        <path d="M 9.53125 6 L 4.21875 12.375 L 3.71875 12.96875 L 4.21875 13.625 L 15.21875 27.625 L 16 28.625 L 16.78125 27.625 L 27.78125 13.625 L 28.28125 12.96875 L 27.78125 12.375 L 22.46875 6 Z M 10.46875 8 L 14.125 8 L 11.4375 12 L 7.125 12 Z M 17.875 8 L 21.53125 8 L 24.875 12 L 20.5625 12 Z M 16 8.84375 L 18.125 12 L 13.875 12 Z M 7.03125 14 L 11.25 14 L 13.625 22.40625 Z M 13.3125 14 L 18.65625 14 L 16 23.3125 Z M 20.75 14 L 24.96875 14 L 18.375 22.375 Z" />
      </g>
    </svg>
  );
};

export default Gem;
