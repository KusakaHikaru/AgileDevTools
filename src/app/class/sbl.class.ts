/**
 * SubjectBacklog クラス
 */
export class SubjectBacklog {
  public id: string;
  public title: string;
  public estimated: number | null;
  public label: string;
  public description: string;

  constructor(init?: Partial<SubjectBacklog>) {
    init ? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.id =  '';
    this.title = '';
    this.estimated =  null;
    this.label = '';
    this.description = '';
  }

}
