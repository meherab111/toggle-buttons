import { ToggleButton } from './components/ToggleButton'
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';


export const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <>
      <ToggleButton />
    </>
    </ThemeProvider>
  )
}


