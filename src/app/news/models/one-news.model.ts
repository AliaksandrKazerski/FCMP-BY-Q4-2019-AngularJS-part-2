export class OneNewsModel {
  constructor(
    public _id: string = '',
    public category: string = '',
    public description: string = '',
    public language: string = '',
    public name: string = '',
    public url: string = '',
    public createdByMe?: boolean
  ) {
    this._id = _id;
    this.category = category;
    this.description = description;
    this.language = language;
    this.name = name;
    this.url = url;
    this.createdByMe = createdByMe;
  }
}
