'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import templateReducer from './templateSlice';

const store = configureStore({
  reducer: {
    templates: templateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
