import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleDashComponent } from './sample-dash/sample-dash.component';

const routes: Routes = [
  { path: '', component: SampleDashComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplesRoutingModule { }
