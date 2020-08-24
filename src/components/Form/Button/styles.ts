import styled, { keyframes } from 'styled-components';
import { FiLoader } from 'react-icons/fi';

import { LIGHT_COLOR2, GRADIENT1 } from '../../../styles/variables';

const loadingAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.button`
  background: linear-gradient(90deg, #117eff, #117eff);

  height: 35px;
  min-width: 200px;
  width: 100%;

  border-radius: 4px;
  border: 0;

  padding: 16px;
  color: ${LIGHT_COLOR2};
  font-family: 'Gotham-Bold';
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${GRADIENT1};
  }

  svg {
    margin-right: 8px;
  }
`;

export const Loading = styled(FiLoader)`
  animation: ${loadingAnim} 2s infinite linear;
  color: #fff;
  width: 22px;
  height: 22px;
`;
