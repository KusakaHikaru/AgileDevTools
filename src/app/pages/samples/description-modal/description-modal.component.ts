import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.css']
})
export class DescriptionModalComponent {

  private originalData: string = this.data;
  constructor(
    public dialogRef: MatDialogRef<DescriptionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.data = this.originalData || '';
    this.dialogRef.close(this.data);
  }

}

