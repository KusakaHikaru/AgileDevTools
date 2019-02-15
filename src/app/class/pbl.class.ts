/**
 * ProductBacklog クラス
 */
import { SubjectBacklog } from './sbl.class';
import { Backlog } from './backlog.class';

export class ProductBacklog extends Backlog{
  public estimatedTimeSum: number | null;
  public sbls: SubjectBacklog[];

  constructor(init?: Partial<ProductBacklog>) {
    super();
    init ? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.estimatedTimeSum = null;
    this.sbls = [new SubjectBacklog()];
  }

}
