import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe, 'de');

@Pipe({
	name: 'lastOpenedDate'
})
export class CustomDatePipe extends
	DatePipe implements PipeTransform {
	override transform(value: any, args?: any): any {
		return super.transform(value, "d MMMM y", 'UTC', 'de');
	}
}