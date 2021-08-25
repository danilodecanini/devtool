import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const NextPageButton = styled.button`
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

export const PreviousPageButton = styled.button`
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
