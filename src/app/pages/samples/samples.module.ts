import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

import { SamplesRoutingModule } from './samples-routing.module';
import { SampleDashComponent } from './sample-dash/sample-dash.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MaterialModule } from 'src/app/shared/material.module';

import { DescriptionModalComponent } from 'src/app/pages/samples/description-modal/description-modal.component';

@NgModule({
  declarations: [
    SampleDashComponent,
    DescriptionModalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SamplesRoutingModule,
    LayoutModule,
    DragDropModule,
    TextFieldModule,
    MaterialModule,
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
  entryComponents: [DescriptionModalComponent],
})
export class SamplesModule { }
