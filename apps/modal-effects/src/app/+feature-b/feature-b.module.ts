import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxModalModule } from '@app/ngrx-modal';
import { FeatureBRoutingModule } from './feature-b-routing.module';
import { FeatureBComponent } from './components/feature-b/feature-b.component';
import { DialogBComponent } from './components/dialog-b/dialog-b.component';

@NgModule({
  declarations: [
    FeatureBComponent,
    DialogBComponent,
  ],
  imports: [
    CommonModule,
    NgrxModalModule.withComponents([DialogBComponent]),
    FeatureBRoutingModule
  ]
})
export class FeatureBModule { }
