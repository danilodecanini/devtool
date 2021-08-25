import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDevelopers } from '../../hooks/useDeveloper';
import { BackButton, Container, ShowcaseDeveloper } from './styles';

interface RouteParams {
  uuid: string;
}

interface DeveloperInfo {
  id: string;
  nome: string;
  idade: number;
  sexo: number;
  datanascimento: string;
  hobby: string;
  // eslint-disable-next-line camelcase
  created_at: string;
}

export function ShowDeveloper() {
  const history = useHistory();
  const [developer, setDeveloper] = useState<DeveloperInfo>();
  const { findOneDeveloper } = useDevelopers();
  const { uuid } = useParams<RouteParams>();

  useEffect(() => {
    async function fetchDeveloper() {
      const developerData = await findOneDeveloper(uuid);
      if (!developerData) {
        history.push('/');
      }

      setDeveloper(developerData);
    }
    fetchDeveloper();
  }, [uuid]);

  return (
    <Container>
      <BackButton to="/">Voltar</BackButton>
      {developer && (
        <ShowcaseDeveloper>
          <p>Nome: </p>
          <span>{developer.nome}</span>
          <p>Idade: </p>
          <span>{developer.idade}</span>
          <p>Sexo: </p>
          <span>{Number(developer.sexo) === 1 ? 'Masculino' : 'Feminimo'}</span>
          <p>Hobby: </p>
          <span>{developer?.hobby}</span>
          <p>Data Nascimento: </p>
          <span>
            {format(new Date(developer.datanascimento), 'dd/MM/yyyy')}
          </span>
          <p>Criado em: </p>
          <span>{format(new Date(developer.created_at), 'dd/MM/yyyy')}</span>
        </ShowcaseDeveloper>
      )}
    </Container>
  );
}
