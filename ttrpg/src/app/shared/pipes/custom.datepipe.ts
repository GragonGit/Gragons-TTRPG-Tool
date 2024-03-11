import { DatePipe, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import { Pipe, PipeTransform, inject } from '@angular/core';
import { LOCAL_STORAGE_KEYS } from '@data-access/localStorage';
import { TranslateService } from '@ngx-translate/core';
registerLocaleData(localeDe, 'de');
registerLocaleData(localeEn, 'en');

@Pipe({
  name: 'ttrpgDateFormat',
  standalone: true
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  private translateService = inject(TranslateService)
  /**
   * Format a date to the TTRPG format
   * 
   * @param value The date expression: a Date object, a number (milliseconds since UTC epoch),
   * or an ISO string (https://www.w3.org/TR/NOTE-datetime).
   * @returns The formated date
   */
  public override transform(value: any): any {
    return super.transform(value, "d MMMM y", 'UTC', localStorage.getItem(LOCAL_STORAGE_KEYS.LANG) ?? this.translateService.getDefaultLang());
  }
}