import React from 'react';
import { filterIconColors } from '../../../styles/variables';

import { IconProps } from '../types';

const Plus: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
    >
      <g fill={color || filterIconColors.concluida}>
        <path d="M 15 5 L 15 15 L 5 15 L 5 17 L 15 17 L 15 27 L 17 27 L 17 17 L 27 17 L 27 15 L 17 15 L 17 5 Z" />
      </g>
    </svg>
  );
};

export default Plus;
