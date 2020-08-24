import styled, { css } from 'styled-components';
import {
  LIGHT_COLOR1,
  LIGHT_COLOR2,
  MAIN_COLOR,
  FONT_SIZE_10,
  FONT_SIZE_13,
  FONT_SIZE_16,
  DARK_COLOR2,
  DARK_COLOR3,
} from '../../styles/variables';

interface AvatarImageProps {
  src: string | null;
}

interface MainContentListItemProps {
  active: boolean;
}

export const Container = styled.main`
  width: 100%;

  display: flex;
`;

export const MainContainer = styled.div`
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

export const MainContent = styled.main`
  padding: 0 90px;
  margin-top: 60px;
`;

export const MainContentFilter = styled.div`
  width: 100%;
  max-width: 150px;

  h3 {
    font-size: ${FONT_SIZE_16};
    color: ${DARK_COLOR2};
    font-family: 'Gotham-Bold', serif;

    margin-bottom: 35px;
  }
`;

export const MainContentFilterList = styled.ul`
  list-style: none;
`;

export const MainContentFilterListItem = styled.li<MainContentListItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 4px;

  &:hover {
    button {
      color: ${MAIN_COLOR};
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${props => (props.active ? MAIN_COLOR : LIGHT_COLOR1)};
    color: ${props => (props.active ? LIGHT_COLOR2 : DARK_COLOR3)};

    font-size: ${FONT_SIZE_10};

    width: 22px;
    height: 22px;
    border-radius: 50%;
  }

  button {
    flex: 1;
    color: ${props => (props.active ? MAIN_COLOR : DARK_COLOR2)};
    font-family: 'Gotham-Book';
    font-size: ${FONT_SIZE_13};
    text-align: left;

    margin: 0 8px;

    border: 0;
    background: 0;
    padding: 8px 0;
  }
`;
