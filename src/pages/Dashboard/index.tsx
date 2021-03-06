import React, { useEffect, useState, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';
import { SkeletonTheme } from 'react-loading-skeleton';

import SideBar from '../../components/SideBar';
import NewJourneyModal from '../../components/NewJourneyModal';
import { Button, InputSearch } from '../../components/form';

import ACMElogo from '../../assets/images/acme-logo.png';

import { getInitialsName } from '../../helpers';
import { getListItemStatusName } from '../../helpers/constants';

import api from '../../services/apiClient';

import Icon from '../../helpers/getIconByFilterNameOrStatus';

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
  MainList,
  MainListItem,
  Loading,
} from './styles';
import { Plus } from '../../components/icons';

interface FiltersItem {
  id: number;
  name: string;
  quantity: number;
}

interface ListItem {
  id: string;
  name: string;
  recipients: string;
  status: number;
  success: string;
}

const Dashboard: React.FC = () => {
  const [filterItems, setFilterItems] = useState<FiltersItem[]>([]);

  const [filteredItemActive, setFilteredItemActive] = useState(0);

  const [list, setList] = useState<ListItem[]>([]);
  const [isListLoading, setIsListLoading] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    api.get('filter').then(response => {
      setFilterItems(response.data);
    });

    api.get('journey').then(listResponse => setList(listResponse.data));
  }, []);

  const handleGetFilteredContent = useCallback(async (itemId: number) => {
    setFilteredItemActive(itemId);

    setIsListLoading(true);
    const path = itemId === 0 ? 'journey' : `journey/${itemId}`;

    const response = await api.get(path);

    setList(response.data);

    setIsListLoading(false);
  }, []);

  const handleToggleNewJourneyModal = useCallback(() => {
    setIsModalActive(state => !state);
  }, []);

  return (
    <SkeletonTheme color="#117eff" highlightColor="#00e1ff">
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
              <Button
                data-testid="journey-modal-button"
                onClick={handleToggleNewJourneyModal}
              >
                <Plus size={20} color="#fff" />
                Nova Jornada
              </Button>
            </SearchContainer>
          </Header>

          <MainContent>
            <MainContentFilter>
              <h3>Jornadas</h3>

              <MainContentFilterList data-testid="filter-items">
                {filterItems.length > 0 ? (
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
                  })
                ) : (
                  <Loading count={6} height={24} />
                )}
              </MainContentFilterList>
            </MainContentFilter>

            <MainList>
              <strong>Nome</strong>
              <strong>Destinatários</strong>
              <strong>Sucesso</strong>
              <strong>Status</strong>

              {!isListLoading && list.length > 0 ? (
                list.map(item => {
                  return (
                    <MainListItem key={item.id}>
                      <span>{item.name}</span>
                      <span>{item.recipients}</span>
                      <span>{item.success}</span>
                      <span className="status_text">
                        <Icon filterName={item.status} />
                        {getListItemStatusName(item.status)}
                      </span>
                    </MainListItem>
                  );
                })
              ) : (
                <>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(key => (
                    <Loading key={key} count={1} height={35} />
                  ))}
                </>
              )}
            </MainList>
          </MainContent>
        </MainContainer>
      </Container>

      <NewJourneyModal
        active={isModalActive}
        handleToggleModal={handleToggleNewJourneyModal}
      />
    </SkeletonTheme>
  );
};

export default Dashboard;
