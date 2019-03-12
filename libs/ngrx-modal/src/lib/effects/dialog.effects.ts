import {Actions, Effect, ofType} from '@ngrx/effects';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Injectable} from '@angular/core';

import {
  OpenDialogAction,
  CloseDialogAction,
  OpenDialogPayload,
  DialogActionTypes,
  CloseDialogPayload,
  SaveRefDialogAction
} from '../actions/dialog.actions';

import {Observable, of} from 'rxjs';
import {map, mapTo, switchMap, tap} from 'rxjs/operators';


@Injectable()
export class DialogEffects {
  constructor(private actions$: Actions, private dialog: MatDialog) {
    console.log(`Dialog effect is created`);
  }

  @Effect()
  openDialog$: Observable<SaveRefDialogAction> = this.actions$.pipe(
    ofType(DialogActionTypes.OPEN),
    map((action: OpenDialogAction) => action.payload),
    switchMap((payload: OpenDialogPayload) => of(this.dialog.open(payload.componentOrTemplateRef, payload.config))),
    map((dialogRef: MatDialogRef<any>) => new SaveRefDialogAction(dialogRef))
  );

  @Effect({ dispatch: false })
  closeDialog$: Observable<{}> = this.actions$.pipe(
    ofType(DialogActionTypes.CLOSE),
    map((action: CloseDialogAction) => action.payload),
    tap((payload: CloseDialogPayload) => this.dialog.getDialogById(payload.dialogId).close(payload.responseData)),
    mapTo(of())
  );
}
