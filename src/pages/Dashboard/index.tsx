import React from 'react';

import { Container } from './styles';

import Sidebar from '../../components/SideBar';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Sidebar />
    </Container>
  );
};

export default Dashboard;
