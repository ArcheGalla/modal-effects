import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import {FeatureAComponent} from './components/feature-a/feature-a.component';

@NgModule({
  declarations: [FeatureAComponent],
  imports: [
    CommonModule,
    FeatureARoutingModule
  ]
})
export class FeatureAModule { }
