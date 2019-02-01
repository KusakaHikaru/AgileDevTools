import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';
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
    {id: '01', viewValue: '設計'},
    {id: '02', viewValue: '設計Rv'},
    {id: '03', viewValue: 'M_UT'},
    {id: '04', viewValue: 'M_UT_Rv'},
  ];

  constructor(private snackBar: MatSnackBar) {}

  public drop(event: CdkDragDrop<string[]>, backlogs: []): void {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }

  public addPbl(): void {
    this.pbls.push(new ProductBacklog());
  }

  public addSbl(pbl: ProductBacklog): void {
    pbl.sbls.push(new SubjectBacklog());
  }

  public remove(index: number, target: [], backlogs: ProductBacklog[]): void {
    const originBacklogs = _.cloneDeep(backlogs);
    _.pullAt(target, index);
    const snackBarRef =  this.snackBar.open('削除しました', '取り消し', {duration: 3000});
    snackBarRef.onAction().subscribe(() => {
      this.pbls = originBacklogs;
    });
  }
}
