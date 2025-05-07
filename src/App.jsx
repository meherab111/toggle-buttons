import { ToggleButton } from './components/ToggleButton'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./styles/Global";
import { theme } from './styles/Theme';


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <ToggleButton />
    </>
    </ThemeProvider>
  )
}


