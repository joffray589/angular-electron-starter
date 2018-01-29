import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SamplePage1Component} from './sample-page-1/sample-page-1.component';
import {SamplePage2Component} from './sample-page-2/sample-page-2.component';

const routes: Routes = [
  {path: 'sample-page-1', component: SamplePage1Component},
  {path: 'sample-page-2', component: SamplePage2Component},

  { path: '', redirectTo: '/sample-page-1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

