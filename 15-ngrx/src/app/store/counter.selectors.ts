import { createSelector } from '@ngrx/store';

export const selectCount = (state: { counter: number }) => state.counter;

// createSelector for building more complex selector functions
export const selectDoubleCount = createSelector(
  selectCount,
  (state) => state * 2
);
