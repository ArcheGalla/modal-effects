import {DialogAction, DialogActionTypes} from '../actions/dialog.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MatDialogRef} from '@angular/material';

export interface DialogState {
  refs: Array<{ id: string, ref: MatDialogRef<any> }>;
}

const initialState: DialogState = {
  refs: []
};

export function dialogReducer(state: DialogState = initialState, action: DialogAction): DialogState {
  switch (action.type) {
    case DialogActionTypes.SAVE_REF:
      return { ...state, refs: [...state.refs, { id: action.payload.id, ref: action.payload }] };

    case DialogActionTypes.CLOSE:
      return { ...state, refs: state.refs.filter(ref => ref.id !== action.payload.dialogId) };

    default:
      return state;
  }
}

// DialogState Selector
export const getDialogState = createFeatureSelector('dialog');

// DialogState property selectors
export const getDialogRefById = (id: string) =>
  createSelector(getDialogState, (state: DialogState) =>
    state.refs.find(ref => ref.id === id).ref);
