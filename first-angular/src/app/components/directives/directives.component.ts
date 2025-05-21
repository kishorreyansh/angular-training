import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { HighlightDirective } from '../../directives/highlight.directive';
@Component({
  selector: 'app-directives',
  imports: [FormsModule, CommonModule,NumberonlyDirective,HighlightDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 4;

  dayNumber: number = 1;

  stateNames = ['Kansas','Missouri','Chicago','New York'];

  selectedState: string = 'Kansas';

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  myStyle1 = {
    "color": 'red',
    "border": "5px dotted green",
  }

   myStyle2 = {
    "color": 'green',
    "border": "5px dotted red",
  }

  myFunction(){
    if(this.num % 2 == 0){
      return this.myStyle1;
    }else{
      return this.myStyle2;
    }
  }
}
