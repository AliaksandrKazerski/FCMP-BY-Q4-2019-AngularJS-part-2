import OneNewsModel from 'src/app/news/models/one-news.model';

export default interface NewsResponse {
  status: string;
  totalResults: number;
  articles: Array<OneNewsModel>;
}
