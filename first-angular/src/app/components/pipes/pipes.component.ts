import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../pipes/remaining.pipe';
import { CustomsortPipe } from '../../pipes/customsort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule,FormsModule,RemainingPipe,CustomsortPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  standalone: true
})
export class PipesComponent {
  userName: string = "Virat kohli"
  salary: number = 1000;
  today: Date = new Date();


  user: object = {name:'Reynash',age:4,add:'Hyderabad'};

  numArr: number[] = [10,20,30,40];
  msg: string = '';

  num: number =23;

   arr = [10, 50, 30, 40, 20]
  arr2 = [10, 50, 30, 40, 20]
}
