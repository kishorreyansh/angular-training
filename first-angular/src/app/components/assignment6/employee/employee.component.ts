import { Component,inject } from '@angular/core';
import { EmployeeService } from '../employeeservice/employee.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeeservice = inject(EmployeeService);
  employees = this.employeeservice.employees;

  displayAllEmployees(){
    this.employees = this.employeeservice.getAllEmployees();
  }

  displayMaleEmployees(){
    this.employees = this.employeeservice.getMaleEmployees();
  }

  displayFemaleEmployees(){
    this.employees = this.employeeservice.getFemaleEmployees();
  }
}
