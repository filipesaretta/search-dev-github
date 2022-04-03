import iconSun from '../../assets/sun.svg';
import iconMoon from '../../assets/moon.svg';
import { Button, Container } from './styles';

interface toggleThemeProps {
  toggleTheme: () => void;
  theme: string;
}

export function Header({ toggleTheme, theme }: toggleThemeProps) {
  return (
    <Container>
      <h1>devsearch</h1>
      <Button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'}
        <img
          src={theme === 'dark' ? iconSun : iconMoon}
          alt="Icon for change theme from light to dark or dark to light"
        />
      </Button>
    </Container>
  );
}
