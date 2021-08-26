import { FormEvent } from 'react';
import { useDevelopers } from '../../hooks/useDeveloper';
import { Form, SearchButton } from './styled';

export function ActionsFilterGroup() {
  const {
    searchType,
    searchValue,
    setSearchType,
    setSearchValue,
    handleFilters,
  } = useDevelopers();

  async function handleFilter(event: FormEvent) {
    event.preventDefault();
    await handleFilters();
  }
  return (
    <Form onSubmit={handleFilter}>
      <select
        value={searchType}
        onChange={(event) => setSearchType(event.target.value)}
      >
        <option value="nome">Nome</option>
        <option value="idade">Idade</option>
        <option value="hobby">Hobby</option>
      </select>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <SearchButton type="submit">Pesquisar</SearchButton>
    </Form>
  );
}
