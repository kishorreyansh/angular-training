import { Component } from '@angular/core';
import { EmployeeModel } from '../models/employee-model';
import { Observable } from 'rxjs';
import { EmployeeService } from '../service/employee.service';
import { CommonModule } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  faTimes = faTimes;
  employees$: Observable<EmployeeModel[]>;

  constructor(private empService: EmployeeService) {
    this.employees$ = this.empService.employees$;
  }

  deleteEmployee(id: number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        this.empService.deleteEmployee(id);
        Swal.fire({
          title: "Deleted!",
          text: "Record has been deleted.",
          icon: "success"
        });
      }
    });
  }

  clearEmployeeDetails(){
    Swal.fire({
      title: "Are you sure to Clear?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Clear"
    }).then((result) => {
      if (result.isConfirmed) {
        this.empService.clearEmployee();
        Swal.fire({
          title: "Cleared!",
          text: "Records has been cleared.",
          icon: "success"
        });
      }
    });
    
  }
  
}
