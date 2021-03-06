import Source from './source.model';

export default class OneNewsModel {
  constructor(
    public id: string = '',
    public source: Source = new Source,
    public autor: string = '',
    public title: string = '',
    public description: string = '',
    public url: string = '',
    public urlToImage: string = '',
    public publishedAt: string = '',
    public content: string = '',
    public createdByMe?: boolean,
  ) {
    this.id = id;
    this.source = source;
    this.autor = autor;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.content = content;
  }
}
