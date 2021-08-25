import * as yup from 'yup';

const DeveloperSchemaValidator = yup.object().shape({
  nome: yup.string().required('O nome é obrigatório'),
  idade: yup
    .number()
    .min(1, 'A idade mínima é 1')
    .required('A idade é obrigatória')
    .typeError('A idade deve ser um número, verifique!'),
  hobby: yup.string().required('O hobby é obrigatório'),
  sexo: yup.string().required('O sexo é obrigatório'),
  datanascimento: yup.string().required('A data de nascimento é obrigatória'),
});

export default DeveloperSchemaValidator;
