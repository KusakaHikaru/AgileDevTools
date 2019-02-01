/**
 * SubjectBacklog クラス
 */
export class SubjectBacklog {
  public id: string;
  public title: string;
  public estimatedTime: number;
  public position: number;
  public description: string;

  constructor(init?: Partial<SubjectBacklog>) {
    init? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.id =  '';
    this.title = '';
    this.estimatedTime =  0;
    this.position =  0;
    this.description = '';
  }
  
}
