import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true
})
export class TruncatePipe implements PipeTransform {
  /**
   * Truncates a string which surpasses a threshold
   * 
   * @param value The string that is truncated
   * @param limit The number of characters before the string is truncated. Default: 20
   * @param completeWords Only cut after complete words. Default: false
   * @param ellipsis String added after a truncated string. Default: '...'
   * @returns The truncated string
   */
  public transform(value: string, limit = 20, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substring(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substring(0, limit) + ellipsis : value;
  }
}