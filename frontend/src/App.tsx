import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { DevelopersProvider } from './hooks/useDeveloper';
import Routes from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <DevelopersProvider>
      <Header />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyles />
    </DevelopersProvider>
  );
}

export default App;
