import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customsort',
  pure: false
})
export class CustomsortPipe implements PipeTransform {

  transform(arr: any[]){
    console.log('Pipe is called')
    return arr.sort((a,b) => a - b);
  }

}
