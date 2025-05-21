import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining',
  pure: true
})
export class RemainingPipe implements PipeTransform {

  // transform(input: any, maxlength: number =100) {
  //   return maxlength-input.length;
  // }
  transform(input: any, ...args: any) {
    return args[0]-input.length;
  }
}
