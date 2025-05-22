import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbertoroman'
})
export class NumbertoromanPipe implements PipeTransform {


  transform(input: number): string {
    let romanString = "";
    const map: { [key: string]: number } = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      VIII: 8,
      VII: 7,
      VI: 6,
      V: 5,
      IV: 4,
      III: 3,
      II: 2,
      I: 1,
    };

    
    for (let key in map) {
      let value = map[key];
      while (input >= value) {
        romanString += key;
        input = input - value;
      }
    }
    return romanString;
  }
}
