import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureCRoutingModule } from './feature-c-routing.module';
import { FeatureCComponent } from './components/feature-c/feature-c.component';
import { DialogCComponent } from './components/dialog-c/dialog-c.component';
import { NgrxModalModule } from '@app/ngrx-modal';

@NgModule({
  declarations: [
    FeatureCComponent,
    DialogCComponent,
  ],
  imports: [
    CommonModule,
    NgrxModalModule.withComponents([DialogCComponent]),
    FeatureCRoutingModule
  ]
})
export class FeatureCModule { }
