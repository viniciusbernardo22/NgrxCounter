import { createReducer } from '@ngrx/store';

const initialState: number = 0;

export const counterReducer = createReducer(initialState);

//createReducer is not supported in older ngrx versions, alternative way to create:
export function counterReducer1(state = initialState) {
  return state;
}
