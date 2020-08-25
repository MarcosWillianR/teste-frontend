import styled from 'styled-components';
import { shade } from 'polished';

import {
  LIGHT_COLOR1,
  LIGHT_COLOR2,
  LIGHT_COLOR3,
  DARK_COLOR2,
  DARK_COLOR3,
  FONT_SIZE_13,
  FONT_SIZE_14,
  MAIN_COLOR,
} from '../../styles/variables';

interface ContainerProps {
  isActive: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => (props.isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  background: rgba(26, 23, 49, 0.3);

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  max-width: 380px;
  max-height: 215px;
  border-radius: 7px;

  margin-bottom: 160px;

  box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${LIGHT_COLOR1};
  background: ${LIGHT_COLOR2};

  padding: 22px 32px;

  display: flex;
  flex-direction: column;

  p,
  strong,
  span {
    color: ${DARK_COLOR2};
    font-size: ${FONT_SIZE_13};
  }

  span {
    color: ${DARK_COLOR3};
  }

  p,
  span {
    font-family: 'Gotham-Book';
  }

  strong {
    font-family: 'Gotham-Bold';
  }

  input {
    width: 100%;
    height: 35px;
    border: 1px solid ${LIGHT_COLOR3};
    border-radius: 5px;

    margin: 4px 0;

    font-size: ${FONT_SIZE_14};
    padding: 8px 12px;
  }
`;

export const Title = styled.h1`
  color: ${DARK_COLOR3};
  font-size: ${FONT_SIZE_13};
  font-family: 'Gotham-Bold';

  border-bottom: 1px solid ${LIGHT_COLOR1};
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;

  button {
    border: 0;
    background: 0;
    margin: 0 4px;
    font-size: ${FONT_SIZE_13};
    font-family: 'Gotham-Bold';
    padding: 4px 8px;

    transition: color 0.5s;

    &:first-of-type {
      color: ${MAIN_COLOR};

      &:hover {
        color: ${shade(0.2, MAIN_COLOR)};
      }
    }

    &:last-of-type {
      color: ${DARK_COLOR3};

      &:hover {
        color: ${shade(0.2, DARK_COLOR3)};
      }
    }
  }
`;
