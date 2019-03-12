import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import {FeatureAComponent} from './components/feature-a/feature-a.component';
import { DialogAComponent } from './components/dialog-a/dialog-a.component';

@NgModule({
  declarations: [FeatureAComponent, DialogAComponent],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
