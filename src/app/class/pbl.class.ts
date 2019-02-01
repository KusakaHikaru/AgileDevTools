/**
 * ProductBacklog クラス
 */
import { SubjectBacklog } from './sbl.class';

export class ProductBacklog {
  public id: string;
  public title: string;
  public estimated: number | null;
  public sbls: SubjectBacklog[];

  constructor(init?: Partial<ProductBacklog>) {
    init ? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.id =  '';
    this.title = '';
    this.estimated =  null;
    this.sbls = [new SubjectBacklog()];
  }

}
