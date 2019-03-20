import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from 'src/app/shared/material.module';
import { BacklogSidenavComponent } from 'src/app/pages/samples/backlog-sidenav/backlog-sidenav.component';
import { BacklogTemplateModalComponent } from 'src/app/pages/samples/backlog-template-modal/backlog-template-modal.component';
import { SandBoxComponent } from './sand-box/sand-box.component';


@NgModule({
  declarations: [
    AppComponent,
    BacklogSidenavComponent,
    BacklogTemplateModalComponent,
    SandBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DragDropModule,
    FontAwesomeModule,
    TextFieldModule,
    FormsModule,
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
  entryComponents: [BacklogTemplateModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
