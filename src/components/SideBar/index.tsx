import React, { useState } from 'react';
import {
  FiPieChart,
  FiSend,
  FiUsers,
  FiFileText,
  FiExternalLink,
  FiStar,
  FiSettings,
  FiPower,
  FiRepeat,
} from 'react-icons/fi';

import { Container, SidebarButton } from './styles';

import logo from '../../assets/images/logotipo.png';

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
          <FiPieChart size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(2)}
          active={activeButton === 2}
        >
          <FiSend size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(3)}
          active={activeButton === 3}
        >
          <FiUsers size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(4)}
          active={activeButton === 4}
        >
          <FiFileText size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(5)}
          active={activeButton === 5}
        >
          <FiExternalLink size={18} />
        </SidebarButton>
      </div>

      <div>
        <SidebarButton
          type="button"
          onClick={() => setActiveButton(6)}
          active={activeButton === 6}
        >
          <FiStar size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(7)}
          active={activeButton === 7}
        >
          <FiSettings size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(8)}
          active={activeButton === 8}
        >
          <FiRepeat size={18} />
        </SidebarButton>

        <SidebarButton
          type="button"
          onClick={() => setActiveButton(9)}
          active={activeButton === 9}
        >
          <FiPower size={18} />
        </SidebarButton>
      </div>
    </Container>
  );
};

export default Sidebar;
