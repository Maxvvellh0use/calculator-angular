import { createFeatureSelector , createSelector } from '@ngrx/store';
import { InputValueState } from './keyboard.reducer';

export const selectInputFeature = createFeatureSelector('inputValue');

export const selectInputValue = createSelector(
  selectInputFeature,
  (state: string) => state
);
