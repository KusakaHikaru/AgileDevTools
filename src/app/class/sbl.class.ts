/**
 * SubjectBacklog クラス
 */
import { Backlog } from './backlog.class';
export class SubjectBacklog extends Backlog {
  public label: string;
  public description: string;

  constructor(init?: Partial<SubjectBacklog>) {
    super();
    init ? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.label = '';
    this.description = '';
  }

}
