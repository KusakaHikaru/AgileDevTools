import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-backlog-template-modal',
  templateUrl: './backlog-template-modal.component.html',
  styleUrls: ['./backlog-template-modal.component.css']
})
export class BacklogTemplateModalComponent {

  private originalData: string = this.template;
  constructor(
    public dialogRef: MatDialogRef<BacklogTemplateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public template: string) { }

  onNoClick(): void {
    this.template = this.originalData || '';
    this.dialogRef.close(this.template);
  }

}

