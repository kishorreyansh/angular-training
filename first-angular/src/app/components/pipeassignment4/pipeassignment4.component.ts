import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { SearchemployeePipe } from '../../pipes/searchemployee.pipe';
import { DateagePipe } from '../../pipes/dateage.pipe';
import { NumbertoromanPipe } from '../../pipes/numbertoroman.pipe';

@Component({
  selector: 'app-pipeassignment4',
  imports: [FormsModule,CommonModule,OrdinalPipe,SalutationPipe,SearchemployeePipe,DateagePipe,NumbertoromanPipe],
  templateUrl: './pipeassignment4.component.html',
  styleUrl: './pipeassignment4.component.css'
})
export class Pipeassignment4Component {

  num: number = 17;
  searchEmployee: string = '';
  dateVal: string = '';
  numroman: number = 1;

   employees = [
    { "eId": 101, "name": "Kohli", "sal": 15000, "gender": "male" },
    { "eId": 104, "name": "Reyansh", "sal": 8000, "gender": "male" },
    { "eId": 103, "name": "Ridhansh", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "Trisha", "sal": 19000, "gender": "female" },
    { "eId": 105, "name": "Kishor", "sal": 8000, "gender": "male" },
    { "eId": 106, "name": "Shreya Ghoshal", "sal": 49000, "gender": "female" }
  ];

}
