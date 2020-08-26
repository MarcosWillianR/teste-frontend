import React, { useState } from 'react';

import {
  ChartPie,
  CCMCloud,
  ExchangeAlt,
  ExternalLinkSolid,
  Gem,
  Rocket,
  SignOut,
  Tools,
  UserFriends,
} from '../icons';

import { Container, SidebarButton } from './styles';

import logo from '../../assets/images/logotipo-branco.png';

const Sidebar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  return (
    <Container>
      <img src={logo} alt="D1 - Better Journey's" />

      <div>
        <SidebarButton
          type="button"
          onClick={() => setActiveButton(1)}
          active={activeButton === 1}
        >
          <ChartPie size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(2)}
          active={activeButton === 2}
        >
          <Rocket size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(3)}
          active={activeButton === 3}
        >
          <UserFriends size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(4)}
          active={activeButton === 4}
        >
          <CCMCloud size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(5)}
          active={activeButton === 5}
        >
          <ExternalLinkSolid size={22} />
        </SidebarButton>
      </div>

      <div>
        <SidebarButton
          type="button"
          onClick={() => setActiveButton(6)}
          active={activeButton === 6}
        >
          <Gem size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(7)}
          active={activeButton === 7}
        >
          <Tools size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(8)}
          active={activeButton === 8}
        >
          <ExchangeAlt size={22} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(9)}
          active={activeButton === 9}
        >
          <SignOut size={22} />
        </SidebarButton>
      </div>
    </Container>
  );
};

export default Sidebar;
