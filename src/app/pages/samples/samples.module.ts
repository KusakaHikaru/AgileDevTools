import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { SamplesRoutingModule } from './samples-routing.module';
import { SampleDashComponent } from './sample-dash/sample-dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MaterialModule} from 'src/app/shared/material.module';



@NgModule({
  declarations: [SampleDashComponent],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    LayoutModule,
    DragDropModule,
    TextFieldModule,
    MaterialModule,
  ]
})
export class SamplesModule { }
