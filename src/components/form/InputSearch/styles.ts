import styled from 'styled-components';
import {
  LIGHT_COLOR3,
  MAIN_COLOR,
  FONT_SIZE_14,
} from '../../../styles/variables';

interface ContainerProps {
  isContainerFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  height: 35px;
  max-width: 100%;

  display: flex;
  align-items: center;

  border: 1px solid ${LIGHT_COLOR3};
  border-radius: 5px;

  svg {
    margin: 0 10px;
    width: 14px;
    height: 14px;
    color: ${MAIN_COLOR};
  }

  &:hover {
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.3);
  }

  ${props =>
    props.isContainerFocused &&
    `
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.3);
  `}

  input {
    border-radius: 5px;
    font-size: ${FONT_SIZE_14};
    width: 296px;
    height: 100%;
    padding: 8px 22px 8px 0;
    border: 0;
  }
`;
