import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1340px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const AddButton = styled(Link)`
  font-size: 1rem;
  color: var(--white);
  background: var(--blue);
  border: 0;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-decoration: none;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ActionsFilter = styled.div`
  display: flex;
  flex-direction: row;
`;
