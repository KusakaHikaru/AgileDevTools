import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { SubjectBacklog } from 'src/app/class/sbl.class';
import { SampleDashComponent } from 'src/app/pages/samples/sample-dash/sample-dash.component';


@Component({
  selector: 'app-backlog-template-modal',
  templateUrl: './backlog-template-modal.component.html',
  styleUrls: ['./backlog-template-modal.component.css']
})
export class BacklogTemplateModalComponent extends SampleDashComponent {

  private originalData: string = this.template;
  private sbls = [new SubjectBacklog()];

  constructor(
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<BacklogTemplateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public template: string) {
    super(snackBar, dialog);
  }

  onNoClick(): void {
    this.template = this.originalData || '';
    this.dialogRef.close(this.template);
  }

  /**
   * SBLオブジェクトの追加
   */
  public addSbl(): void {
    this.sbls.push(new SubjectBacklog());
  }

  /**
   * 削除を取り処理用：バックログオブジェクトListプロパティに値をセット
   * @param backlogs バックログオブジェクトList
   */
  public setBacklogs(backlogs: SubjectBacklog[]): void {
    this.sbls = backlogs;
  }

}

