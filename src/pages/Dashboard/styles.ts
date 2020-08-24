import styled, { css } from 'styled-components';
import { LIGHT_COLOR2, MAIN_COLOR, FONT_SIZE_16 } from '../../styles/variables';

interface AvatarImageProps {
  src: string | null;
}

export const Container = styled.main`
  width: 100%;

  display: flex;
`;

export const MainContainer = styled.main`
  flex: 1;
`;

export const Header = styled.header`
  height: 90px;
  padding: 0 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 66px;
    height: 26px;
  }
`;

export const Avatar = styled.div<AvatarImageProps>`
  width: 32px;
  height: 32px;
  margin-right: 28px;

  ${props =>
    props.src
      ? css`
          background: url(${props.src}) no-repeat 50% 50%;
          background-size: cover;

          color: transparent;
        `
      : css`
          background: ${MAIN_COLOR};
          color: ${LIGHT_COLOR2};
          font-family: 'Gotham-Bold', serif;
          font-size: ${FONT_SIZE_16};
        `}

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    margin-left: 15px;
  }
`;
