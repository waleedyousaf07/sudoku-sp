import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.scss';
import rootRoutes from './core/rootRoutes';
import DummyTopBar from './features/dummyTopBar/DummyTopBar.view';

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <h1>Heyy!</h1>
    <DummyTopBar />
    {rootRoutes()}
  </div>
);

const AppWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default AppWrapper;
