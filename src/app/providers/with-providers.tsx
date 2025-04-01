import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import client from '../../shared/api/apollo-client';
import { theme } from '../../shared/theme/theme';

export const withProviders = (component: () => ReactNode) => () =>
  (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          {component()}
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
