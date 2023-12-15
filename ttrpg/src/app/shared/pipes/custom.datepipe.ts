import { DatePipe, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { Pipe, PipeTransform } from '@angular/core';
registerLocaleData(localeDe, 'de');

@Pipe({
  name: 'ttrpgDateFormat',
  standalone: true
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  /**
   * Format a date to the TTRPG format
   * 
   * @param value The date expression: a Date object, a number (milliseconds since UTC epoch),
   * or an ISO string (https://www.w3.org/TR/NOTE-datetime).
   * @returns The formated date
   */
  public override transform(value: any): any {
    return super.transform(value, "d MMMM y", 'UTC', 'de');
  }
}