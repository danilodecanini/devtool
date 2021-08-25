import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 500;
      padding: 0.5rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      color: var(--text-body);
      border-spacing: 0.25rem;
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.actions {
        display: flex;
        flex-direction: row;
        /* justify-content: space-around; */
      }
    }
  }

  h2 {
    font-size: 2rem;
    color: var(--text-title);
    text-align: center;
  }
`;

export const DeleteButton = styled.button`
  color: var(--white);
  background: var(--red);
  border: 0;
  padding: 0 0.5rem;
  border-radius: 0.25rem;
  height: 2.5rem;
  margin: 0 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const EditButton = styled(Link)`
  color: var(--white);
  background: var(--yellow);
  border: 0;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  height: 2.5rem;
  margin: 0 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const ShowButton = styled(Link)`
  color: var(--white);
  background: var(--blue);
  border: 0;
  padding: 0.5rem 0.5rem;
  border-radius: 0.25rem;
  height: 2.5rem;
  margin: 0 0.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
