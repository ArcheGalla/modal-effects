import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import {OpenDialogAction} from '@app/ngrx-modal';

import {DialogAComponent} from '../dialog-a/dialog-a.component';

@Component({
  selector: 'app-feature-a',
  templateUrl: './feature-a.component.html',
  styleUrls: ['./feature-a.component.css']
})
export class FeatureAComponent {

  constructor(private store: Store<any>) { }

  openDialog(): void {
    const payload = {
      componentOrTemplateRef: DialogAComponent,
      config: {
        id: 'my-custom-id',
        data: {
          // ... // MAT_DIALOG_DATA
        }
      }
    };

    this.store.dispatch(new OpenDialogAction(payload));
  }
}
