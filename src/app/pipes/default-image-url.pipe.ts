import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImageUrl'
})
export class DefaultImageUrlPipe implements PipeTransform {

  transform(url: string, defaultUrl: string): string {
    return url && url.length > 7 ? url : defaultUrl;
  }
}
