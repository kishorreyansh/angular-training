import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styles: ['h3 {color: red;}'],
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  userName: string = 'Virat Kohli';
  imgUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6Ha4DXos7dME95sqVTBtMvGdhuYn3ERc9Q&s";
  flag: boolean = false;
  myColSpan: number =2;

  favActor: string = 'Prabhas';
  imgFavUrl: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzr2M84xnOvEb6smMGBcbijc6gzgiN_2FDQ&s";
  imgFavUrl1: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Rn_hO9SUcQQ7Nsqm6ZbR50srMe-bYtVkfA&s";
  imgFavUrl2: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh04Ew91zzpS63c9jbv4LMBefSD0CTZJU4Xw&s";

  num1: number = 1;
  num2: number = 1;

  no1: number = 10;
  no222: number = 20;

  addResult:number =0;
  addition(val1: string | number, val2: string | number){
    this.addResult = +val1 + +val2;
  }

  f1(){
    alert("f1 function triggered");
  }
}
