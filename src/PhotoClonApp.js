import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import AppRouter from './routers/AppRouter';

export function PhotoClonApp() {
  return (
    <Provider store={configureStore()}>
      <AppRouter />
    </Provider>
  );
}
