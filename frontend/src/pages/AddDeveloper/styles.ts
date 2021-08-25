import styled from 'styled-components';

export const Container = styled.div`
  max-width: 650px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Form = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  span {
    font-size: 0.9rem;
    color: var(--red);
  }

  input,
  select {
    width: 100%;
    padding: 1rem 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    margin: 1rem 0rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--blue);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
