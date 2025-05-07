import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  userName: string = 'Virat Kohli';
  imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6Ha4DXos7dME95sqVTBtMvGdhuYn3ERc9Q&s";
  flag: boolean = false;
  myColSpan: number =2;

  num1: number = 1;
  num2: number = 1;

  addResult:number =0;
  addition(val1: string | number, val2: string | number){
    this.addResult = +val1 + +val2;
  }

  f1(){
    alert("f1 function triggered");
  }
}
