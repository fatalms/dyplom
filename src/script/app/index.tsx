import { CssBaseline } from '@mui/material';
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRouting from './routing';
import appStore from './store';
import GlobalStyle from './styles/global';
import theme from './styles/themes/main';

//TODO: FOR DEBUG - remove it!
console.log('DEBUG_LOG Theme: ', theme);

const App = () => {
  return (
    <Provider store={appStore}>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
              <AppRouting />
            </BrowserRouter>
            <GlobalStyle />
          </ThemeProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </Provider>
  );
};

export default App;
