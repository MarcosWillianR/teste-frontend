import React, { useCallback, MouseEvent } from 'react';

import { Container, ModalContent, Title, ModalFooter } from './styles';

interface NewJourneyModalProps {
  active: boolean;
  handleToggleModal(): void;
}

const NewJourneyModal: React.FC<NewJourneyModalProps> = ({
  active,
  handleToggleModal,
}) => {
  const toggleModal = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        handleToggleModal();
      }
    },
    [handleToggleModal],
  );

  return (
    <Container isActive={active} onClick={toggleModal}>
      <ModalContent className="modal_content">
        <Title>Nova Jornada</Title>

        <p>
          Dê um <strong>nome</strong> para essa Jornada
        </p>

        <input />

        <span>Você poderá alterar essa informação depois.</span>

        <ModalFooter>
          <button type="button">Continuar</button>
          <button type="button" onClick={handleToggleModal}>
            Cancelar
          </button>
        </ModalFooter>
      </ModalContent>
    </Container>
  );
};

export default NewJourneyModal;
