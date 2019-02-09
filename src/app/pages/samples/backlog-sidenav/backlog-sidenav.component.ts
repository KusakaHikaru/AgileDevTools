import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-backlog-sidenav',
  templateUrl: './backlog-sidenav.component.html',
  styleUrls: ['./backlog-sidenav.component.css']
})
export class BacklogSidenavComponent {

  /**
   * D&Dのドロップイベント処理
   * @param event イベント
   * @param backlogs D&D対象のバックログ(PBL・SBL)
   */
  public drop(event: CdkDragDrop<string[]>, backlogs: any[]): void {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }

}

