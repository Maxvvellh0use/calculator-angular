import { createFeatureSelector , createSelector } from '@ngrx/store';

export const selectInputFeature = createFeatureSelector('inputValue');

export const selectInputValue = createSelector(
  selectInputFeature,
  (state: string) => state
);
