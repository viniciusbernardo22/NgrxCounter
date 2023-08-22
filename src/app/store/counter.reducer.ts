import { createReducer, on } from '@ngrx/store';
import { increment } from './counter.actions';

const initialState: number = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => state + 1)
);

//createReducer is not supported in older ngrx versions, alternative way to create:
// export function counterReducer1(state = initialState) {
//   return state;
// }
