import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgrxModalModule} from '@app/ngrx-modal';

import { FeatureARoutingModule } from './feature-a-routing.module';

import { FeatureAComponent } from './components/feature-a/feature-a.component';
import { DialogAComponent } from './components/dialog-a/dialog-a.component';


@NgModule({
  declarations: [
    FeatureAComponent,
    DialogAComponent,
  ],
  imports: [
    CommonModule,
    NgrxModalModule.withComponents([DialogAComponent]),
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
