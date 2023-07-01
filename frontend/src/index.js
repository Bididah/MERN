import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import  globalReducer from "state";
import { Provider } from 'react-redux';
import { userApi } from 'state/api';
import { setupListeners } from '@reduxjs/toolkit/query'

import { QueryClient, QueryClientProvider,  } from '@tanstack/react-query';

const queryClient = new QueryClient()

const store = configureStore({
  reducer: {
    global: globalReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware)
})

setupListeners(store.dispatch)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
