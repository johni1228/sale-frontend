import { configureStore } from '@reduxjs/toolkit'
import * as Reducer from 'reducers';


export const store = configureStore({
  reducer: {
    collepse: Reducer.collepseReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch