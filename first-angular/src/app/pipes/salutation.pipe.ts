import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(value: any, gender:string)  {
    if( gender.toLowerCase() === "female")
    {
      return "Miss. " + value;
    }
    else if( gender.toLowerCase() === "male")
    {
      return "Mr. " + value;
    }
    else {
      return value;
    } 
  }
}
