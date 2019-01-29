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
      title: 'PBL 1',
      position: 1,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
    {
      title: 'PBL 2',
      position: 2,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
    {
      title: 'PBL 3',
      position: 3,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
    {
      title: 'PBL 4',
      position: 4,
      sbls: [{ title: 'SBL 1', position: 1, },{ title: 'SBL 2', position: 2, },]
    },
  ];

  items = ['a', 'b', 'c'];

  public drop(event: CdkDragDrop<string[]>, backlogs) {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }
}
