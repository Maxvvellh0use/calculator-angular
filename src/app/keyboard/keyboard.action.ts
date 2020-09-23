import { createAction, props } from '@ngrx/store';

export const typingNumber = createAction(
  '[Keyboard Component] TypingNumber',
  props<{value: string}>());
export const reset = createAction('[Keyboard Component] Reset');
export const typingOperator = createAction(
  '[Keyboard Component] TypingOperator',
  props<{value: string}>());
