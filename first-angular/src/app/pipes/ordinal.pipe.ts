import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(input: number): string {

    var suffix = '';
    var lastdigit = input % 10;
    var lasttwodigits = input % 100;
    if (!input || input < 1) {
      return String(input);
    }
    if (lastdigit === 1 && lasttwodigits !== 11) {
      suffix = 'st';
    } else if (lastdigit === 2 && lasttwodigits !== 12) {
      suffix = 'nd';
    } else if (lastdigit === 3 && lasttwodigits !== 13) {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
    return input + suffix;
  }

}
