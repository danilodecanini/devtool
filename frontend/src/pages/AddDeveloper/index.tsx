import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { useDevelopers } from '../../hooks/useDeveloper';
import DeveloperSchemaValidator from '../../validations/DeveloperValidation';
import { Container, Form } from './styles';

type FormValues = {
  nome: string;
  idade: number;
  hobby: string;
  sexo: string;
  datanascimento: string;
};

export function AddDeveloper() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(DeveloperSchemaValidator),
  });
  const { createDeveloper } = useDevelopers();
  const history = useHistory();

  const handleAddDeveloper: SubmitHandler<FormValues> = async (data) => {
    const developerData = {
      ...data,
      sexo: data.sexo === 'M' ? 1 : 0,
    };
    await createDeveloper(developerData);
    history.push('/');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleAddDeveloper)}>
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
        <button type="submit">Adicionar</button>
      </Form>
    </Container>
  );
}
