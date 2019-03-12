import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'feature-a',
        loadChildren: './+feature-a/feature-a.module#FeatureAModule',
      },
      {
        path: 'feature-b',
        loadChildren: './+feature-b/feature-b.module#FeatureBModule',
      },
      {
        path: 'feature-c',
        loadChildren: './+feature-c/feature-c.module#FeatureCModule',
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
