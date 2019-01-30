import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-sample-dash',
  templateUrl: './sample-dash.component.html',
  styleUrls: ['./sample-dash.component.css']
})
export class SampleDashComponent {
  private pbls = [
    {
      id: 'PBL-001',
      title: 'PBL 1',
      sp: 0,
      position: 1,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
    {
      id: 'PBL-002',
      title: 'PBL 2',
      sp: 0,
      position: 2,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
    {
      id: 'PBL-003',
      title: 'PBL 3',
      sp: 0,
      position: 3,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
    {
      id: 'PBL-004',
      title: 'PBL 4',
      sp: 0,
      position: 4,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
  ];


  public drop(event: CdkDragDrop<string[]>, backlogs) {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }
}
