import {MatDialogConfig, MatDialogRef} from '@angular/material';
import {ComponentType} from '@angular/cdk/portal';
import {Action} from '@ngrx/store';

export enum DialogActionTypes {
  SAVE_REF = '[DIALOG] SAVE_REF', // use to store dialog reference in the ngrx store
  CLOSE = '[DIALOG] CLOSE',
  OPEN = '[DIALOG] OPEN',
}

export type DialogAction = OpenDialogAction | SaveRefDialogAction | CloseDialogAction;

export interface OpenDialogPayload {
  componentOrTemplateRef: ComponentType<any>;
  config: MatDialogConfig;
}

export interface CloseDialogPayload {
  dialogId: string;
  responseData?: any;
}

export class OpenDialogAction implements Action {
  readonly type = DialogActionTypes.OPEN;

  constructor(public payload: OpenDialogPayload) {
  }
}

export class SaveRefDialogAction implements Action {
  readonly type = DialogActionTypes.SAVE_REF;

  constructor(public payload: MatDialogRef<any>) {
  }
}

export class CloseDialogAction implements Action {
  readonly type = DialogActionTypes.CLOSE;

  constructor(public payload: CloseDialogPayload) {
  }
}
