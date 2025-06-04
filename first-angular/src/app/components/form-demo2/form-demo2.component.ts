import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-demo2',
  imports: [FormsModule, CommonModule],
  templateUrl: './form-demo2.component.html',
  styleUrl: './form-demo2.component.css'
})
export class FormDemo2Component {

  user = {
    name: 'Kohli',
    email: 'virat@gmail.com',
    password: 'kohli',
    gender: 'male',
    address: {
      street: 'Delhi',
      city: 'Delhi'
    }
  }

  submitUserForm(userForm: NgForm){
    console.log(userForm);
    console.log(userForm.value);
  }

}
