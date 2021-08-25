import { DevelopersTable } from '../../components/DevelopersTable';
import { Pagination } from '../../components/Pagination';
import { Container, AddButton } from './styles';

export function Dashboard() {
  return (
    <Container>
      <AddButton to="/add">Adicionar novo</AddButton>
      <DevelopersTable />
      <Pagination />
    </Container>
  );
}
