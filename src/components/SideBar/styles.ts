import styled from 'styled-components';
import {
  DARK_COLOR1,
  GRADIENT1,
  MAIN_COLOR,
  LIGHT_COLOR1,
} from '../../styles/variables';

interface SidebarButtonProps {
  active: boolean;
}

export const Container = styled.aside`
  width: 71px;
  height: 100vh;
  min-height: 760px;
  background-color: ${DARK_COLOR1};
  position: relative;

  padding: 33px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:before,
  &:after {
    content: '';
    left: 0;
    position: absolute;
    width: 71px;
    height: 3px;
    background: ${GRADIENT1};
  }

  &:after {
    bottom: 0;
  }

  &:before {
    top: 0;
  }

  > img {
    width: 52px;
    height: 30px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;

    &:first-of-type {
      margin-top: 60px;
      margin-bottom: auto;

      button:last-of-type {
        display: flex;
        align-items: center;
        flex-direction: column;

        &:before {
          content: '';
          display: block;
          margin-bottom: 32px;
          width: 21px;
          height: 1px;
          background: ${GRADIENT1};
        }
      }
    }
  }
`;

export const SidebarButton = styled.button<SidebarButtonProps>`
  width: 100%;
  border: 0;
  background: 0;
  margin-bottom: 16px;
  padding: 8px 0;

  svg {
    g {
      transition: fill 0.5s;
      fill: ${props => (props.active ? MAIN_COLOR : LIGHT_COLOR1)};
    }
  }

  &:hover {
    svg {
      g {
        fill: ${MAIN_COLOR};
      }
    }
  }
`;
