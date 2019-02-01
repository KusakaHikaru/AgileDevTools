/**
 * ProductBacklog クラス
 */
import { SubjectBacklog } from './sbl.class';

export class ProductBacklog {
  public id: string;
  public title: string;
  public sp: number;
  public position: number;
  public sbls: SubjectBacklog[];

  constructor(id?: string, title?: string, sp?: number, position?: number, sbls?: SubjectBacklog[]) {
    this.id = id || '';
    this.title = title || '';
    this.sp = sp || 0;
    this.position = position || 0;
    this.sbls = sbls || [new SubjectBacklog()];
  }

  reset(): void {
    this.id =  '';
    this.title = '';
    this.sp =  0;
    this.position =  0;
    this.sbls = [new SubjectBacklog()];
  }

}
