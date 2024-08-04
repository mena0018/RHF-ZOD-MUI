import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from '@/styles/theme.tsx';
import { App } from './App.tsx';
import { Toaster } from 'sonner';
import { fr } from 'date-fns/locale';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider adapterLocale={fr} dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Toaster richColors position='top-right' />
          <App />
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
