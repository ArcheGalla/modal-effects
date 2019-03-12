import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {OpenDialogAction} from '@app/ngrx-modal';
import {DialogCComponent} from '../dialog-c/dialog-c.component';

@Component({
  selector: 'app-feature-c',
  templateUrl: './feature-c.component.html',
  styleUrls: ['./feature-c.component.css']
})
export class FeatureCComponent {
  constructor(private store: Store<any>) { }

  openDialog(): void {
    const payload = {
      componentOrTemplateRef: DialogCComponent,
      config: {
        id: 'my-custom-id3',
        data: {
          // ... // MAT_DIALOG_DATA
        }
      }
    };

    this.store.dispatch(new OpenDialogAction(payload));
  }

}
