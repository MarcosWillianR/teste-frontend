import React from 'react';
import { filterIconColors } from '../../../styles/variables';

import { IconProps } from '../types';

const Table: React.FC<IconProps> = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
    >
      <g fill={color || filterIconColors.todos}>
        <path d="M 5 5 L 5 27 L 27 27 L 27 5 Z M 7 7 L 12 7 L 12 12 L 7 12 Z M 14 7 L 18 7 L 18 12 L 14 12 Z M 20 7 L 25 7 L 25 12 L 20 12 Z M 7 14 L 12 14 L 12 18 L 7 18 Z M 14 14 L 18 14 L 18 18 L 14 18 Z M 20 14 L 25 14 L 25 18 L 20 18 Z M 7 20 L 12 20 L 12 25 L 7 25 Z M 14 20 L 18 20 L 18 25 L 14 25 Z M 20 20 L 25 20 L 25 25 L 20 25 Z" />
      </g>
    </svg>
  );
};

export default Table;
