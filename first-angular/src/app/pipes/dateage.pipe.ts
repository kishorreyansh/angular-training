import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateage'
})
export class DateagePipe implements PipeTransform {

  transform(value: any): number {
    if (!value) return 0;

    const birthDate = new Date(value);
    if (isNaN(birthDate.getTime())) return 0;

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
}
