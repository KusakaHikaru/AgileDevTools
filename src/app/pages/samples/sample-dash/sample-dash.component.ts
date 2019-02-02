import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import * as _ from 'lodash';

import { ProductBacklog } from 'src/app/class/pbl.class';
import { SubjectBacklog } from 'src/app/class/sbl.class';
@Component({
  selector: 'app-sample-dash',
  templateUrl: './sample-dash.component.html',
  styleUrls: ['./sample-dash.component.css']
})
export class SampleDashComponent {

  private pbls = [new ProductBacklog()];

  private labels = [
    { id: '01', viewValue: '設計' },
    { id: '02', viewValue: '設計Rv' },
    { id: '03', viewValue: 'M_UT' },
    { id: '04', viewValue: 'M_UT_Rv' },
  ];

  constructor(private snackBar: MatSnackBar) { }

  /**
   * D&Dのドロップイベント処理
   * @param event イベント
   * @param backlogs D&D対象のバックログ(PBL・SBL)
   */
  public drop(event: CdkDragDrop<string[]>, backlogs: []): void {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }

  /**
   * PBLオブジェクトの追加
   * @param pbl 対象のPBL
   */
  public addPbl(): void {
    this.pbls.push(new ProductBacklog());
  }

  /**
   * SBLオブジェクトの追加
   * @param pbl 対象のPBL
   */
  public addSbl(pbl: ProductBacklog): void {
    pbl.sbls.push(new SubjectBacklog());
  }

  /**
   * 見積時間合計の計算
   * @param pbl 計算対象のプロダクトバックログ
   */
  public sumEstimatedTime(pbl: ProductBacklog): void {
    pbl.estimatedTimeSum = _.sumBy(pbl.sbls, 'estimated') || null;
  }

  /**
   * 総計計算用ラップメソッド
   */
  public sumBy(collection: ProductBacklog[], iteratee: string): number {
    return _.sumBy(collection, iteratee);
  }

  /**
   * バックログ(SBL/PBL)削除メソッド
   * 対象のPBL/SBLオブジェクトを削除
   * 「取り消し」押下で復元
   * @param index 配列のIndex
   * @param target 削除対象のバックログオブジェクトList
   * @param backlogs 取り消し用のオリジナルバックログオブジェクト
   */
  public remove(index: number, target: [], pbls: ProductBacklog[]): void {
    const originBacklogs = _.cloneDeep(pbls);
    _.pullAt(target, index);
    this.cancelRemoveSnackBar(originBacklogs);
  }

  /**
   * 削除を取り消すsnackBar表示・アクション処理
   * @param originBacklogs 復元元のPBLオブジェクト
   */
  private cancelRemoveSnackBar(originBacklogs: ProductBacklog[]) {
    const snackBarRef = this.snackBar.open('削除しました', '取り消し', { duration: 3000 });
    snackBarRef.onAction().subscribe(() => {
      this.pbls = originBacklogs;
    });
  }
}
