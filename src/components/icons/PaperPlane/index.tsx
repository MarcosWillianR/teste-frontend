import React from 'react';
import { filterIconColors } from '../../../styles/variables';

import { IconProps } from '../types';

const PaperPlane: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
    >
      <g fill={color || filterIconColors.em_execucao}>
        <path d="M 3.59375 5.34375 L 4.03125 7.21875 L 5.96875 16 L 4.03125 24.78125 L 3.59375 26.65625 L 5.375 25.9375 L 27.375 16.9375 L 29.65625 16 L 27.375 15.0625 L 5.375 6.0625 Z M 6.375 8.65625 L 21.90625 15 L 7.78125 15 Z M 7.78125 17 L 21.90625 17 L 6.375 23.34375 Z" />
      </g>
    </svg>
  );
};

export default PaperPlane;