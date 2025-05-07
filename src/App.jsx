import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { ToggleSwitch } from './components/ToggleSwitch';


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <>
      <ToggleSwitch />
    </>
    </ThemeProvider>
  )
}


