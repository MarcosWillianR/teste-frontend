import React, { useEffect, useState, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';

import SideBar from '../../components/SideBar';
import { Button, InputSearch } from '../../components/Form';

import ACMElogo from '../../assets/images/acme-logo.png';

import { getInitialsName } from '../../helpers';

import api from '../../services/apiClient';

import Icon from '../../helpers/getIconByFilterName';

import {
  Container,
  MainContainer,
  Header,
  ProfileContainer,
  Avatar,
  SearchContainer,
  MainContent,
  MainContentFilter,
  MainContentFilterList,
  MainContentFilterListItem,
} from './styles';

interface FiltersItem {
  id: number;
  name: string;
  quantity: number;
}

const Dashboard: React.FC = () => {
  const [filterItems, setFilterItems] = useState<FiltersItem[]>([]);
  const [filteredItemActive, setFilteredItemActive] = useState(0);

  useEffect(() => {
    api.get('filter').then(response => {
      setFilterItems(response.data);
    });
  }, []);

  const handleGetFilteredContent = useCallback((itemId: number) => {
    setFilteredItemActive(itemId);
  }, []);

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

        <MainContent>
          <MainContentFilter>
            <h3>Jornadas</h3>

            <MainContentFilterList>
              {filterItems.length > 0 &&
                filterItems.map(item => {
                  return (
                    <MainContentFilterListItem
                      active={filteredItemActive === item.id}
                      key={item.id}
                    >
                      <Icon filterName={item.name} />
                      <button
                        onClick={() => handleGetFilteredContent(item.id)}
                        type="button"
                      >
                        {item.name}
                      </button>
                      <span>{item.quantity}</span>
                    </MainContentFilterListItem>
                  );
                })}
            </MainContentFilterList>
          </MainContentFilter>

          {/* <MainList /> */}
        </MainContent>
      </MainContainer>
    </Container>
  );
};

export default Dashboard;
