import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import DeveloperSchemaValidator from '../../validations/DeveloperValidation';
import { useDevelopers } from '../../hooks/useDeveloper';
import { Container, Form } from './styles';

interface RouteParams {
  uuid: string;
}

type FormValues = {
  nome: string;
  idade: number;
  hobby: string;
  sexo: string;
  datanascimento: string;
};

export function EditDeveloper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: yupResolver(DeveloperSchemaValidator),
  });
  const { findOneDeveloper, updateDeveloper } = useDevelopers();
  const history = useHistory();
  const { uuid } = useParams<RouteParams>();
  const [id, setId] = useState('');

  useEffect(() => {
    async function fetchDeveloper() {
      const developerData = await findOneDeveloper(uuid);
      if (!developerData) {
        history.push('/');
      }
      setId(developerData.id);
      setValue('nome', developerData.nome);
      setValue('idade', developerData.idade);
      setValue('hobby', developerData.hobby);
      setValue('sexo', developerData.sexo ? 'M' : 'F');
      setValue(
        'datanascimento',
        format(new Date(developerData.datanascimento), 'yyyy-MM-dd'),
      );
    }
    fetchDeveloper();
  }, [uuid]);

  const handleEditDeveloper: SubmitHandler<FormValues> = async (data) => {
    const developerData = {
      ...data,
      sexo: data.sexo === 'M' ? 1 : 0,
    };
    await updateDeveloper(id, developerData);
    history.push('/');
  };

  return (
    <Container>
      <h2>Editando desenvolvedor</h2>
      <Form onSubmit={handleSubmit(handleEditDeveloper)}>
        <input type="text" placeholder="Nome" {...register('nome')} />
        {errors.nome && <span>{errors.nome.message}</span>}
        <input type="number" placeholder="Idade" {...register('idade')} />
        {errors.idade && <span>{errors.idade.message}</span>}
        <input type="text" placeholder="Hobby" {...register('hobby')} />
        {errors.hobby && <span>{errors.hobby.message}</span>}
        <select {...register('sexo')}>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </select>
        {errors.sexo && <span>{errors.sexo.message}</span>}
        <input
          type="date"
          placeholder="Data Nascimento"
          {...register('datanascimento')}
        />
        {errors.datanascimento && <span>{errors.datanascimento.message}</span>}
        <button type="submit">Editar</button>
      </Form>
    </Container>
  );
}
