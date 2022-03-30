import { ThemeProvider, DefaultTheme } from 'styled-components';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { usePersistedState } from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
