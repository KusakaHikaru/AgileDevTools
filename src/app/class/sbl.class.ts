/**
 * SubjectBacklog クラス
 */
export class SubjectBacklog {
  public id: string;
  public title: string;
  public estimatedTime: number;
  public position: number;
  public description: string;

  constructor(id?: string, title?: string, estimatedTime?: number, position?: number, description?: string) {
    this.id = id || '';
    this.title = title || '';
    this.estimatedTime = estimatedTime || 0;
    this.position = position || 0;
    this.description = description || '';
  }

  reset(): void {
    this.id =  '';
    this.title = '';
    this.estimatedTime =  0;
    this.position =  0;
    this.description = '';
  }
  
}
