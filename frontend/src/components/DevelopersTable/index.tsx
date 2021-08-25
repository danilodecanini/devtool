import { format } from 'date-fns';
import { Trash, Edit, Eye } from 'react-feather';
import { useDevelopers } from '../../hooks/useDeveloper';
import { Container, DeleteButton, EditButton, ShowButton } from './styles';

export function DevelopersTable() {
  const { developers, deleteDeveloper } = useDevelopers();

  async function handleDeleteDeveloper(developerUuid: string) {
    await deleteDeveloper(developerUuid);
  }

  return (
    <Container>
      {developers.length >= 1 ? (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Sexo</th>
              <th>Hobby</th>
              <th>Dt. Nasc</th>
              <th>Criado em</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {developers.map((developer) => (
              <tr key={developer.id}>
                <td>{developer.nome}</td>
                <td>{developer.idade}</td>
                <td>{Number(developer.sexo) === 1 ? 'M' : 'F'}</td>
                <td>{developer.hobby}</td>
                <td>
                  {format(new Date(developer.datanascimento), 'dd/MM/yyyy')}
                </td>
                <td>{format(new Date(developer.created_at), 'dd/MM/yyyy')}</td>
                <td className="actions">
                  <ShowButton to={`/show/${developer.id}`}>
                    <Eye size={20} />
                  </ShowButton>
                  <EditButton to={`/edit/${developer.id}`}>
                    <Edit size={20} />
                  </EditButton>
                  <DeleteButton
                    type="button"
                    onClick={() => handleDeleteDeveloper(developer.id)}
                  >
                    <Trash size={20} />
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Não há registros</h2>
      )}
    </Container>
  );
}
