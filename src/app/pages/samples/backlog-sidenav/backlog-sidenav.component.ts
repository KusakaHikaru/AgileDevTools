import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material';

import { BacklogTemplateModalComponent } from 'src/app/pages/samples/backlog-template-modal/backlog-template-modal.component';

import { SubjectBacklog } from 'src/app/class/sbl.class';

@Component({
  selector: 'app-backlog-sidenav',
  templateUrl: './backlog-sidenav.component.html',
  styleUrls: ['./backlog-sidenav.component.css']
})
export class BacklogSidenavComponent {

  public templates = [[new SubjectBacklog({title: 'hoge'}),new SubjectBacklog({title: 'fuga'})]];

  constructor(
    public dialog: MatDialog
  ) { }

  /**
   * D&Dのドロップイベント処理
   * @param event イベント
   * @param backlogs D&D対象のバックログ(PBL・SBL)
   */
  public drop(event: CdkDragDrop<string[]>, backlogs: any[]): void {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }

  public openBacklogModal(): void {
    const dialogRef = this.dialog.open(BacklogTemplateModalComponent, {
      width: '800px',
      height: '500px',
      data: 'hoge',
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}

