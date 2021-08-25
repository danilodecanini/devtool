import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const BackButton = styled(Link)`
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

export const ShowcaseDeveloper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;
