import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {OpenDialogAction} from '@app/ngrx-modal';
import {DialogBComponent} from '../dialog-b/dialog-b.component';

@Component({
  selector: 'app-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.css']
})
export class FeatureBComponent {
  constructor(private store: Store<any>) { }

  openDialog(): void {
    const payload = {
      componentOrTemplateRef: DialogBComponent,
      config: {
        id: 'my-custom-id2',
        data: {
          // ... // MAT_DIALOG_DATA
        }
      }
    };

    this.store.dispatch(new OpenDialogAction(payload));
  }
}
