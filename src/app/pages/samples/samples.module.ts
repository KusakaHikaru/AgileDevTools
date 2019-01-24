import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SampleDashComponent } from './sample-dash/sample-dash.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [SampleDashComponent],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ]
})
export class SamplesModule { }
