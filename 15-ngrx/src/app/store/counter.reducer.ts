import { createReducer, on } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

// import { Action } from '@ngrx/store';
// import {
//   CounterActions,
//   DecrementAction,
//   IncrementAction,
// } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value)
);

// For older Ang versions that don't support createReducer() / Under the hood

// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === '[Counter] Increment') {
//     return state + (action as IncrementAction).value;
//   }

//   if (action.type === '[Counter] Decrement') {
//     return state - (action as DecrementAction).value;
//   }

//   return state;
// }
