/**
 * ProductBacklog クラス
 */
import { SubjectBacklog } from './sbl.class';

export class ProductBacklog {
  public id: string;
  public title: string;
  public estimated: number | null;
  public position: number;
  public sbls: SubjectBacklog[];

  constructor(init?: Partial<ProductBacklog>) {
    init? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.id =  '';
    this.title = '';
    this.estimated =  null;
    this.position =  0;
    this.sbls = [new SubjectBacklog()];
  }

}
