import { useDevelopers } from '../../hooks/useDeveloper';
import { Container, NextPageButton, PreviousPageButton } from './styles';

export function Pagination() {
  const { page, nextPage, isFirstPage, previousPage, canGoAhead } =
    useDevelopers();
  return (
    <Container>
      <PreviousPageButton disabled={isFirstPage} onClick={() => previousPage()}>
        Anterior
      </PreviousPageButton>
      <p>Página {page}</p>
      <NextPageButton disabled={canGoAhead} onClick={() => nextPage()}>
        Próxima
      </NextPageButton>
    </Container>
  );
}
