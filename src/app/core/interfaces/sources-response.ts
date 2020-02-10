import Source from '../../news/models/source.model';

export default interface SourcesResponse {
  status: string;
  sources: Array<Source>;
}
