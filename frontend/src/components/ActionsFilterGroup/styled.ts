import styled from 'styled-components';

export const Form = styled.form`
  input,
  select {
    padding: 0 1rem;
    height: 3rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }
  }

  select {
    width: 7rem;
    margin-right: 1rem;
  }

  input {
    width: 20rem;
  }
`;

export const SearchButton = styled.button`
  font-size: 1rem;
  color: var(--white);
  background: var(--blue);
  border: 0;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  text-decoration: none;
  margin-left: 1rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
