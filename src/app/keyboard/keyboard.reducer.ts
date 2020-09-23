import { createReducer, on } from '@ngrx/store';
import { typingOperator, typingNumber, reset } from './keyboard.action';

export interface InputValueState {
  inputValue: string;
}

export const initialState = '';

// tslint:disable-next-line:variable-name
export const _keyboardReducer = createReducer(
  initialState,
  on(typingNumber, (state, action) => state + action.value),
  on(typingOperator, (state, action) => state + ' ' + action.value + ' '),
  on(reset, () => '')
);

export const keyboardReducer = (state, action) => {
  return _keyboardReducer(state, action);
};
