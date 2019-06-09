export class Hero {
  id: number;
  name: string;

  constructor(model?) {
    if (model) {
      this.id = model.id;
      this.name = model.name;
    }
  }
}

export enum DisplayComponentEnum {
  DASHBOARD,
  LIST,
}
