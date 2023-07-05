import { DatePipe, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { Pipe, PipeTransform } from '@angular/core';
registerLocaleData(localeDe, 'de');

@Pipe({
	name: 'ttrpgDateFormat'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
	override transform(value: any, args?: any): any {
		return super.transform(value, "d MMMM y", 'UTC', 'de');
	}
}