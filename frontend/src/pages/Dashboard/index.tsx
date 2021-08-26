import { ActionsFilterGroup } from '../../components/ActionsFilterGroup';
import { DevelopersTable } from '../../components/DevelopersTable';
import { Pagination } from '../../components/Pagination';
import { Container, AddButton, ActionsFilter, Actions } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Actions>
        <AddButton to="/add">Adicionar novo</AddButton>
        <ActionsFilter>
          <ActionsFilterGroup />
        </ActionsFilter>
      </Actions>
      <DevelopersTable />
      <Pagination />
    </Container>
  );
}
