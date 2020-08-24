import React from 'react';
import { FiPlus } from 'react-icons/fi';

import SideBar from '../../components/SideBar';
import { Button, InputSearch } from '../../components/Form';

import ACMElogo from '../../assets/images/acme-logo.png';

import { getInitialsName } from '../../helpers';

import {
  Container,
  MainContainer,
  Header,
  ProfileContainer,
  Avatar,
  SearchContainer,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <SideBar />

      <MainContainer>
        <Header>
          <ProfileContainer>
            <Avatar src={null}>{getInitialsName('André')}</Avatar>

            <img src={ACMElogo} alt="ACME - Logo" />
          </ProfileContainer>

          <SearchContainer>
            <InputSearch />
            <Button icon={FiPlus}>Nova Jornada</Button>
          </SearchContainer>
        </Header>
      </MainContainer>
    </Container>
  );
};

export default Dashboard;
