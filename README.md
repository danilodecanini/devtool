# devtool

## Principais detalhes

### Frontend
- Utilizado React Context API para dados globais da aplicação
- Utilizado React Hooks para manipular os dados do Contexto
- Utilizado React Hooks Form para manipulação de formulários
- Utilizado Yup para validação dos dados
- Utilizado Axios como cliente http para requisições no backend
- Utilizado Styled Components para estilização de componentes

### Backend
- Utilizado jest para testes unitários
- Utilizado TypeORM para manipulação e conexão com banco de dados 
- Utilizado principios do SOLID e Clean Architecture para desenvolvimento da aplicação
- Utilizado express como framework de aplicação HTTP
- Utilizado MySQL como banco de dados 

## Como rodar a aplicação:

1. Clone o repositório
2. Entre na pasta `devtool/backend` e utilize o comando `npm install` ou `yarn` para instalar as dependencias do projeto
3. Após terminar a instalação utilize o comando `docker-compose up -d` para subir o backend junto com o banco de dados.
3. Utilize o comando `docker-compose ps` e verifique se existe 2 aplicações rodando com o nome `backend_devtool` e `database_devtool` com State como Up
4. Após essa verificação, rode os testes com o comando `npm test` ou `yarn test` para rodar todos os testes da aplicação
5. Volte uma pasta e entre na pasta `frontend` e com o comando `npm install` ou `yarn` instale as dependencias do projeto
6. Após a instalação execute o comando `npm start` ou `yarn start` para rodar a aplicação. Uma nova aba no navegador deve abrir com a aplicação rodando.

