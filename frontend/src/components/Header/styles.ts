import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  padding: 1rem 3rem;

  h1 {
    font-size: 3.5rem;
    color: var(--white);
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    color: var(--white);
  }
`;
