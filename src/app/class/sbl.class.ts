/**
 * SubjectBacklog クラス
 */
export class SubjectBacklog {
  public id: string;
  public title: string;
  public estimated: number | null;
  public position: number;
  public description: string;

  constructor(init?: Partial<SubjectBacklog>) {
    init? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.id =  '';
    this.title = '';
    this.estimated =  null;
    this.position =  0;
    this.description = '';
  }
  
}
