import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
// import { faPlusCircle } from '@fortawesome/fa-plus-circle';

import { ProductBacklog } from 'src/app/class/pbl.class';
import { SubjectBacklog } from 'src/app/class/sbl.class';
@Component({
  selector: 'app-sample-dash',
  templateUrl: './sample-dash.component.html',
  styleUrls: ['./sample-dash.component.css']
})
export class SampleDashComponent {
  // private faPlusCircle = faPlusCircle
  private pbls = [new ProductBacklog()];

  private labels = [
    {id: '01', viewValue: '設計'},
    {id: '02', viewValue: '設計Rv'},
    {id: '03', viewValue: 'M_UT'},
    {id: '04', viewValue: 'M_UT_Rv'},
  ];


  public drop(event: CdkDragDrop<string[]>, backlogs): void {
    moveItemInArray(backlogs, event.previousIndex, event.currentIndex);
  }

  public addPbl(): void {
    this.pbls.push(new ProductBacklog());
  }

  public addSbl(pbl: ProductBacklog): void {
    pbl.sbls.push(new SubjectBacklog());
  }
}
