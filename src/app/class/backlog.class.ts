/**
 * Backlog クラス
 */
export class Backlog {
  public id: string;
  public title: string;
  public estimated: number | null;

  constructor(init?: Partial<Backlog>) {
    init ? Object.assign(this, init) : this.reset();
  }

  public reset(): void {
    this.id =  '';
    this.title = '';
    this.estimated =  null;
  }

}
