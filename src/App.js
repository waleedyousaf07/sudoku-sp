import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.scss';
import Board from './features/board/Board.view';

const queryClient = new QueryClient();

const App = () => (
  <div className="app">
    <h1>Soduko</h1>
    <Board />
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
