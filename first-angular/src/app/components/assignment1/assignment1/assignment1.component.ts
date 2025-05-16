import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-assignment1',
  imports: [FormsModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css'
})
export class Assignment1Component {

  isShow=false;
  counter: number = 0;
  selectedState: string = '';
  showPass = false;
  showPasswordText: string = 'password';
  selectedOperation: string = '';
  result: number = 0;
  remValue: string = '';
  count: number = 100;
  themeFlag: boolean = false;
  

  arithemticOperation(num1: string, num2: string){
    const number1 = Number(num1);
    const number2 = Number(num2);
    //this.result = eval(num1+(this.selectedOperation)+num2);
    // const num1=parseInt(number);
    switch(this.selectedOperation){
      case '+':
        this.result = number1 + number2;
        break;
      case '-':
        this.result = number1 - number2;
        break;
      case '*':
        this.result = number1 * number2;
        break;
      case '/':
        this.result = number1 / number2;
        break;
    }
  }
  

  showToggle(){
    this.isShow = !this.isShow;
  }

  showPassword(){
    this.showPass = !this.showPass;
    this.showPasswordText = this.showPasswordText ? "text": "password";
  }

  toggleTheme(){
    if(this.themeFlag){
      document.body.classList.remove('dark-mode');
    }else{
       document.body.classList.add('dark-mode');
    }
    this.themeFlag = !this.themeFlag;
  }

  increment(){
    this.counter = this.counter + 1;
  }

  decrement(){
    this.counter = this.counter - 1;
  }

  reset(){
    this.counter = 0;
  }

  remainingCharacters(){
    this.count = 100 - this.remValue.length;

  }
}
