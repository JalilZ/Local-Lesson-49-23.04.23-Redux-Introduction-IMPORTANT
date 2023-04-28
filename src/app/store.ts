import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import jalilSlicer from '../features/counter/jalSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,              //counter is the name we gave our variable in counterSlice.ts
    jal: jalilSlicer,                        // ex5
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
