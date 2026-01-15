import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  name: string = "Kohli";

  profession: string = "Cricket";

  image: string = "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20251216023646.jpg";

  flag: boolean = true;

  firstEvent(){
    alert("First Event Triggered");
  }

  secondEvent(){
    alert("Second Event Triggered");
  }

  colSpanValue = 2;

  num1: number = 1;
  num2: number = 1;

  myAddition: number =0;
  addition(val1: number | string, val2: number | string){
    this.myAddition = +val1 + +val2;
  }
}
