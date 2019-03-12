import {ANALYZE_FOR_ENTRY_COMPONENTS, ModuleWithProviders, NgModule} from '@angular/core';
import {MatDialogModule} from '@angular/material';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import {dialogReducer} from './reducers/dialog.reducer';
import {DialogEffects} from './effects/dialog.effects';

@NgModule({
  declarations: [],
  imports: [
    MatDialogModule,
    StoreModule.forFeature('dialog', dialogReducer),
    EffectsModule.forFeature([DialogEffects])
  ],
  exports: []
})
export class NgrxModalModule {
  static withComponents(components: any): ModuleWithProviders {
    return {
      ngModule: NgrxModalModule,
      providers: [{ provide: ANALYZE_FOR_ENTRY_COMPONENTS, useValue: components, multi: true }]
    };
  }
}
