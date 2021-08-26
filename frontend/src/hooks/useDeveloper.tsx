import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';

interface Developer {
  id: string;
  nome: string;
  sexo: number;
  hobby: string;
  idade: number;
  datanascimento: string;
  // eslint-disable-next-line camelcase
  created_at: string;
}

type DeveloperInputData = Omit<Developer, 'id' | 'created_at'>;

interface DevelopersProviderProps {
  children: ReactNode;
}

interface DevelopersContextData {
  developers: Developer[];
  createDeveloper: (developer: DeveloperInputData) => Promise<void>;
  deleteDeveloper: (developerUuid: string) => Promise<void>;
  findOneDeveloper: (developerUuid: string) => Promise<Developer>;
  updateDeveloper: (
    developerUuid: string,
    developer: DeveloperInputData,
  ) => Promise<void>;
  isFirstPage: boolean;
  canGoAhead: boolean;
  nextPage: () => void;
  previousPage: () => void;
  page: number;
  searchType: string;
  searchValue: string;
  setSearchType: (value: string) => void;
  setSearchValue: (value: string) => void;
  handleFilters: () => Promise<void>;
}

const DevelopersContext = createContext<DevelopersContextData>(
  {} as DevelopersContextData,
);

export function DevelopersProvider({ children }: DevelopersProviderProps) {
  const [developers, setDevelopers] = useState<Developer[]>([]);
  const [page, setPage] = useState(1);
  const [searchType, setSearchType] = useState('nome');
  const [searchValue, setSearchValue] = useState('');

  async function getAllDevelopersPaginated() {
    const params = {
      page,
    };

    if (searchValue !== '') {
      Object.assign(params, {
        search_type: searchType,
        search_value: searchValue,
      });
    }

    const response = await api.get(`/developers`, { params });

    setDevelopers(response.data);
  }

  useEffect(() => {
    async function fetchData() {
      await getAllDevelopersPaginated();
    }
    fetchData();
  }, [page]);

  const isFirstPage = page === 1;
  const canGoAhead = !(isFirstPage && developers.length < 10);

  function nextPage() {
    setPage(page + 1);
  }

  function previousPage() {
    if (page !== 1) {
      setPage(page - 1);
    }
  }

  async function handleFilters() {
    await getAllDevelopersPaginated();
  }

  async function createDeveloper(developerData: DeveloperInputData) {
    const response = await api.post('/developers', developerData);
    if (response.status === 201) {
      await getAllDevelopersPaginated();
      toast.success('Desenvolvedor cadastrado!');
    } else {
      toast.error('Ops! Ocorreu um erro');
    }
  }

  async function deleteDeveloper(developerUuid: string) {
    const response = await api.delete(`/developers/${developerUuid}`);

    if (response.status === 204) {
      toast.success('Desenvolvedor deletado!');
      await getAllDevelopersPaginated();
    } else {
      toast.error('Ops! Ocorreu um erro');
    }
  }

  async function updateDeveloper(
    developerUuid: string,
    developerData: DeveloperInputData,
  ) {
    const response = await api.put(
      `developers/${developerUuid}`,
      developerData,
    );
    if (response.status === 200) {
      await getAllDevelopersPaginated();
      toast.success('Desenvolvedor editado!');
    } else {
      toast.error('Ops! Ocorreu um erro');
    }
  }

  async function findOneDeveloper(developerUuid: string) {
    const { data } = await api.get(`/developers/${developerUuid}`);
    return data;
  }

  return (
    <DevelopersContext.Provider
      value={{
        developers,
        createDeveloper,
        deleteDeveloper,
        findOneDeveloper,
        updateDeveloper,
        isFirstPage,
        canGoAhead,
        nextPage,
        previousPage,
        page,
        searchType,
        searchValue,
        setSearchType,
        setSearchValue,
        handleFilters,
      }}
    >
      {children}
    </DevelopersContext.Provider>
  );
}

export function useDevelopers() {
  const context = useContext(DevelopersContext);

  return context;
}
