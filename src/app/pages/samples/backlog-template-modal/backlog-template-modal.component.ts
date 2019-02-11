import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as _ from 'lodash';

import { SubjectBacklog } from 'src/app/class/sbl.class';

@Component({
  selector: 'app-backlog-template-modal',
  templateUrl: './backlog-template-modal.component.html',
  styleUrls: ['./backlog-template-modal.component.css']
})
export class BacklogTemplateModalComponent {

  private originalData: string = this.template;
  private sbls = [new SubjectBacklog()];
  private labels = [
    { id: '01', viewValue: '設計' },
    { id: '02', viewValue: '設計Rv' },
    { id: '03', viewValue: 'M_UT' },
    { id: '04', viewValue: 'M_UT_Rv' },
  ];

  constructor(
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<BacklogTemplateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public template: string) { }

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
   * バックログ(SBL/PBL)削除メソッド
   * 対象のPBL/SBLオブジェクトを削除
   * 「取り消し」押下で復元
   * @param index 配列のIndex
   * @param target 削除対象のバックログオブジェクトList
   * @param backlogs 取り消し用のオリジナルバックログオブジェクトList
   */
  public remove(index: number, target: SubjectBacklog[], sbls: SubjectBacklog[]): void {
    const originBacklogs = _.cloneDeep(sbls);
    _.pullAt(target, index);
    this.cancelRemoveSnackBar(originBacklogs);
  }

  /**
   * 削除を取り消すsnackBar表示・アクション処理
   * @param originBacklogs 復元元のSBLオブジェクト
   */
  private cancelRemoveSnackBar(originBacklogs: SubjectBacklog[]) {
    const snackBarRef = this.snackBar.open('削除しました', '取り消し', { duration: 3000 });
    snackBarRef.onAction().subscribe(() => {
      this.sbls = originBacklogs;
    });
  }

}

