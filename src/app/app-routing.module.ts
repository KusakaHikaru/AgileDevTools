import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandBoxComponent } from './sand-box/sand-box.component'

const routes: Routes = [
  { path: 'sample', loadChildren: './pages/samples/samples.module#SamplesModule' },
  { path: 'sandbox', component: SandBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
